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
  },
]

export const mockProducts: Product[] = [
  ...featuredProducts,
  // Additional products for filtering
  { id: 9, name: 'Matte Lip Set', brand: 'Nykaa', price: 799, originalPrice: 999, platform: 'Nykaa', category: 'Beauty', rating: 4.5, reviews: 4200, emoji: '💄', bg: '#FBEAF0' },
  { id: 10, name: 'Face Wash 100ml', brand: 'Cetaphil', price: 549, originalPrice: 699, platform: 'Amazon', category: 'Beauty', rating: 4.7, reviews: 5600, emoji: '🧴', bg: '#E1F5FE' },
  { id: 11, name: 'Yoga Mat', brand: 'Lifelong', price: 999, originalPrice: 1499, platform: 'Amazon', category: 'Wellness', rating: 4.5, reviews: 3400, emoji: '🧘', bg: '#F1F8E9' },
  { id: 12, name: 'Smart Watch Pro', brand: 'Noise', price: 1999, originalPrice: 3999, platform: 'Flipkart', category: 'Electronics', rating: 4.2, reviews: 7100, emoji: '⌚', bg: '#FFF3E0' },
  { id: 13, name: 'Air Mesh Sneakers', brand: 'Nike', price: 2499, originalPrice: 4999, platform: 'Amazon', category: 'Fashion', rating: 4.4, reviews: 6800, emoji: '👟', bg: '#F1EFE8' },
  { id: 14, name: 'Gua Sha Stone Kit', brand: 'The Moms Co.', price: 649, originalPrice: 899, platform: 'Nykaa', category: 'Wellness', rating: 4.4, reviews: 2900, emoji: '🌿', bg: '#E1F5EE' },
  { id: 15, name: 'LED Moon Lamp', brand: 'Syska', price: 1199, originalPrice: 1699, platform: 'Nykaa', category: 'Quirky', rating: 4.4, reviews: 2100, emoji: '🌙', bg: '#EEEDFE' },
]

export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter(p => p.category.toLowerCase().includes(category.toLowerCase()))
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
