export interface Product {
  id: number
  name: string
  brand: string
  price: number
  platform: 'Amazon' | 'Flipkart' | 'Nykaa'
  category: string
  rating: number
  emoji: string
  bg: string
}

export const mockProducts: Product[] = [
  // Electronics
  { id: 1, name: 'Pro Earbuds X3', brand: 'boAt', price: 1299, platform: 'Amazon', category: 'electronics', rating: 4.5, emoji: '🎧', bg: '#E6F1FB' },
  { id: 2, name: 'Smart Watch Pro', brand: 'Noise', price: 1999, platform: 'Flipkart', category: 'electronics', rating: 4.2, emoji: '⌚', bg: '#FFF3E0' },
  { id: 3, name: 'Portable Charger 20K', brand: 'Ambrane', price: 899, platform: 'Amazon', category: 'electronics', rating: 4.6, emoji: '🔋', bg: '#E8F5E9' },
  { id: 4, name: 'Wireless Mouse', brand: 'Logitech', price: 1499, platform: 'Nykaa', category: 'electronics', rating: 4.7, emoji: '🖱️', bg: '#F3E5F5' },

  // Fashion
  { id: 5, name: 'Air Mesh Sneakers', brand: 'Nike', price: 2499, platform: 'Amazon', category: 'fashion', rating: 4.4, emoji: '👟', bg: '#F1EFE8' },
  { id: 6, name: 'Cotton T-Shirt Pack', brand: 'H&M', price: 799, platform: 'Flipkart', category: 'fashion', rating: 4.1, emoji: '👕', bg: '#FDE7E7' },
  { id: 7, name: 'Summer Dress', brand: 'Marks', price: 1299, platform: 'Amazon', category: 'fashion', rating: 4.3, emoji: '👗', bg: '#FCE4EC' },
  { id: 8, name: 'Winter Jacket', brand: 'Columbia', price: 3999, platform: 'Flipkart', category: 'fashion', rating: 4.6, emoji: '🧥', bg: '#E0E7FF' },

  // Beauty
  { id: 9, name: 'Matte Lip Set', brand: 'Nykaa', price: 799, platform: 'Nykaa', category: 'beauty', rating: 4.5, emoji: '💄', bg: '#FBEAF0' },
  { id: 10, name: 'Face Wash 100ml', brand: 'Cetaphil', price: 549, platform: 'Amazon', category: 'beauty', rating: 4.7, emoji: '🧴', bg: '#E1F5FE' },
  { id: 11, name: 'Moisturizer Cream', brand: 'Lotus', price: 399, platform: 'Flipkart', category: 'beauty', rating: 4.3, emoji: '🧴', bg: '#F0F4C3' },
  { id: 12, name: 'Hair Oil 200ml', brand: 'Parachute', price: 199, platform: 'Amazon', category: 'beauty', rating: 4.6, emoji: '🧴', bg: '#FFE0B2' },

  // Wellness
  { id: 13, name: 'Gua Sha Stone Kit', brand: 'The Moms Co.', price: 649, platform: 'Nykaa', category: 'wellness', rating: 4.4, emoji: '🌿', bg: '#E1F5EE' },
  { id: 14, name: 'Yoga Mat', brand: 'Lifelong', price: 999, platform: 'Amazon', category: 'wellness', rating: 4.5, emoji: '🧘', bg: '#F1F8E9' },
  { id: 15, name: 'Vitamin C Supplement', brand: 'GNC', price: 599, platform: 'Flipkart', category: 'wellness', rating: 4.2, emoji: '💊', bg: '#FCE4EC' },
  { id: 16, name: 'Water Bottle 1L', brand: 'Milton', price: 449, platform: 'Amazon', category: 'wellness', rating: 4.6, emoji: '💧', bg: '#E3F2FD' },

  // Quirky
  { id: 17, name: 'Cactus Humidifier', brand: 'Miniso', price: 899, platform: 'Flipkart', category: 'quirky', rating: 4.3, emoji: '🌵', bg: '#FAEEDA' },
  { id: 18, name: 'Egg Pan Smiley', brand: 'Wonderchef', price: 599, platform: 'Amazon', category: 'quirky', rating: 4.5, emoji: '🍳', bg: '#FAECE7' },
  { id: 19, name: 'LED Moon Lamp', brand: 'Syska', price: 1199, platform: 'Nykaa', category: 'quirky', rating: 4.4, emoji: '🌙', bg: '#EEEDFE' },
  { id: 20, name: 'Octopus Organizer', brand: 'Quirksmith', price: 449, platform: 'Flipkart', category: 'quirky', rating: 4.7, emoji: '🐙', bg: '#E1F5EE' },
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
