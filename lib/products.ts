export interface Product {
  id: number
  name: string
  brand: string
  price: number
  originalPrice: number
  platform: 'Amazon' | 'Flipkart' | 'Nykaa' | 'Myntra'
  category: string
  rating: number
  reviews: number
  emoji: string
  bg: string
  discountPercent?: number
  affiliateUrl?: string
}

// 8 featured products for search results
export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'boAt Airdopes 141',
    brand: 'boAt',
    price: 1299,
    originalPrice: 2999,
    platform: 'Amazon',
    category: 'Electronics',
    rating: 4.2,
    reviews: 12400,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 57,
    affiliateUrl: 'https://amazon.in/boAt-Airdopes-141-Bluetooth',
  },
  {
    id: 2,
    name: 'Nike Air Max Shoes',
    brand: 'Nike',
    price: 2499,
    originalPrice: 4999,
    platform: 'Flipkart',
    category: 'Fashion',
    rating: 4.5,
    reviews: 8900,
    emoji: '👟',
    bg: '#F1EFE8',
    discountPercent: 50,
    affiliateUrl: 'https://flipkart.com/nike-air-max',
  },
  {
    id: 3,
    name: 'Lakme 9to5 Lipstick',
    brand: 'Lakme',
    price: 349,
    originalPrice: 499,
    platform: 'Nykaa',
    category: 'Beauty',
    rating: 4.3,
    reviews: 5600,
    emoji: '💄',
    bg: '#FBEAF0',
    discountPercent: 30,
    affiliateUrl: 'https://nykaa.com/lakme-9to5-lipstick',
  },
  {
    id: 4,
    name: 'Milton Water Bottle',
    brand: 'Milton',
    price: 299,
    originalPrice: 499,
    platform: 'Amazon',
    category: 'Wellness',
    rating: 4.4,
    reviews: 7200,
    emoji: '🍶',
    bg: '#E8F5E9',
    discountPercent: 40,
    affiliateUrl: 'https://amazon.in/Milton-Water-Bottle',
  },
  {
    id: 5,
    name: 'Fastrack Watch',
    brand: 'Fastrack',
    price: 1499,
    originalPrice: 2999,
    platform: 'Flipkart',
    category: 'Fashion',
    rating: 4.1,
    reviews: 4300,
    emoji: '⌚',
    bg: '#FFF3E0',
    discountPercent: 50,
    affiliateUrl: 'https://flipkart.com/fastrack-watch',
  },
  {
    id: 6,
    name: 'Mamaearth Vitamin C Serum',
    brand: 'Mamaearth',
    price: 499,
    originalPrice: 699,
    platform: 'Nykaa',
    category: 'Beauty',
    rating: 4.3,
    reviews: 6800,
    emoji: '✨',
    bg: '#F0F4C3',
    discountPercent: 29,
    affiliateUrl: 'https://nykaa.com/mamaearth-vitamin-c-serum',
  },
  {
    id: 7,
    name: 'Cactus Humidifier',
    brand: 'Miniso',
    price: 899,
    originalPrice: 1299,
    platform: 'Amazon',
    category: 'Quirky',
    rating: 4.0,
    reviews: 3100,
    emoji: '🌵',
    bg: '#FAEEDA',
    discountPercent: 31,
    affiliateUrl: 'https://amazon.in/Cactus-Humidifier',
  },
  {
    id: 8,
    name: 'Noise ColorFit Pro',
    brand: 'Noise',
    price: 2499,
    originalPrice: 5999,
    platform: 'Flipkart',
    category: 'Electronics',
    rating: 4.2,
    reviews: 9800,
    emoji: '⌚',
    bg: '#E0E7FF',
    discountPercent: 58,
    affiliateUrl: 'https://flipkart.com/noise-colorfit-pro',
  },
]

// Earbuds-specific products
export const earbudsProducts: Product[] = [
  {
    id: 101,
    name: 'boAt Airdopes 141',
    brand: 'boAt',
    price: 799,
    originalPrice: 1499,
    platform: 'Amazon',
    category: 'Electronics',
    rating: 4.3,
    reviews: 8900,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 47,
    affiliateUrl: 'https://amazon.in/boAt-Airdopes-141-Bluetooth',
  },
  {
    id: 102,
    name: 'Noise Buds VS104',
    brand: 'Noise',
    price: 849,
    originalPrice: 1799,
    platform: 'Flipkart',
    category: 'Electronics',
    rating: 4.2,
    reviews: 6700,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 53,
    affiliateUrl: 'https://flipkart.com/noise-buds-vs104',
  },
  {
    id: 103,
    name: 'realme Buds T100',
    brand: 'realme',
    price: 849,
    originalPrice: 1999,
    platform: 'Flipkart',
    category: 'Electronics',
    rating: 4.1,
    reviews: 5200,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 58,
    affiliateUrl: 'https://flipkart.com/realme-buds-t100',
  },
  {
    id: 104,
    name: 'PTron Basspods 94',
    brand: 'PTron',
    price: 699,
    originalPrice: 1299,
    platform: 'Amazon',
    category: 'Electronics',
    rating: 4.0,
    reviews: 4100,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 46,
    affiliateUrl: 'https://amazon.in/PTron-Basspods-94',
  },
  {
    id: 105,
    name: 'Boult Audio Z40',
    brand: 'Boult Audio',
    price: 799,
    originalPrice: 1799,
    platform: 'Amazon',
    category: 'Electronics',
    rating: 4.4,
    reviews: 7600,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 56,
    affiliateUrl: 'https://amazon.in/Boult-Audio-Z40',
  },
  {
    id: 106,
    name: 'JBL Wave Beam',
    brand: 'JBL',
    price: 999,
    originalPrice: 2299,
    platform: 'Amazon',
    category: 'Electronics',
    rating: 4.5,
    reviews: 9200,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 57,
    affiliateUrl: 'https://amazon.in/JBL-Wave-Beam',
  },
  {
    id: 107,
    name: 'Zebronics Zeb-Sound Bomb',
    brand: 'Zebronics',
    price: 599,
    originalPrice: 1199,
    platform: 'Flipkart',
    category: 'Electronics',
    rating: 3.9,
    reviews: 3400,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 50,
    affiliateUrl: 'https://flipkart.com/zebronics-zeb-sound-bomb',
  },
  {
    id: 108,
    name: 'Portronics Harmonics Twins S9',
    brand: 'Portronics',
    price: 749,
    originalPrice: 1499,
    platform: 'Amazon',
    category: 'Electronics',
    rating: 4.2,
    reviews: 6100,
    emoji: '🎧',
    bg: '#E6F1FB',
    discountPercent: 50,
    affiliateUrl: 'https://amazon.in/Portronics-Harmonics-Twins-S9',
  },
]

export const mockProducts: Product[] = [
  ...featuredProducts,
  ...earbudsProducts,
  // Additional products for filtering
  { id: 9, name: 'Matte Lip Set', brand: 'Nykaa', price: 799, originalPrice: 999, platform: 'Nykaa', category: 'Beauty', rating: 4.5, reviews: 4200, emoji: '💄', bg: '#FBEAF0', affiliateUrl: 'https://nykaa.com/matte-lip-set' },
  { id: 10, name: 'Face Wash 100ml', brand: 'Cetaphil', price: 549, originalPrice: 699, platform: 'Amazon', category: 'Beauty', rating: 4.7, reviews: 5600, emoji: '🧴', bg: '#E1F5FE', affiliateUrl: 'https://amazon.in/Cetaphil-Face-Wash' },
  { id: 11, name: 'Yoga Mat', brand: 'Lifelong', price: 999, originalPrice: 1499, platform: 'Amazon', category: 'Wellness', rating: 4.5, reviews: 3400, emoji: '🧘', bg: '#F1F8E9', affiliateUrl: 'https://amazon.in/Lifelong-Yoga-Mat' },
  { id: 12, name: 'Smart Watch Pro', brand: 'Noise', price: 1999, originalPrice: 3999, platform: 'Flipkart', category: 'Electronics', rating: 4.2, reviews: 7100, emoji: '⌚', bg: '#FFF3E0', affiliateUrl: 'https://flipkart.com/noise-smart-watch' },
  { id: 13, name: 'Air Mesh Sneakers', brand: 'Nike', price: 2499, originalPrice: 4999, platform: 'Amazon', category: 'Fashion', rating: 4.4, reviews: 6800, emoji: '👟', bg: '#F1EFE8', affiliateUrl: 'https://amazon.in/Nike-Air-Mesh-Sneakers' },
  { id: 14, name: 'Gua Sha Stone Kit', brand: 'The Moms Co.', price: 649, originalPrice: 899, platform: 'Nykaa', category: 'Wellness', rating: 4.4, reviews: 2900, emoji: '🌿', bg: '#E1F5EE', affiliateUrl: 'https://nykaa.com/gua-sha-stone-kit' },
  { id: 15, name: 'LED Moon Lamp', brand: 'Syska', price: 1199, originalPrice: 1699, platform: 'Nykaa', category: 'Quirky', rating: 4.4, reviews: 2100, emoji: '🌙', bg: '#EEEDFE', affiliateUrl: 'https://nykaa.com/led-moon-lamp' },
]

export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export function getProductsByQuery(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return mockProducts.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  )
}

export function getProductsByPriceRange(min: number, max: number): Product[] {
  return mockProducts.filter(p => p.price >= min && p.price <= max)
}

export function getProductsByPlatform(platform: string): Product[] {
  return mockProducts.filter(p => p.platform === platform)
}

export function getTrendingProducts(limit: number = 8): Product[] {
  return mockProducts.slice(0, limit).sort(() => Math.random() - 0.5)
}

export function searchProducts(
  query: string,
  category?: string,
  maxPrice?: number,
  platform?: string
): Product[] {
  let results = mockProducts

  // Filter by query text
  if (query.toLowerCase().trim() !== '') {
    const lowerQuery = query.toLowerCase()
    results = results.filter(p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    )
  }

  // Filter by category
  if (category) {
    results = results.filter(p => p.category.toLowerCase() === category.toLowerCase())
  }

  // Filter by max price
  if (maxPrice) {
    results = results.filter(p => p.price <= maxPrice)
  }

  // Filter by platform
  if (platform) {
    results = results.filter(p => p.platform === platform)
  }

  return results
}

export function getFilteredProductsByQuery(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  
  // Check for earbuds/headphones keywords
  if (lowerQuery.includes('earbud') || lowerQuery.includes('bud') || lowerQuery.includes('headphone') || lowerQuery.includes('wireless') || lowerQuery.includes('audio')) {
    let filtered = earbudsProducts
    
    // Check for budget constraints
    const budgetMatch = lowerQuery.match(/under\s+(\d+)/i) || lowerQuery.match(/₹\s*(\d+)/i)
    if (budgetMatch) {
      const maxPrice = parseInt(budgetMatch[1])
      filtered = filtered.filter(p => p.price <= maxPrice)
    }
    
    return filtered.length > 0 ? filtered : earbudsProducts
  }
  
  // Default: return products matching query
  return getProductsByQuery(query)
}
