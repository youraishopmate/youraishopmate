import { NextRequest, NextResponse } from 'next/server'

// More comprehensive product database
const PRODUCTS_DB = [
  // Electronics
  {
    id: 1,
    name: 'Sony WH-CH720 Wireless Headphones',
    price: 4999,
    platform: 'Amazon India',
    category: 'Electronics',
    rating: 4.2,
    description: 'Wireless headphones with 35-hour battery life',
  },
  {
    id: 2,
    name: 'Boult Audio ProBass Earbuds',
    price: 1999,
    platform: 'Amazon India',
    category: 'Electronics',
    rating: 4.3,
    description: 'True wireless earbuds with noise cancellation',
  },
  {
    id: 3,
    name: 'OnePlus 12 Smartphone',
    price: 64999,
    platform: 'Flipkart',
    category: 'Electronics',
    rating: 4.5,
    description: '5G smartphone with Snapdragon 8 Gen 3 processor',
  },
  // Fashion
  {
    id: 4,
    name: 'IKEA MARKUS Office Chair',
    price: 6999,
    platform: 'Flipkart',
    category: 'Furniture',
    rating: 4.0,
    description: 'Comfortable office chair with mesh back',
  },
  {
    id: 5,
    name: 'Levi\'s 511 Slim Fit Jeans',
    price: 2499,
    platform: 'Amazon India',
    category: 'Fashion',
    rating: 4.4,
    description: 'Classic slim fit denim jeans for casual wear',
  },
  // Beauty
  {
    id: 6,
    name: 'Nykaa Face Wash Bundle',
    price: 1299,
    platform: 'Nykaa',
    category: 'Beauty',
    rating: 4.5,
    description: 'Premium skincare bundle for all skin types',
  },
  {
    id: 7,
    name: 'Neutrogena Sunscreen SPF 50',
    price: 399,
    platform: 'Nykaa',
    category: 'Beauty',
    rating: 4.3,
    description: 'UV protection with oil-free formula',
  },
  // Sports
  {
    id: 8,
    name: 'Fittr Yoga Mat',
    price: 799,
    platform: 'Flipkart',
    category: 'Sports',
    rating: 4.1,
    description: 'Premium non-slip yoga mat for fitness',
  },
  {
    id: 9,
    name: 'Decathlon Running Shoes',
    price: 1999,
    platform: 'Flipkart',
    category: 'Sports',
    rating: 4.2,
    description: 'Professional running shoes with cushioning',
  },
  // Home
  {
    id: 10,
    name: 'Philips Hue Smart Bulb',
    price: 2999,
    platform: 'Amazon India',
    category: 'Home',
    rating: 4.4,
    description: 'Smart LED bulb with WiFi connectivity',
  },
]

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')?.toLowerCase() || ''
    const category = searchParams.get('category')?.toLowerCase()
    const platform = searchParams.get('platform')?.toLowerCase()
    const maxPrice = searchParams.get('maxPrice')
      ? parseInt(searchParams.get('maxPrice')!)
      : undefined
    const minPrice = searchParams.get('minPrice')
      ? parseInt(searchParams.get('minPrice')!)
      : undefined

    let results = PRODUCTS_DB

    // Filter by search query
    if (query) {
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    }

    // Filter by category
    if (category) {
      results = results.filter((p) =>
        p.category.toLowerCase().includes(category)
      )
    }

    // Filter by platform
    if (platform) {
      results = results.filter((p) =>
        p.platform.toLowerCase().includes(platform)
      )
    }

    // Filter by price range
    if (minPrice) {
      results = results.filter((p) => p.price >= minPrice)
    }
    if (maxPrice) {
      results = results.filter((p) => p.price <= maxPrice)
    }

    // Sort by rating
    results.sort((a, b) => b.rating - a.rating)

    return NextResponse.json({
      products: results,
      total: results.length,
    })
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
