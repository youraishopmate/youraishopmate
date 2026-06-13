import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Raksha Bandhan 2025 - Rakhis, Sister & Brother Gifts | youraishopmate',
  description: 'Celebrate Raksha Bandhan with beautiful rakhis, sister gifts, brother gifts, sweet hampers & return gifts.',
}

const PRODUCTS = [
  { id: 1, name: 'Designer Rakhi Set', brand: 'Archies', price: 199, originalPrice: 299, discount: 33, emoji: '🎀', platform: 'Amazon', tag: 'Rakhi Pick', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
  { id: 2, name: 'Kaju Katli Box', brand: "Haldiram's", price: 399, originalPrice: 599, discount: 33, emoji: '🍬', platform: 'Amazon', tag: 'Sweet Gift', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
  { id: 3, name: 'Watch for Brother', brand: 'Fastrack', price: 1299, originalPrice: 1799, discount: 27, emoji: '⌚', platform: 'Flipkart', tag: 'For Bhai', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
  { id: 4, name: 'Makeup Kit', brand: 'Lakme', price: 799, originalPrice: 1099, discount: 27, emoji: '💄', platform: 'Nykaa', tag: 'For Didi', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
  { id: 5, name: 'Rakhi Hamper', brand: 'FNP', price: 699, originalPrice: 999, discount: 30, emoji: '🎁', platform: 'Amazon', tag: 'Gift Set', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
  { id: 6, name: 'Wallet', brand: 'Wildhorn', price: 599, originalPrice: 799, discount: 25, emoji: '👝', platform: 'Amazon', tag: 'For Brother', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
  { id: 7, name: 'Jewellery Set', brand: 'Voylla', price: 499, originalPrice: 699, discount: 28, emoji: '💎', platform: 'Amazon', tag: 'For Sister', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
  { id: 8, name: 'Chocolate Box', brand: 'Cadbury', price: 299, originalPrice: 399, discount: 25, emoji: '🍫', platform: 'Amazon', tag: 'Sweet Return', occasionBadge: 'Rakhi Special', occasionColor: '#FEF3C7' },
]

const BLOG_CARDS = [
  { title: 'Best Raksha Bandhan Gifts for Brothers in 2025', excerpt: 'Find the perfect gift your brother will actually use and love.', category: 'Gift Ideas', readTime: 5, emoji: '🎁' },
  { title: "Unique Rakhi Gift Ideas for Sisters She'll Love", excerpt: 'Move beyond traditional gifts with these creative picks.', category: 'Style Guide', readTime: 4, emoji: '🎀' },
  { title: 'Top Rakhi Combos With Sweets Under ₹500', excerpt: 'Get rakhi and sweets together for the perfect celebration.', category: 'Gift Ideas', readTime: 3, emoji: '🍬' },
]

export default function RakshaBandhanPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link> <span>/</span> <Link href="/occasions">Occasions</Link> <span>/</span> <span>Raksha Bandhan</span>
      </div>

      <section className="px-6 py-12 text-center" style={{ background: '#FEF3C7' }}>
        <div className="text-7xl mb-4">🎀</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#92400E' }}>Raksha Bandhan 2025</h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#B45309' }}>Celebrate the bond that lasts forever</p>
        <p className="text-sm mb-6" style={{ color: '#92400E', opacity: 0.8 }}>Rakhis, sister-brother gifts, sweet hampers & return gifts</p>

        <CountdownTimer targetDate="2025-08-09" label="Raksha Bandhan" />

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition" style={{ background: '#7F77DD' }}>Shop Rakhi Gifts</button>
          <button className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>Find the Perfect Rakhi ↓</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Raksha Bandhan"
          chips={['Gift for sister under ₹500', 'Gift for brother under ₹1000', 'Rakhi set with sweets', 'Return gift under ₹200']}
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>🎀 Rakhi Special Picks</h2>
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
          {['Rakhis', 'For Brother', 'For Sister', 'Sweet Hampers', 'Return Gifts', 'Under ₹200'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>📖 Rakhi Guides</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#FEF3C7' }}>
        <div><p className="font-bold" style={{ color: '#92400E' }}>Can't decide on a gift? Let AI help you!</p></div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>Get Recommendations</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
