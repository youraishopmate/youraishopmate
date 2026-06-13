import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Back to School 2025 - School Bags, Stationery, Electronics & More | youraishopmate',
  description: 'Complete back to school shopping guide. Find school bags, stationery, electronics, water bottles, lunch boxes & everything students need.',
}

const PRODUCTS = [
  { id: 1, name: 'School Backpack 30L', brand: 'Skybags', price: 799, originalPrice: 1099, discount: 27, emoji: '🎒', platform: 'Amazon', tag: 'Top Pick', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
  { id: 2, name: 'Noise Buds for Students', brand: 'Noise', price: 999, originalPrice: 1399, discount: 28, emoji: '🎧', platform: 'Flipkart', tag: 'Study Aid', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
  { id: 3, name: 'Scientific Calculator', brand: 'Casio', price: 499, originalPrice: 699, discount: 28, emoji: '🧮', platform: 'Amazon', tag: 'Must Have', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
  { id: 4, name: 'Stationery Kit 20pc', brand: 'Camlin', price: 299, originalPrice: 399, discount: 25, emoji: '✏️', platform: 'Amazon', tag: 'School Kit', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
  { id: 5, name: 'Insulated Water Bottle', brand: 'Milton', price: 349, originalPrice: 499, discount: 30, emoji: '🥤', platform: 'Amazon', tag: 'Daily Use', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
  { id: 6, name: 'Drawing Book + Colours', brand: 'Faber-Castell', price: 399, originalPrice: 599, discount: 33, emoji: '🎨', platform: 'Amazon', tag: 'Art Class', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
  { id: 7, name: 'Tablet for Students', brand: 'Lenovo Tab', price: 8999, originalPrice: 11999, discount: 25, emoji: '📱', platform: 'Flipkart', tag: 'Tech Pick', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
  { id: 8, name: 'Lunch Box 3-tier', brand: 'Vaya', price: 599, originalPrice: 799, discount: 25, emoji: '🍱', platform: 'Amazon', tag: 'Tiffin Pick', occasionBadge: 'School Essential', occasionColor: '#DBEAFE' },
]

const BLOG_CARDS = [
  { title: 'Back to School Checklist: Everything Your Child Needs', excerpt: 'Complete list of essentials for a smooth school year start.', category: 'Style Guide', readTime: 5, emoji: '📚' },
  { title: 'Best Budget Tablets for Students Under ₹10,000', excerpt: 'Tech picks that support learning without breaking the bank.', category: 'Tech Reviews', readTime: 6, emoji: '💻' },
  { title: 'How to Pack the Perfect School Bag', excerpt: 'Tips for organizing and packing your school bag efficiently.', category: 'Wellness', readTime: 3, emoji: '🎒' },
]

export default function BackToSchoolPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link> <span>/</span> <Link href="/occasions">Occasions</Link> <span>/</span> <span>Back to School</span>
      </div>

      <section className="px-6 py-12 text-center" style={{ background: '#DBEAFE' }}>
        <div className="text-7xl mb-4">🎒</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#0C4A6E' }}>Back to School 2025</h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#0369A1' }}>Start the year right — equipped and inspired</p>
        <p className="text-sm mb-6" style={{ color: '#0C4A6E', opacity: 0.8 }}>Bags, stationery, electronics, water bottles & everything students need</p>

        <CountdownTimer targetDate="2026-06-01" label="Back to School" />

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition" style={{ background: '#7F77DD' }}>Shop School Essentials</button>
          <button className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>Build Your Kit with AI ↓</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Back to School"
          chips={['School bag for class 5 under ₹500', 'Best tablet for students under ₹10000', 'Stationery kit under ₹300', 'Water bottle and lunch box set']}
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>🎒 Top School Picks</h2>
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
          {['Bags', 'Electronics', 'Stationery', 'Lunch & Bottles', 'Art Supplies', 'Under ₹300'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>📖 Back to School Guides</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#DBEAFE' }}>
        <div><p className="font-bold" style={{ color: '#0C4A6E' }}>Not sure what your student needs? Let AI help!</p></div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>Build Kit with AI</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
