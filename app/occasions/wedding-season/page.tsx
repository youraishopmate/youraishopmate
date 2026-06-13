import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import CountdownTimer from '@/components/CountdownTimer'
import OccasionProductCard from '@/components/OccasionProductCard'
import OccasionBlogCard from '@/components/OccasionBlogCard'
import OccasionGiftFinder from '@/components/OccasionGiftFinder'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wedding Season 2025 - Bridal Wear, Groom Sherwani & Gifts | youraishopmate',
  description: 'Complete wedding shopping guide with bridal lehengas, groom sherwani, jewellery, couple gifts & more. AI-powered styling for every wedding moment.',
}

const PRODUCTS = [
  { id: 1, name: 'Bridal Lehenga', brand: 'Sabyasachi Inspired', price: 4999, originalPrice: 6999, discount: 28, emoji: '👰', platform: 'Myntra', tag: 'Bridal Pick', occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
  { id: 2, name: "Men's Sherwani", brand: 'Manyavar', price: 6499, originalPrice: 8999, discount: 28, emoji: '🤴', platform: 'Myntra', tag: "Groom's Choice", occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
  { id: 3, name: 'Kundan Jewellery Set', brand: 'Voylla', price: 1299, originalPrice: 1799, discount: 27, emoji: '💎', platform: 'Amazon', tag: 'Bridal Jewellery', occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
  { id: 4, name: 'Couple Photo Frame', brand: 'Hallmark', price: 599, originalPrice: 799, discount: 25, emoji: '📸', platform: 'Amazon', tag: 'Couple Gift', occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
  { id: 5, name: 'Bridal Glow Kit', brand: 'Lakme', price: 899, originalPrice: 1199, discount: 25, emoji: '✨', platform: 'Nykaa', tag: 'Bridal Beauty', occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
  { id: 6, name: 'Silk Dupatta', brand: 'FabIndia', price: 799, originalPrice: 999, discount: 20, emoji: '🎀', platform: 'FabIndia', tag: 'Festive Wear', occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
  { id: 7, name: 'Wedding Guest Saree', brand: 'Libas', price: 1999, originalPrice: 2799, discount: 28, emoji: '👗', platform: 'Myntra', tag: 'Guest Outfit', occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
  { id: 8, name: 'Perfume Gift Set', brand: 'Fogg', price: 699, originalPrice: 999, discount: 30, emoji: '💐', platform: 'Amazon', tag: 'Gifting', occasionBadge: 'Wedding Essential', occasionColor: '#FCE7F3' },
]

const BLOG_CARDS = [
  { title: 'Complete Bridal Skincare Routine for Indian Weddings', excerpt: 'Prep your skin to glow on your big day with this comprehensive routine.', category: 'Beauty Tips', readTime: 7, emoji: '💆' },
  { title: 'Best Lehengas Under ₹5000 for Brides in 2025', excerpt: 'Stunning bridal lehengas that won\'t break the bank.', category: 'Style Guide', readTime: 5, emoji: '👗' },
  { title: '20 Unique Wedding Gifts the Couple Will Actually Love', excerpt: 'Move beyond traditional gifts with these creative couple-approved ideas.', category: 'Gift Ideas', readTime: 6, emoji: '🎁' },
]

export default function WeddingSeasonPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      <div className="px-6 py-3 flex gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        <Link href="/">Home</Link> <span>/</span> <Link href="/occasions">Occasions</Link> <span>/</span> <span>Wedding Season</span>
      </div>

      <section className="px-6 py-12 text-center" style={{ background: '#FCE7F3' }}>
        <div className="text-7xl mb-4">💍</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#831843' }}>Wedding Season 2025</h1>
        <p className="text-lg font-semibold mb-2" style={{ color: '#9D174D' }}>Dress for every wedding moment</p>
        <p className="text-sm mb-6" style={{ color: '#831843', opacity: 0.8 }}>Bridal wear, groom's collection, gifts for the couple & skincare routines</p>

        <CountdownTimer targetDate="2025-11-15" label="Wedding Season" />

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition" style={{ background: '#7F77DD' }}>Shop Wedding Picks</button>
          <button className="px-6 py-2 rounded-lg font-medium border-2 hover:opacity-70 transition" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>Try AI Stylist ↓</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <OccasionGiftFinder
          occasionName="Wedding Season"
          chips={['Bridal lehenga under ₹5000', 'Gift for newlyweds under ₹2000', "Groom's sherwani under ₹8000", 'Bridal skincare routine']}
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>💍 Wedding Season Must-Haves</h2>
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
          {['Bridal Wear', "Groom's Wear", 'Jewellery', 'Beauty & Skincare', 'Couple Gifts', 'Guest Outfits'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border whitespace-nowrap hover:opacity-70 transition text-sm" style={{ borderColor: '#7F77DD', color: '#7F77DD' }}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>📖 Wedding Gift Guides</h2>
          <a href="#" className="text-sm hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_CARDS.map((blog, idx) => (
            <OccasionBlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      <div className="mx-6 my-8 px-6 py-6 rounded-lg flex items-center justify-between" style={{ background: '#FCE7F3' }}>
        <div><p className="font-bold" style={{ color: '#831843' }}>Can&apos;t find the right outfit? Let AI help you!</p></div>
        <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition whitespace-nowrap" style={{ background: '#7F77DD' }}>Ask AI Stylist</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We earn a small commission on purchases made through our links, at no extra cost to you.
      </div>
    </div>
  )
}
