import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Christmas & New Year 2025 - Party Outfits, Gifts & Decorations | youraishopmate',
  description: 'Celebrate the festive season with party outfits, electronics, home decor, Secret Santa gifts & New Year essentials.',
}

const PRODUCTS = [
  { id: 1, name: 'Christmas Tree 4ft', brand: 'Kaison', price: 999, originalPrice: 1399, discount: 28, emoji: '🎄', platform: 'Amazon', tag: 'Home Decor', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
  { id: 2, name: 'Sequin Party Dress', brand: 'Zara', price: 2499, originalPrice: 3499, discount: 28, emoji: '🎉', platform: 'Myntra', tag: 'NYE Outfit', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
  { id: 3, name: 'Wireless Charger', brand: 'Portronics', price: 799, originalPrice: 1199, discount: 33, emoji: '🔋', platform: 'Amazon', tag: 'Tech Gift', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
  { id: 4, name: 'Scented Candle Set', brand: 'Nykaa Beauty', price: 599, originalPrice: 799, discount: 25, emoji: '🕯️', platform: 'Nykaa', tag: 'Home Gift', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
  { id: 5, name: "Men's Blazer", brand: 'Raymond', price: 3499, originalPrice: 4999, discount: 30, emoji: '🎩', platform: 'Myntra', tag: 'Party Wear', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
  { id: 6, name: 'Bluetooth Speaker', brand: 'JBL Go', price: 1999, originalPrice: 2799, discount: 28, emoji: '🔊', platform: 'Flipkart', tag: 'Party Must', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
  { id: 7, name: 'Gift Wrapping Set', brand: 'Archies', price: 299, originalPrice: 399, discount: 25, emoji: '🎁', platform: 'Amazon', tag: 'Gifting', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
  { id: 8, name: 'Smartwatch', brand: 'Noise', price: 2499, originalPrice: 3499, discount: 28, emoji: '⌚', platform: 'Amazon', tag: 'New Year Gift', occasionBadge: 'Festive Pick', occasionColor: '#DCFCE7' },
]

const BLOG_CARDS = [
  { title: 'Best Secret Santa Gifts Under ₹500', excerpt: 'Thoughtful yet budget-friendly gift ideas for your office Secret Santa.', category: 'Gift Ideas', readTime: 5, emoji: '🎁' },
  { title: 'New Year Party Outfit Ideas for 2026', excerpt: 'Stand out at NYE parties with these stunning outfit combinations.', category: 'Style Guide', readTime: 4, emoji: '🎉' },
  { title: 'Top Tech Gifts to Buy This Christmas', excerpt: 'Latest gadgets and electronics that make perfect holiday gifts.', category: 'Tech Reviews', readTime: 6, emoji: '📱' },
]

export default function ChristmasNewYearPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link> <span>/</span> <Link href="/occasions">Occasions</Link> <span>/</span> <span>Christmas & New Year</span>
      </div>

      <section className="px-6 py-12 text-center" style={{ background: '#DCFCE7' }}>
        <div className="text-7xl mb-4">🎄</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#15803D' }}>Christmas & New Year 2025</h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#228B22' }}>Celebrate, gift, and start fresh in style</p>
        <p className="text-sm mb-6" style={{ color: '#15803D', opacity: 0.8 }}>Party outfits, gadgets, home decor, and gifts for everyone on your list</p>

        <CountdownTimer targetDate="2025-12-25" label="Christmas" />

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition" style={{ background: '#7F77DD' }}>Shop Festive Picks</button>
          <button className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>Find Party Outfits ↓</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Christmas"
          chips={['Secret Santa gift under ₹500', 'New Year party outfit', 'Tech gift for dad under ₹3000', 'Home decor for Christmas']}
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>🎄 Festive Must-Haves</h2>
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
          {['Party Outfits', 'Home Decor', 'Tech Gifts', 'Secret Santa', 'For Kids', 'Under ₹500'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>📖 Festive Guides</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#DCFCE7' }}>
        <div><p className="font-bold" style={{ color: '#15803D' }}>Not sure what gifts to get? Let AI help you!</p></div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>Get AI Recommendations</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
