import { NextRequest, NextResponse } from 'next/server'

const TRENDS_DB = [
  {
    id: 1,
    title: 'Sustainable Fashion',
    description: 'Eco-friendly clothing and accessories gaining popularity among Gen Z',
    searchVolume: 45000,
    trend: 'up',
    category: 'Fashion',
    keywords: ['organic cotton', 'vegan leather', 'sustainable brands'],
  },
  {
    id: 2,
    title: 'Productivity Gadgets',
    description: 'Tech accessories for remote work setup becoming essential',
    searchVolume: 38000,
    trend: 'up',
    category: 'Electronics',
    keywords: ['standing desk', 'ergonomic mouse', 'webcam'],
  },
  {
    id: 3,
    title: 'Home Gym Equipment',
    description: 'Fitness equipment for home workout enthusiasts at peak demand',
    searchVolume: 52000,
    trend: 'up',
    category: 'Sports & Fitness',
    keywords: ['dumbbells', 'yoga mats', 'resistance bands'],
  },
  {
    id: 4,
    title: 'Natural Skincare',
    description: 'Clean beauty and organic skincare products trending',
    searchVolume: 65000,
    trend: 'up',
    category: 'Beauty',
    keywords: ['herbal', 'ayurvedic', 'chemical-free'],
  },
  {
    id: 5,
    title: 'Smart Home Devices',
    description: 'AI-powered smart home automation systems',
    searchVolume: 48000,
    trend: 'up',
    category: 'Electronics',
    keywords: ['smart speakers', 'IoT devices', 'home automation'],
  },
  {
    id: 6,
    title: 'Minimalist Living',
    description: 'Minimalist furniture and home decor style',
    searchVolume: 35000,
    trend: 'stable',
    category: 'Home & Living',
    keywords: ['decluttering', 'scandinavian design', 'capsule wardrobe'],
  },
  {
    id: 7,
    title: 'Premium Coffee Equipment',
    description: 'Coffee makers and accessories for home brewing',
    searchVolume: 28000,
    trend: 'up',
    category: 'Home & Living',
    keywords: ['espresso machine', 'coffee grinder', 'pour over'],
  },
  {
    id: 8,
    title: 'Plant-based Fashion',
    description: 'Vegan and plant-derived materials in fashion',
    searchVolume: 32000,
    trend: 'up',
    category: 'Fashion',
    keywords: ['mushroom leather', 'pineapple fabric', 'cork accessories'],
  },
]

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')?.toLowerCase()
    const trending = searchParams.get('trending')
    const limit = parseInt(searchParams.get('limit') || '10')

    let results = TRENDS_DB

    // Filter by category
    if (category) {
      results = results.filter((t) =>
        t.category.toLowerCase().includes(category)
      )
    }

    // Filter by trending status
    if (trending === 'rising') {
      results = results.filter((t) => t.trend === 'up')
    }

    // Sort by search volume
    results.sort((a, b) => b.searchVolume - a.searchVolume)

    // Apply limit
    results = results.slice(0, limit)

    return NextResponse.json({
      trends: results,
      total: results.length,
    })
  } catch (error) {
    console.error('Trends API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch trends' },
      { status: 500 }
    )
  }
}
