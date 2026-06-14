import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// Helper function to map Nykaa category tags to your layout categories
const mapCategory = (nykaaCategory: string): string => {
  const mapping: { [key: string]: string } = {
    'Lipstick': 'makeup-lips',
    'Eyeliner': 'makeup-eyes',
    'Moisturizer': 'skincare-face',
    'Shampoo': 'haircare'
  };
  return mapping[nykaaCategory] || 'uncategorized';
};

export async function GET(request: Request) {
  // 1. Auth check for Vercel Cron Security
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Connect to your Neon Instance
  const sql = neon(process.env.POSTGRES_URL!);

  try {
    // 2. SCRAPE: Fixed exact Apify execution dataset target path
    const scrapeResponse = await fetch(`https://apify.com{process.env.APIFY_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        searchQueries: ["lipstick", "moisturizer"], 
        maxItems: 20
      })
    });
    const scrapedProducts = await scrapeResponse.json();

    // Loop through extracted items
    for (const item of scrapedProducts) {
      
      // 3. AFFILIATE: Fixed conversion endpoint via Cuelinks Link Generator Engine
      const affiliateApiResponse = await fetch(`https://cuelinks.com`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${process.env.CUELINKS_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: item.url, subid: "v0-automation" })
      });
      const affiliateData = await affiliateApiResponse.json();
      const affiliateUrl = affiliateData.affiliate_url;

      // 4. CATEGORY MAPPING & FALLBACKS
      const targetCategory = mapCategory(item.categoryName);
      const productDescription = item.description || `${item.title} available on Nykaa.`;

      // 5. NEON DATABASE UPSERT: Matches your exact 13-row schema fields
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

    return NextResponse.json({ success: true, count: scrapedProducts.length });

  } catch (error) {
    console.error('Automation Pipeline Error:', error);
    return NextResponse.json({ success: false, error: 'Database synchronization failed' }, { status: 500 });
  }
}