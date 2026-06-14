// youraishopmate.com — Product Database
// Last updated: June 2026
// IMPORTANT: Prices are sourced manually and may vary on Amazon.
// Add disclaimer on site: "Prices may vary. Check Amazon for latest price."
// TODO: Replace with Amazon Product Advertising API for live prices.
// TODO: Add 5 Wellness products (yoga mat, foam roller, resistance bands etc.)

export interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice: number
  discount: number
  image: string
  category: 'fashion' | 'electronics' | 'beauty' | 'wellness' | 'quirky'
  subCategory: string
  affiliateUrl: string
  platform: 'amazon' | 'flipkart' | 'nykaa' | 'myntra'
  rating: number
  reviewCount: number
  tag?: string
  occasionTags?: string[]
  keywords: string[]
}

export const products: Product[] = [

  // ─── SHOES / FASHION ──────────────────────────────────────────────────────

  {
    id: "prod_001",
    name: "Campus Men's FEROX Running Shoes",
    brand: "Campus",
    price: 999,
    originalPrice: 2099,
    discount: 52,
    image: "👟",
    category: "fashion",
    subCategory: "footwear",
    affiliateUrl: "https://amzn.to/3Q06Bh9",
    platform: "amazon",
    rating: 4.3,
    reviewCount: 71,
    tag: "Limited Deal",
    occasionTags: ["back-to-school"],
    keywords: ["running shoes", "sports shoes", "men shoes", "campus", 
               "sneakers", "gym shoes", "ferox", "running", "footwear",
               "shoes under 1000", "cheap running shoes"]
  },

  {
    id: "prod_002",
    name: "Reebok Men's Running Shoes – Lightweight Gym & Jogging Shoe",
    brand: "Reebok",
    price: 2399,
    originalPrice: 4999,
    discount: 52,
    image: "👟",
    category: "fashion",
    subCategory: "footwear",
    affiliateUrl: "https://amzn.to/4ehI6UE",
    platform: "amazon",
    rating: 4.2,
    reviewCount: 1200,
    tag: "Top Brand",
    occasionTags: ["back-to-school"],
    keywords: ["reebok", "running shoes", "gym shoes", "jogging shoes",
               "men shoes", "sports shoes", "cushioned shoes", "footwear",
               "shoes under 2500", "branded running shoes"]
  },

  {
    id: "prod_003",
    name: "Campus Men's FIRST Running Shoes",
    brand: "Campus",
    price: 1095,
    originalPrice: 2299,
    discount: 52,
    image: "👟",
    category: "fashion",
    subCategory: "footwear",
    affiliateUrl: "https://amzn.to/4a0uxYx",
    platform: "amazon",
    rating: 4.1,
    reviewCount: 890,
    tag: "Best Value",
    occasionTags: ["back-to-school"],
    keywords: ["campus", "running shoes", "men shoes", "sports shoes",
               "footwear", "shoes under 1500", "lightweight shoes"]
  },

  {
    id: "prod_004",
    name: "SPARX Men's SM 9079 Sports Shoes",
    brand: "Sparx",
    price: 1675,
    originalPrice: 3499,
    discount: 52,
    image: "👟",
    category: "fashion",
    subCategory: "footwear",
    affiliateUrl: "https://amzn.to/4vPdLUB",
    platform: "amazon",
    rating: 4.0,
    reviewCount: 2300,
    tag: "Popular Pick",
    occasionTags: ["back-to-school"],
    keywords: ["sparx", "sports shoes", "men shoes", "running shoes",
               "gym shoes", "footwear", "shoes under 2000"]
  },

  {
    id: "prod_005",
    name: "Campus Men's TRASKO Running Shoes",
    brand: "Campus",
    price: 1399,
    originalPrice: 2799,
    discount: 50,
    image: "👟",
    category: "fashion",
    subCategory: "footwear",
    affiliateUrl: "https://amzn.to/4ajP2zB",
    platform: "amazon",
    rating: 4.2,
    reviewCount: 540,
    tag: "Trending",
    occasionTags: ["back-to-school"],
    keywords: ["campus trasko", "running shoes", "men shoes", "sports shoes",
               "footwear", "shoes under 1500", "trasko"]
  },

  // ─── BEAUTY ───────────────────────────────────────────────────────────────

  {
    id: "prod_006",
    name: "Multi-Shape Makeup Sponge Set – 20 Piece Beauty Puff Collection",
    brand: "Generic",
    price: 299,
    originalPrice: 699,
    discount: 57,
    image: "💄",
    category: "beauty",
    subCategory: "makeup tools",
    affiliateUrl: "https://amzn.to/4xxNP1y",
    platform: "amazon",
    rating: 4.1,
    reviewCount: 3200,
    tag: "Best Seller",
    occasionTags: ["valentines-day", "mothers-day"],
    keywords: ["makeup sponge", "beauty blender", "makeup puff", "face blender",
               "beauty tools", "makeup kit", "sponge set", "beauty under 300",
               "makeup accessories"]
  },

  {
    id: "prod_007",
    name: "Beauty of Joseon Relief Sun SPF 50+ PA++++ Sun Cream – Rice + B5",
    brand: "Beauty of Joseon",
    price: 1350,
    originalPrice: 1799,
    discount: 25,
    image: "✨",
    category: "beauty",
    subCategory: "skincare",
    affiliateUrl: "https://amzn.to/4gklOUM",
    platform: "amazon",
    rating: 4.5,
    reviewCount: 18000,
    tag: "Korean Skincare",
    occasionTags: ["holi", "mothers-day"],
    keywords: ["sunscreen", "spf 50", "korean skincare", "sun cream",
               "beauty of joseon", "moisturizing sunscreen", "skin protection",
               "korean beauty", "k-beauty", "trending skincare", "holi skincare"]
  },

  {
    id: "prod_008",
    name: "OSADHI Aloe Vera & Rose Gel with Hyaluronic Acid – 100g",
    brand: "Osadhi",
    price: 699,
    originalPrice: 999,
    discount: 30,
    image: "🌿",
    category: "beauty",
    subCategory: "skincare",
    affiliateUrl: "https://amzn.to/4uwwPpt",
    platform: "amazon",
    rating: 4.3,
    reviewCount: 2800,
    tag: "Natural",
    occasionTags: ["mothers-day", "holi"],
    keywords: ["aloe vera gel", "rose gel", "hyaluronic acid", "moisturizer",
               "dry skin", "sensitive skin", "skincare", "hydrating gel",
               "natural skincare", "face gel", "skin gel under 700"]
  },

  {
    id: "prod_009",
    name: "Love Beauty & Planet Argan Oil & Lavender Sulfate-Free Shampoo – 400ml",
    brand: "Love Beauty & Planet",
    price: 471,
    originalPrice: 699,
    discount: 33,
    image: "🧴",
    category: "beauty",
    subCategory: "haircare",
    affiliateUrl: "https://amzn.to/4uGsU9L",
    platform: "amazon",
    rating: 4.2,
    reviewCount: 5600,
    tag: "Sulphate Free",
    occasionTags: ["mothers-day"],
    keywords: ["shampoo", "sulfate free shampoo", "argan oil shampoo",
               "lavender shampoo", "love beauty planet", "hair care",
               "no parabens shampoo", "gentle shampoo", "shampoo under 500"]
  },

  {
    id: "prod_010",
    name: "d'alba Piedmont Italian White Truffle First Spray Serum – 50ml",
    brand: "d'alba",
    price: 975,
    originalPrice: 1499,
    discount: 35,
    image: "✨",
    category: "beauty",
    subCategory: "skincare",
    affiliateUrl: "https://amzn.to/4av1cW8",
    platform: "amazon",
    rating: 4.4,
    reviewCount: 4200,
    tag: "Viral Pick",
    occasionTags: ["valentines-day", "mothers-day"],
    keywords: ["face mist", "spray serum", "d'alba", "korean serum",
               "truffle serum", "glow serum", "hydrating mist", "face serum",
               "trending beauty", "k-beauty serum", "viral skincare"]
  },

  {
    id: "prod_011",
    name: "Vaseline Deep Moisture Body Lotion with Ceramides – 600ml",
    brand: "Vaseline",
    price: 382,
    originalPrice: 599,
    discount: 36,
    image: "🧴",
    category: "beauty",
    subCategory: "body care",
    affiliateUrl: "https://amzn.to/4e8s7cL",
    platform: "amazon",
    rating: 4.4,
    reviewCount: 12000,
    tag: "Everyday Essential",
    occasionTags: ["mothers-day"],
    keywords: ["body lotion", "vaseline", "moisturizer", "dry skin lotion",
               "ceramides", "body care", "skin lotion", "lotion under 400",
               "vaseline lotion", "daily moisturizer"]
  },

  // ─── ELECTRONICS ──────────────────────────────────────────────────────────

  {
    id: "prod_012",
    name: "realme Buds T200 Lite – 48H Playback, AI ENC, Fast Charging TWS",
    brand: "realme",
    price: 1399,
    originalPrice: 2999,
    discount: 53,
    image: "🎧",
    category: "electronics",
    subCategory: "earbuds",
    affiliateUrl: "https://amzn.to/4vcGfYw",
    platform: "amazon",
    rating: 4.2,
    reviewCount: 8900,
    tag: "Fast Charging",
    occasionTags: ["back-to-school", "raksha-bandhan"],
    keywords: ["earbuds", "wireless earbuds", "realme buds", "tws",
               "bluetooth earbuds", "earphones", "earbuds under 1500",
               "ai enc earbuds", "gaming earbuds", "buds under 1500"]
  },

  {
    id: "prod_013",
    name: "Noise Buds N1 Pro – ANC 30dB, 60H Playtime, Metallic Finish TWS",
    brand: "Noise",
    price: 1499,
    originalPrice: 3999,
    discount: 62,
    image: "🎧",
    category: "electronics",
    subCategory: "earbuds",
    affiliateUrl: "https://amzn.to/43E4q5Y",
    platform: "amazon",
    rating: 4.3,
    reviewCount: 15600,
    tag: "ANC Pick",
    occasionTags: ["back-to-school", "raksha-bandhan"],
    keywords: ["noise buds", "anc earbuds", "wireless earbuds", "tws",
               "bluetooth earphones", "earbuds under 1500", "noise cancelling",
               "60 hour battery earbuds", "buds under 2000"]
  },

  {
    id: "prod_014",
    name: "boAt Airdopes 141 Elite ANC 2025 – 42H Battery, 4Mic ENx, IPX5",
    brand: "boAt",
    price: 1399,
    originalPrice: 3499,
    discount: 60,
    image: "🎧",
    category: "electronics",
    subCategory: "earbuds",
    affiliateUrl: "https://amzn.to/3S9zrw7",
    platform: "amazon",
    rating: 4.3,
    reviewCount: 45000,
    tag: "Best Seller",
    occasionTags: ["back-to-school", "diwali", "raksha-bandhan"],
    keywords: ["boat earbuds", "airdopes 141", "anc earbuds", "tws",
               "wireless earbuds", "boat airdopes", "earbuds under 1500",
               "ipx5 earbuds", "waterproof earbuds", "boat buds"]
  },

  {
    id: "prod_015",
    name: "GOBOULT Mustang Sprint – 60H Playtime, 32dB ANC, BTv6.0 TWS",
    brand: "GOBOULT",
    price: 1499,
    originalPrice: 3999,
    discount: 62,
    image: "🎧",
    category: "electronics",
    subCategory: "earbuds",
    affiliateUrl: "https://amzn.to/43AqYVa",
    platform: "amazon",
    rating: 4.1,
    reviewCount: 3200,
    tag: "New Launch",
    occasionTags: ["back-to-school"],
    keywords: ["goboult earbuds", "mustang sprint", "anc earbuds", "tws",
               "wireless earbuds", "60 hour earbuds", "gaming earbuds",
               "earbuds under 1500", "bluetooth 6 earbuds"]
  },

  // ─── QUIRKY ───────────────────────────────────────────────────────────────

  {
    id: "prod_016",
    name: "Retro Sunglasses Hair Clip – Quirky Hairpin for Teens & Women",
    brand: "Generic",
    price: 185,
    originalPrice: 399,
    discount: 54,
    image: "😎",
    category: "quirky",
    subCategory: "accessories",
    affiliateUrl: "https://amzn.to/4uCwZf9",
    platform: "amazon",
    rating: 3.9,
    reviewCount: 780,
    tag: "Quirky Find",
    occasionTags: ["valentines-day", "holi"],
    keywords: ["hair clip", "quirky hair accessory", "sunglasses clip",
               "hair barrette", "teen accessories", "fun hair clip",
               "quirky gift", "under 200", "gift under 200"]
  },

  {
    id: "prod_017",
    name: "Turtle Coaster with Funny Expression – Cup Holder for Desk",
    brand: "DDN",
    price: 298,
    originalPrice: 599,
    discount: 50,
    image: "🐢",
    category: "quirky",
    subCategory: "desk accessories",
    affiliateUrl: "https://amzn.to/4esyh6r",
    platform: "amazon",
    rating: 4.1,
    reviewCount: 1200,
    tag: "Office Gift",
    occasionTags: ["valentines-day", "raksha-bandhan"],
    keywords: ["turtle coaster", "funny coaster", "quirky gift", "desk decor",
               "office gift", "cup coaster", "gift under 300", "funny desk item",
               "quirky office", "coaster gift"]
  },

  {
    id: "prod_018",
    name: "oddpod™ Vintage Retro Tissue Box Holder – Pine Green",
    brand: "oddpod",
    price: 399,
    originalPrice: 799,
    discount: 50,
    image: "🟩",
    category: "quirky",
    subCategory: "desk accessories",
    affiliateUrl: "https://amzn.to/4vLaQfv",
    platform: "amazon",
    rating: 4.2,
    reviewCount: 890,
    tag: "Aesthetic",
    occasionTags: ["valentines-day"],
    keywords: ["tissue box holder", "retro tissue box", "desk organizer",
               "quirky home decor", "aesthetic desk", "office decor",
               "tissue dispenser", "vintage decor", "gift under 400"]
  },

  {
    id: "prod_019",
    name: "Booty Boo Ghost Showpiece – Funny Spooky Gothic Figurine 12cm",
    brand: "Generic",
    price: 359,
    originalPrice: 699,
    discount: 49,
    image: "👻",
    category: "quirky",
    subCategory: "showpiece",
    affiliateUrl: "https://amzn.to/3QnzBzs",
    platform: "amazon",
    rating: 4.0,
    reviewCount: 560,
    tag: "Quirky Find",
    occasionTags: ["christmas-new-year"],
    keywords: ["ghost showpiece", "quirky decor", "funny figurine",
               "gothic decor", "spooky gift", "office showpiece",
               "quirky gift under 400", "halloween decor", "desk showpiece"]
  },

  // ─── DECOR (mapped to Quirky category on site) ────────────────────────────

  {
    id: "prod_020",
    name: "Zart Resin Cool Dog Action Showpiece – Living Room Decor",
    brand: "Zart",
    price: 1376,
    originalPrice: 2499,
    discount: 45,
    image: "🐕",
    category: "quirky",
    subCategory: "home decor",
    affiliateUrl: "https://amzn.to/4eaCyMQ",
    platform: "amazon",
    rating: 4.2,
    reviewCount: 320,
    tag: "Home Decor",
    occasionTags: ["diwali", "christmas-new-year"],
    keywords: ["dog showpiece", "resin showpiece", "home decor", "living room decor",
               "quirky decor", "dog figurine", "desk decor", "gift showpiece"]
  },

  {
    id: "prod_021",
    name: "GiftOday Owl Shape Wooden Wall Hanging – Evil Eye Home Decor",
    brand: "GiftOday",
    price: 189,
    originalPrice: 499,
    discount: 62,
    image: "🦉",
    category: "quirky",
    subCategory: "home decor",
    affiliateUrl: "https://amzn.to/4uEKBX3",
    platform: "amazon",
    rating: 4.0,
    reviewCount: 1450,
    tag: "Home Gift",
    occasionTags: ["diwali", "housewarming"],
    keywords: ["wall hanging", "owl decor", "wooden wall hanging", "home decor",
               "evil eye decor", "wall art", "living room decor", "gift under 200",
               "diwali decor", "home gift"]
  },

  {
    id: "prod_022",
    name: "BRIGHTAURA Chai Biscuit Candle in Glass – Desi Tea Cup Scented Candle",
    brand: "Brightaura",
    price: 199,
    originalPrice: 449,
    discount: 56,
    image: "☕",
    category: "quirky",
    subCategory: "home decor",
    affiliateUrl: "https://amzn.to/4aQlWI3",
    platform: "amazon",
    rating: 4.3,
    reviewCount: 2100,
    tag: "Viral Gift",
    occasionTags: ["diwali", "valentines-day", "mothers-day", "raksha-bandhan"],
    keywords: ["chai candle", "scented candle", "quirky candle", "desi gift",
               "tea cup candle", "handmade candle", "gifting idea", "under 200",
               "quirky gift", "viral gift", "aesthetic candle"]
  },

  {
    id: "prod_023",
    name: "Ikari Homes Handcrafted Wooden LED Mushroom Lamp – Bedside Decor",
    brand: "Ikari Homes",
    price: 1498,
    originalPrice: 2999,
    discount: 50,
    image: "🍄",
    category: "quirky",
    subCategory: "lighting",
    affiliateUrl: "https://amzn.to/4vP5G29",
    platform: "amazon",
    rating: 4.4,
    reviewCount: 980,
    tag: "Aesthetic Lamp",
    occasionTags: ["diwali", "christmas-new-year", "valentines-day", "mothers-day"],
    keywords: ["mushroom lamp", "led lamp", "wooden lamp", "bedside lamp",
               "aesthetic lamp", "quirky lamp", "desk lamp", "gift lamp",
               "birthday gift", "couple gift", "anniversary gift under 1500"]
  },

  {
    id: "prod_024",
    name: "Webelkart Mahindra Thar Car Shape Wooden Key Holder – Wall Decor",
    brand: "Webelkart",
    price: 186,
    originalPrice: 499,
    discount: 63,
    image: "🗝️",
    category: "quirky",
    subCategory: "home decor",
    affiliateUrl: "https://amzn.to/4uyiUiQ",
    platform: "amazon",
    rating: 3.9,
    reviewCount: 670,
    tag: "Quirky Gift",
    occasionTags: ["raksha-bandhan", "christmas-new-year"],
    keywords: ["key holder", "thar key holder", "car key holder", "wooden key holder",
               "wall key holder", "quirky gift", "home decor", "gift under 200",
               "key organizer"]
  },

  {
    id: "prod_025",
    name: "Webelkart Premium Home Keys Wooden Key Holder – 7 Hook Wall Mount",
    brand: "Webelkart",
    price: 167,
    originalPrice: 449,
    discount: 63,
    image: "🏠",
    category: "quirky",
    subCategory: "home decor",
    affiliateUrl: "https://amzn.to/4em6TXs",
    platform: "amazon",
    rating: 4.1,
    reviewCount: 3400,
    tag: "Home Essential",
    occasionTags: ["housewarming"],
    keywords: ["key holder", "wall key holder", "wooden key holder",
               "home decor", "key organizer", "key hanger", "gift under 200",
               "7 hook key holder"]
  },

]

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

export function searchProducts(
  query: string,
  category?: string,
  maxPrice?: number,
  platform?: string
): Product[] {
  const q = query.toLowerCase()

  return products.filter(product => {
    // Category filter
    if (category && category !== 'all' && product.category !== category) {
      return false
    }

    // Price filter
    if (maxPrice && product.price > maxPrice) {
      return false
    }

    // Platform filter
    if (platform && platform !== 'all' && product.platform !== platform) {
      return false
    }

    // Keyword match — checks name, brand, keywords array, subCategory
    const searchableText = [
      product.name.toLowerCase(),
      product.brand.toLowerCase(),
      product.subCategory.toLowerCase(),
      product.category.toLowerCase(),
      ...(product.keywords || [])
    ].join(' ')

    // Extract budget from query e.g. "under 1000", "below 500"
    const budgetMatch = q.match(/(?:under|below|within|upto|up to)\s*[₹]?\s*(\d+)/)
    if (budgetMatch) {
      const budget = parseInt(budgetMatch[1])
      if (product.price > budget) return false
    }

    // Keyword matching
    const queryWords = q
      .replace(/[₹,]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 2)
      .filter(w => !['the', 'for', 'and', 'with', 'buy', 'get', 'find',
                      'help', 'show', 'want', 'need', 'best', 'good',
                      'under', 'below', 'above', 'between'].includes(w))

    return queryWords.some(word => searchableText.includes(word))
  })
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductsByOccasion(occasion: string): Product[] {
  return products.filter(p => p.occasionTags?.includes(occasion))
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products
    .filter(p => p.tag === 'Best Seller' || p.tag === 'Trending' || 
                 p.tag === 'Viral Pick' || p.tag === 'Viral Gift')
    .slice(0, limit)
}

export function getTrendingProducts(limit = 8): Product[] {
  return [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, limit)
}
