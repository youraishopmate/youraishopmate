import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Mother's Day 2026 - Gifts for Mom, Wellness & Jewellery | youraishopmate",
  description: "Celebrate mom with thoughtful Mother's Day gifts. Shop jewellery, wellness kits, beauty treats, and personalized gifts.",
}

const PRODUCTS = [
  { id: 1, name: 'Gold-Plated Earrings', brand: 'Tanishq', price: 1499, originalPrice: 1999, discount: 25, emoji: '💎', platform: 'Amazon', tag: 'For Mom', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
  { id: 2, name: 'Spa Gift Set', brand: 'The Body Shop', price: 1299, originalPrice: 1799, discount: 27, emoji: '💆', platform: 'Nykaa', tag: 'Pamper Her', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
  { id: 3, name: 'Silk Saree', brand: 'Pothys', price: 2499, originalPrice: 3499, discount: 28, emoji: '🎀', platform: 'Amazon', tag: 'Timeless Gift', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
  { id: 4, name: 'Herbal Tea Set', brand: 'Organic India', price: 599, originalPrice: 799, discount: 25, emoji: '🍵', platform: 'Amazon', tag: 'Wellness', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
  { id: 5, name: 'Printed Kurti', brand: 'W', price: 899, originalPrice: 1199, discount: 25, emoji: '👗', platform: 'Myntra', tag: 'Everyday Wear', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
  { id: 6, name: 'Foot Massager', brand: 'Lifelong', price: 1799, originalPrice: 2499, discount: 28, emoji: '🦶', platform: 'Flipkart', tag: 'Comfort Gift', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
  { id: 7, name: 'Perfume', brand: 'Chanel Inspired', price: 799, originalPrice: 1099, discount: 27, emoji: '💐', platform: 'Nykaa', tag: 'Luxury Feel', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
  { id: 8, name: 'Personalised Photo Book', brand: 'Snapfish', price: 499, originalPrice: 699, discount: 28, emoji: '📖', platform: 'Amazon', tag: 'Heartfelt', occasionBadge: "Mom's Pick", occasionColor: '#FFEDD5' },
]

const BLOG_CARDS = [
  { title: "30 Mother's Day Gifts She'll Actually Love", excerpt: 'Curated gift ideas for every type of mom and budget.', category: 'Gift Ideas', readTime: 7, emoji: '🌸' },
  { title: "Best Wellness Gifts for Moms in 2026", excerpt: 'Help mom relax and rejuvenate with these wellness picks.', category: 'Wellness', readTime: 5, emoji: '💆' },
  { title: 'Jewellery Gifts for Mom: From Budget to Splurge', excerpt: 'Find the perfect piece for your special mom.', category: 'Style Guide', readTime: 4, emoji: '💍' },
]

export default function MothersDayPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link> <span>/</span> <Link href="/occasions">Occasions</Link> <span>/</span> <span>Mother's Day</span>
      </div>

      <section className="px-6 py-12 text-center" style={{ background: '#FFEDD5' }}>
        <div className="text-7xl mb-4">🌸</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#92400E' }}>Mother's Day 2026</h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#B45309' }}>For the one who does it all</p>
        <p className="text-sm mb-6" style={{ color: '#92400E', opacity: 0.8 }}>Wellness kits, jewellery, beauty treats & heartfelt gifts for mom</p>

        <CountdownTimer targetDate="2026-05-10" label="Mother's Day" />

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition" style={{ background: '#7F77DD' }}>Shop for Mom</button>
          <button className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>Let AI Pick for Her ✦</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Mother's Day"
          chips={['Gift for mom under ₹500', 'Wellness gift for mother', 'Jewellery for mom under ₹1000', 'Skincare gift set for her']}
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>🌸 Top Mother's Day Picks</h2>
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
          {['Jewellery', 'Wellness', 'Beauty', 'Clothing', 'Personalised', 'Under ₹500'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>📖 Mother's Day Guides</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#FFEDD5' }}>
        <div><p className="font-bold" style={{ color: '#92400E' }}>Not sure what gift mom would love? Let AI help!</p></div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>Get Recommendations</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
