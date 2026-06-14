import { neon } from '@neondatabase/serverless';

// Export the type definition so line 9 in your search page works
export interface Product {
  id: number;
  source_id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  discount_price: number;
  affiliate_url: string;
  category: string;
  platform: string;
  created_at: string;
}

/**
 * Fetches and filters products from Neon Postgres based on the user's search query
 */
export async function getFilteredProductsByQuery(query: string): Promise<Product[]> {
  const sql = neon(process.env.POSTGRES_URL!);

  if (!query) {
    // If search is empty, return latest 20 products
    return await sql`
      SELECT * FROM public.product 
      ORDER BY created_at DESC 
      LIMIT 20
    ` as Product[];
  }

  // Search by matching names or descriptions (case-insensitive)
  const searchPattern = `%${query}%`;

  return await sql`
    SELECT * FROM public.product 
    WHERE name ILIKE ${searchPattern} 
       OR description ILIKE ${searchPattern} 
       OR category ILIKE ${searchPattern}
    ORDER BY created_at DESC
  ` as Product[];
}