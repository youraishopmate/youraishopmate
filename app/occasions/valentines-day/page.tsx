import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Valentine's Day 2026 - Romantic Gifts, Couple Ideas & More | youraishopmate",
  description: 'Find the perfect Valentine\'s Day gift with our curated collection. From romantic to quirky, gifts for her, him & couples.',
}

const PRODUCTS = [
  { id: 1, name: 'Rose Gold Watch', brand: 'Fastrack', price: 1499, originalPrice: 1999, discount: 25, emoji: '⌚', platform: 'Amazon', tag: 'For Her', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
  { id: 2, name: 'Perfume', brand: 'Engage', price: 399, originalPrice: 599, discount: 33, emoji: '💐', platform: 'Nykaa', tag: 'Romantic Gift', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
  { id: 3, name: 'Couple Cushion Set', brand: 'Yoosh', price: 699, originalPrice: 999, discount: 30, emoji: '🛋️', platform: 'Amazon', tag: 'Quirky Pick', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
  { id: 4, name: 'Chocolate Box', brand: 'Ferrero Rocher', price: 499, originalPrice: 699, discount: 28, emoji: '🍫', platform: 'Amazon', tag: 'Sweet Gift', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
  { id: 5, name: 'Skincare Gift Set', brand: 'The Body Shop', price: 1299, originalPrice: 1799, discount: 27, emoji: '💆', platform: 'Nykaa', tag: 'Pamper Her', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
  { id: 6, name: 'Wireless Earbuds', brand: 'boAt', price: 1299, originalPrice: 1799, discount: 27, emoji: '🎧', platform: 'Flipkart', tag: 'For Him', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
  { id: 7, name: 'Personalized Mug', brand: 'Printland', price: 399, originalPrice: 599, discount: 33, emoji: '☕', platform: 'Amazon', tag: 'Cute & Quirky', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
  { id: 8, name: 'Couple Bracelet Set', brand: 'Shaya', price: 899, originalPrice: 1199, discount: 25, emoji: '💑', platform: 'Amazon', tag: 'Couple Pick', occasionBadge: "Valentine's Pick", occasionColor: '#FFE4E6' },
]

const BLOG_CARDS = [
  { title: "50 Valentine's Day Gift Ideas for Every Budget", excerpt: 'From ₹200 to ₹5000, find the perfect gift for your special someone.', category: 'Gift Ideas', readTime: 8, emoji: '💝' },
  { title: "Quirky Valentine's Gifts That Aren't Boring", excerpt: 'Go beyond flowers and chocolates with unique, memorable gifts.', category: 'Style Guide', readTime: 4, emoji: '🎁' },
  { title: "DIY Valentine's Day Ideas to Make It Special", excerpt: 'Create personalized touches that show you care.', category: 'Wellness', readTime: 5, emoji: '❤️' },
]

export default function ValentinesDayPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link> <span>/</span> <Link href="/occasions">Occasions</Link> <span>/</span> <span>Valentine's Day</span>
      </div>

      <section className="px-6 py-12 text-center" style={{ background: '#FFE4E6' }}>
        <div className="text-7xl mb-4">💝</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#BE185D' }}>Valentine's Day 2026</h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#EC4899' }}>Gifts they'll remember forever</p>
        <p className="text-sm mb-6" style={{ color: '#BE185D', opacity: 0.8 }}>Romantic, quirky, and heartfelt picks for every kind of love</p>

        <CountdownTimer targetDate="2026-02-14" label="Valentine's Day" />

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition" style={{ background: '#7F77DD' }}>Shop Valentine's Picks</button>
          <button className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>Surprise Your Partner ✦</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Valentine's Day"
          chips={['Romantic gift for girlfriend under ₹1000', 'Quirky gift for boyfriend under ₹500', 'Beauty gift set for her', 'Tech gift for him under ₹2000']}
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>💝 Valentine's Day Specials</h2>
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
          {['For Her', 'For Him', 'Couple Gifts', 'Beauty', 'Quirky Finds', 'Under ₹500'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>📖 Valentine's Guides</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#FFE4E6' }}>
        <div><p className="font-bold" style={{ color: '#BE185D' }}>Not sure what to gift? Let AI help you!</p></div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>Get AI Recommendations</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
