import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

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
  // Connect to Neon
  const sql = neon(process.env.POSTGRES_URL!);

  // Check if you've added your free Apify token yet
  if (!process.env.APIFY_TOKEN) {
    return NextResponse.json({ 
      success: false, 
      error: "Missing APIFY_TOKEN. Please sign up for a free account at apify.com to test." 
    }, { status: 400 });
  }

  try {
    // Call the scraper using your free account token
    const scrapeResponse = await fetch(`https://apify.com{process.env.APIFY_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        searchQueries: ["lipstick"], 
        maxItems: 5 // Low number for quick testing
      })
    });
    const scrapedProducts = await scrapeResponse.json();

    for (const item of scrapedProducts) {
      let affiliateUrl = item.url; // Default to direct product link

      // If you eventually get your Cuelinks API key, this block automatically switches on!
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
          console.log("Cuelinks token not active yet, falling back to direct link.");
        }
      }

      const targetCategory = mapCategory(item.categoryName);
      const productDescription = item.description || `${item.title} available on Nykaa.`;

      // Save directly to your Neon Database
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

    return NextResponse.json({ success: true, status: "Database populated with test products!", count: scrapedProducts.length });

  } catch (error) {
    console.error('Pipeline Error:', error);
    return NextResponse.json({ success: false, error: 'Check server logs' }, { status: 500 });
  }
}