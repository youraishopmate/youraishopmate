import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// Helper function to map Nykaa category tags to your website layout categories
const mapCategory = (nykaaCategory: string): string => {
  const mapping: { [key: string]: string } = {
    'Lipstick': 'makeup-lips',
    'Eyeliner': 'makeup-eyes',
    'Moisturizer': 'skincare-face',
    'Shampoo': 'haircare'
  };
  return mapping[nykaaCategory] || 'uncategorized';
};

// Core Automation Engine Runner Routine
async function handleSync(request: Request) {
  // Connect to Neon Database Instance
  const sql = neon(process.env.POSTGRES_URL!);

  // Check if you've added your free Apify token yet to protect against server crashes
  if (!process.env.APIFY_TOKEN) {
    return NextResponse.json({ 
      success: false, 
      error: "Missing APIFY_TOKEN. Please sign up for a free account at apify.com to test." 
    }, { status: 400 });
  }

  try {
    // 1. SCRAPE: Trigger the cloud actor worker scraper
    const scrapeResponse = await fetch(`https://apify.com{process.env.APIFY_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        searchQueries: ["lipstick"], 
        maxItems: 5 // Low item index count for rapid test cycles
      })
    });
    const scrapedProducts = await scrapeResponse.json();

    // Loop through individual product items extracted
    for (const item of scrapedProducts) {
      let affiliateUrl = item.url; // Fallback to direct raw store listing if affiliate token isn't ready

      // 2. AFFILIATE: Dynamically convert listing via link optimizer if your token is live
      if (process.env.CUELINKS_API_KEY) {
        try {
          const affiliateApiResponse = await fetch(`https://cuelinks.com`, {
            method: 'POST',
            headers: { 
              'Authorization': `Bearer ${process.env.CUELINKS_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: item.url, subid: "v0-automation" })
          });
          const affiliateData = await affiliateApiResponse.json();
          if (affiliateData?.affiliate_url) {
            affiliateUrl = affiliateData.affiliate_url;
          }
        } catch (e) {
          console.log("Cuelinks token not active yet, skipping conversion hook.");
        }
      }

      const targetCategory = mapCategory(item.categoryName);
      const productDescription = item.description || `${item.title} available on Nykaa.`;

      // 3. DATABASE UPSERT: Feeds directly into your 13-row public.product Neon schema
      await sql`
        INSERT INTO public.product (
          source_id, name, description, image_url, price, 
          discount_price, affiliate_url, category, platform, created_at
        )
        VALUES (
          ${item.id}, ${item.title}, ${productDescription}, ${item.imageUrl}, 
          ${item.price}, ${item.discountPrice}, ${affiliateUrl}, ${targetCategory}, 
          'nykaa', NOW()
        )
        ON CONFLICT (source_id) 
        DO UPDATE SET 
          price = EXCLUDED.price,
          discount_price = EXCLUDED.discount_price,
          affiliate_url = EXCLUDED.affiliate_url;
      `;
    }

    return NextResponse.json({ 
      success: true, 
      status: "Database populated with test products successfully!", 
      count: scrapedProducts.length 
    });

  } catch (error) {
    console.error('Automation Sync Pipeline Broken:', error);
    return NextResponse.json({ success: false, error: 'Internal pipeline operations failed' }, { status: 500 });
  }
}

// Export both structural router endpoints to resolve HTTP 405 method mismatches completely
export async function GET(request: Request) { return handleSync(request); }
export async function POST(request: Request) { return handleSync(request); }
