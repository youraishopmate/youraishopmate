import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diwali 2025 - Shop Diwali Gifts, Decor & Ethnic Wear | youraishopmate',
  description:
    'Light up the festivities with perfect Diwali gifts. Shop home decor, ethnic wear, sweet hampers & more. AI-powered recommendations for all your Diwali needs.',
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Diyas Set of 12',
    brand: 'HandiCraft Store',
    price: 299,
    originalPrice: 399,
    discount: 25,
    emoji: '🪔',
    platform: 'Amazon',
    tag: 'Diwali Essential',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#FEF3C7',
  },
  {
    id: 2,
    name: 'Kaju Katli Box 500g',
    brand: "Haldiram's",
    price: 450,
    originalPrice: 599,
    discount: 25,
    emoji: '🍬',
    platform: 'Amazon',
    tag: 'Sweet Gift',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#FED7AA',
  },
  {
    id: 3,
    name: 'Ethnic Kurta Set',
    brand: 'Biba',
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    emoji: '👗',
    platform: 'Myntra',
    tag: 'Festive Wear',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#FCA5A5',
  },
  {
    id: 4,
    name: 'String Fairy Lights 10m',
    brand: 'Syska',
    price: 399,
    originalPrice: 599,
    discount: 33,
    emoji: '✨',
    platform: 'Flipkart',
    tag: 'Home Decor',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#BFDBFE',
  },
  {
    id: 5,
    name: 'Dry Fruit Gift Box',
    brand: 'Nutraj',
    price: 799,
    originalPrice: 999,
    discount: 20,
    emoji: '🌰',
    platform: 'Amazon',
    tag: 'Premium Gift',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#DDD6FE',
  },
  {
    id: 6,
    name: 'Puja Thali Set',
    brand: 'Craftvatika',
    price: 649,
    originalPrice: 899,
    discount: 28,
    emoji: '🙏',
    platform: 'Amazon',
    tag: 'Pooja Essentials',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#F3E8FF',
  },
  {
    id: 7,
    name: 'Silk Saree',
    brand: 'Kanchipuram',
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    emoji: '🎀',
    platform: 'Myntra',
    tag: 'Gifting',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#FCE7F3',
  },
  {
    id: 8,
    name: 'Bluetooth Speaker',
    brand: 'boAt',
    price: 1999,
    originalPrice: 2799,
    discount: 28,
    emoji: '🔊',
    platform: 'Flipkart',
    tag: 'Tech Gift',
    occasionBadge: 'Diwali Pick',
    occasionColor: '#E0E7FF',
  },
]

const BLOG_CARDS = [
  {
    title: '20 Diwali Gift Ideas Under ₹500',
    excerpt: 'Discover affordable yet thoughtful Diwali gifts that your loved ones will adore.',
    category: 'Gift Ideas',
    readTime: 6,
    emoji: '🎁',
  },
  {
    title: 'How to Decorate Your Home for Diwali on a Budget',
    excerpt: 'Create a festive atmosphere at home without spending too much.',
    category: 'Style Guide',
    readTime: 4,
    emoji: '🏠',
  },
  {
    title: 'Best Electronics to Gift This Diwali 2025',
    excerpt: 'Tech gifts that make perfect Diwali presents for all ages.',
    category: 'Tech Reviews',
    readTime: 5,
    emoji: '📱',
  },
]

export default function DiwaliPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      {/* Breadcrumb */}
      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/occasions">Occasions</Link>
        <span>/</span>
        <span>Diwali</span>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-12 text-center" style={{ background: '#FEF3C7' }}>
        <div className="text-7xl mb-4">🪔</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#92400E' }}>
          Diwali 2025
        </h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#B45309' }}>
          Light up the festivities with perfect gifts
        </p>
        <p className="text-sm mb-6" style={{ color: '#92400E', opacity: 0.8 }}>
          Curated picks for home decor, ethnic wear, sweets hampers & more
        </p>

        {/* Countdown */}
        <CountdownTimer targetDate="2025-10-20" label="Diwali" />

        {/* CTAs */}
        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition"
            style={{ background: '#7F77DD' }}
          >
            Shop All Diwali Picks
          </button>
          <button
            className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition"
            style={{ borderColor: '#7F77DD', color: '#7F77DD' }}
          >
            Try AI Gift Finder ↓
          </button>
        </div>
      </section>

      {/* AI Gift Finder */}
      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Diwali"
          chips={['Gifts for parents under ₹500', 'Home decor gifts under ₹1000', 'Sweet hampers for office', 'Tech gifts under ₹2000']}
        />
      </section>

      {/* Top Picks Section */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            🪔 Our Top Diwali Picks
          </h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>
            See all →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <OccasionProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              emoji={product.emoji}
              platform={product.platform}
              tag={product.tag}
              occasionBadge={product.occasionBadge}
              occasionColor={product.occasionColor}
            />
          ))}
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
          Shop by Category
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-4">
          {['Home Decor', 'Ethnic Wear', 'Sweet Hampers', 'Electronics', 'Jewellery', 'Pooja Items'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm"
              style={{ borderColor: '#7F77DD', color: '#7F77DD' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            📖 Diwali Gift Guides
          </h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>
            See all →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#FEF3C7' }}>
        <div>
          <p className="font-bold" style={{ color: '#92400E' }}>
            Can&apos;t find the right gift? Let AI help you!
          </p>
          <p className="text-sm" style={{ color: '#B45309' }}>
            Our AI Shopmate can personalize recommendations just for you
          </p>
        </div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>
          Ask AI Shopmate
        </button>
      </div>

      {/* Affiliate Disclosure */}
      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
