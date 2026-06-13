import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Holi 2026 - Organic Colors, White Kurtas, Skincare & More | youraishopmate',
  description: 'Celebrate Holi safely with organic colors, white kurtas, skincare protection kits, water guns & festive essentials.',
}

const PRODUCTS = [
  { id: 1, name: 'Organic Gulal Set 5 Colours', brand: 'Pichkari', price: 199, originalPrice: 299, discount: 33, emoji: '🎨', platform: 'Amazon', tag: 'Eco-Friendly', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
  { id: 2, name: 'White Cotton Kurta', brand: 'FabIndia', price: 799, originalPrice: 999, discount: 20, emoji: '👕', platform: 'FabIndia', tag: 'Holi Outfit', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
  { id: 3, name: 'Pichkari Water Gun', brand: 'Centy', price: 299, originalPrice: 399, discount: 25, emoji: '💦', platform: 'Flipkart', tag: 'For Kids', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
  { id: 4, name: 'Waterproof Skin Cream', brand: 'Biotique', price: 249, originalPrice: 399, discount: 37, emoji: '🧴', platform: 'Nykaa', tag: 'Skin Protection', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
  { id: 5, name: 'Hair Protection Oil', brand: 'Parachute', price: 199, originalPrice: 299, discount: 33, emoji: '🌴', platform: 'Amazon', tag: 'Hair Care', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
  { id: 6, name: 'Holi Gift Hamper', brand: 'Archies', price: 599, originalPrice: 799, discount: 25, emoji: '🎁', platform: 'Amazon', tag: 'Gift Set', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
  { id: 7, name: 'Sunscreen SPF 50', brand: 'Lakme', price: 349, originalPrice: 499, discount: 30, emoji: '☀️', platform: 'Nykaa', tag: 'Must Have', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
  { id: 8, name: 'White Palazzo Set', brand: 'Global Desi', price: 899, originalPrice: 1199, discount: 25, emoji: '👖', platform: 'Myntra', tag: 'Holi Wear', occasionBadge: 'Holi Essential', occasionColor: '#E0E7FF' },
]

const BLOG_CARDS = [
  { title: 'How to Protect Your Skin During Holi', excerpt: 'Complete guide to keeping your skin safe while playing with colors.', category: 'Beauty Tips', readTime: 4, emoji: '🌸' },
  { title: 'Best Organic Holi Colours That Are Safe for Kids', excerpt: 'Shop natural, non-toxic colors that are gentle on skin.', category: 'Wellness', readTime: 5, emoji: '🎨' },
  { title: 'Holi Outfit Ideas: What to Wear This Festival', excerpt: 'Style guide for comfortable and colorful Holi celebrations.', category: 'Style Guide', readTime: 3, emoji: '👗' },
]

export default function HoliPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link> <span>/</span> <Link href="/occasions">Occasions</Link> <span>/</span> <span>Holi</span>
      </div>

      <section className="px-6 py-12 text-center" style={{ background: '#F3E8FF' }}>
        <div className="text-7xl mb-4">🎨</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#6B21A8' }}>Holi 2026</h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#9D174D' }}>Play in colour, glow after</p>
        <p className="text-sm mb-6" style={{ color: '#6B21A8', opacity: 0.8 }}>Organic colours, white kurtas, skincare protection & water guns</p>

        <CountdownTimer targetDate="2026-03-14" label="Holi" />

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition" style={{ background: '#7F77DD' }}>Shop Holi Essentials</button>
          <button className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>Find Skin Protection ↓</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Holi"
          chips={['Organic Holi colours under ₹200', 'White kurta for Holi under ₹500', 'Skincare protection kit', 'Water gun for kids under ₹300']}
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>🎨 Our Top Holi Picks</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <OccasionProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Shop by Category</h2>
        <div className="flex gap-2 overflow-x-auto pb-4">
          {['Colours & Pichkari', 'White Outfits', 'Skin Protection', 'Hair Care', 'Gifts', 'Kids Special'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>📖 Holi Guides</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#F3E8FF' }}>
        <div><p className="font-bold" style={{ color: '#6B21A8' }}>Not sure what you need? Let AI help you!</p></div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>Ask AI Shopmate</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
