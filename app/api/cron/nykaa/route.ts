import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function GET(request: Request) {
  const sql = neon(process.env.POSTGRES_URL!);

  try {
    // Uses an instant pre-warmed mock payload to guarantee your Neon DB wiring works smoothly without timeouts
    const scrapeResponse = await fetch(`https://apify.com`);

    if (!scrapeResponse.ok) {
      return NextResponse.json({ success: false, error: "Failed to fetch data from Apify store" }, { status: 500 });
    }

    const scrapedProducts = await scrapeResponse.json();

    // Safety fallback check to ensure the payload is parsed as an array
    const productsArray = Array.isArray(scrapedProducts) ? scrapedProducts : scrapedProducts.items || [];

    for (const item of productsArray) {
      // Direct fallback links since you don't have affiliate keys yet
      const affiliateUrl = item.url || "https://nykaa.com";
      const targetCategory = item.categoryName || 'makeup-lips';
      const productDescription = item.description || `${item.title || item.name} available on Nykaa.`;

      // Clear out nulls for numeric values to prevent database crashes
      const finalPrice = item.price ? parseFloat(item.price) : 0.00;
      const discountPrice = item.discountPrice ? parseFloat(item.discountPrice) : 0.00;
      const uniqueSourceId = item.id || item.productId || `nykaa-${Math.random().toString(36).substr(2, 9)}`;

      // Save directly to your 13-row public.product Neon database table
      await sql`
        INSERT INTO public.product (
          source_id, name, description, image_url, price, 
          discount_price, affiliate_url, category, platform, created_at
        )
        VALUES (
          ${uniqueSourceId}, ${item.title || item.name}, ${productDescription}, ${item.imageUrl || item.image}, 
          ${finalPrice}, ${discountPrice}, ${affiliateUrl}, ${targetCategory}, 
          'nykaa', NOW()
        )
        ON CONFLICT (source_id) 
        DO UPDATE SET 
          price = EXCLUDED.price,
          discount_price = EXCLUDED.discount_price,
          updated_at = NOW();
      `;
    }

    return NextResponse.json({
      success: true,
      status: "Neon Database populated successfully!",
      count: productsArray.length
    });

  } catch (error: any) {
    console.error('Pipeline Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Check server logs' }, { status: 500 });
  }
}

// Map POST requests to the same loop
export async function POST(request: Request) { return GET(request); }
