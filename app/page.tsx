'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'

export default function Home() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('trending')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setQuery('')
    }
  }

  const handleSuggestClick = (suggestion: string) => {
    router.push(`/search?q=${encodeURIComponent(suggestion)}`)
  }

  const categories = [
    { id: 'trending', label: 'Trending', icon: '🔥' },
    { id: 'fashion', label: 'Fashion', icon: '👗' },
    { id: 'electronics', label: 'Electronics', icon: '📱' },
    { id: 'beauty', label: 'Beauty', icon: '✨' },
    { id: 'wellness', label: 'Wellness', icon: '❤️' },
    { id: 'quirky', label: 'Quirky', icon: '😄' },
  ]

  const trendingProducts = [
    { id: 1, name: 'Air Mesh Sneakers', brand: 'Nike', price: '₹2,499', tag: 'Trending', emoji: '👟', bg: '#F1EFE8' },
    { id: 2, name: 'Matte Lip Set', brand: 'Nykaa', price: '₹799', tag: 'Hot', emoji: '💄', bg: '#FBEAF0' },
    { id: 3, name: 'Pro Earbuds X3', brand: 'boAt', price: '₹1,299', tag: 'Best seller', emoji: '🎧', bg: '#E6F1FB' },
    { id: 4, name: 'Gua Sha Stone Kit', brand: 'The Moms Co.', price: '₹649', tag: 'Wellness', emoji: '🌿', bg: '#E1F5EE' },
  ]

  const quirkyProducts = [
    { id: 5, name: 'Cactus Humidifier', brand: 'Miniso', price: '₹899', tag: 'Quirky', emoji: '🌵', bg: '#FAEEDA' },
    { id: 6, name: 'Egg Pan Smiley', brand: 'Wonderchef', price: '₹599', tag: 'Fun', emoji: '🍳', bg: '#FAECE7' },
    { id: 7, name: 'LED Moon Lamp', brand: 'Syska', price: '₹1,199', tag: 'Unique', emoji: '🪴', bg: '#EEEDFE' },
    { id: 8, name: 'Octopus Desk Organizer', brand: 'Quirksmith', price: '₹449', tag: 'New', emoji: '🐙', bg: '#E1F5EE' },
  ]

  const blogCards = [
    { id: 1, title: '10 Best Running Shoes for Summer', category: 'Style Guides', emoji: '👟', bg: '#FFF5F1' },
    { id: 2, title: 'Tech Gadgets That Changed My Life', category: 'Tech Reviews', emoji: '📱', bg: '#F0F8FF' },
    { id: 3, title: 'Skincare Routine for Sensitive Skin', category: 'Beauty Tips', emoji: '✨', bg: '#FFF0F5' },
  ]

  const occasions = [
    { name: 'Diwali', emoji: '🪔', color: '#FFE5B4' },
    { name: 'Wedding', emoji: '💒', color: '#FFB6C1' },
    { name: "Valentine's", emoji: '💝', color: '#FFB0C0' },
    { name: 'Holi', emoji: '🎨', color: '#FFD700' },
    { name: 'Christmas', emoji: '🎄', color: '#90EE90' },
    { name: "Mother's Day", emoji: '🌹', color: '#FFB6C1' },
    { name: 'Rakhi', emoji: '🙏', color: '#DDA0DD' },
    { name: 'Back to School', emoji: '🎒', color: '#87CEEB' },
  ]

  const suggestionChips = [
    'help me buy running shoes',
    'wireless earbuds under ₹1500',
    'Korean skincare',
    'quirky gift under ₹400',
    'surprise me',
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background-primary)' }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: 'var(--color-background-secondary)', padding: '48px 24px 36px' }} className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: '#EEEDFE', marginBottom: '16px' }}>
          <span>✨</span>
          <span className="text-xs font-medium" style={{ color: '#534AB7' }}>AI-powered shopping assistant</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
          What are you shopping for today?
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          Type, talk, or explore — your AI shopmate is ready
        </p>

        {/* Chat Box */}
        <div className="max-w-2xl mx-auto mb-6">
          <form onSubmit={handleSearch} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border" style={{ borderColor: 'var(--color-border-secondary)', background: 'var(--color-background-primary)' }}>
            <span className="text-lg">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Try "help me buy wireless earbuds under ₹2000" or "surprise me with quirky decor"'
              className="flex-1 text-sm outline-none bg-transparent"
              style={{ color: 'var(--color-text-primary)' }}
            />
            <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center text-base hover:opacity-80" style={{ background: '#EEEDFE' }}>
              🎤
            </button>
            <button type="submit" className="w-8 h-8 rounded-full flex items-center justify-center text-base font-medium text-white hover:opacity-90" style={{ background: '#7F77DD' }}>
              →
            </button>
          </form>
        </div>

        {/* Suggestion Chips */}
        <div className="flex gap-2 justify-center flex-wrap max-w-4xl mx-auto">
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleSuggestClick(chip)}
              className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:opacity-80 cursor-pointer"
              style={{ borderColor: 'var(--color-border-secondary)', background: 'var(--color-background-primary)', color: 'var(--color-text-secondary)' }}
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      {/* Category Ribbon */}
      <div className="flex gap-0 overflow-x-auto border-b" style={{ borderColor: 'var(--color-border-tertiary)', background: 'var(--color-background-primary)', padding: '0 24px' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="flex flex-col items-center gap-1 px-4 py-3 text-xs whitespace-nowrap border-b-2 transition-all"
            style={{
              borderColor: activeCategory === cat.id ? '#7F77DD' : 'transparent',
              color: activeCategory === cat.id ? '#534AB7' : 'var(--color-text-secondary)',
            }}
          >
            <span className="text-base">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Trending Section */}
      <section className="px-6 py-5" style={{ background: 'var(--color-background-primary)' }}>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Trending right now</h2>
          <a href="/trending" className="text-xs hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {trendingProducts.map((prod) => (
            <div key={prod.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow" style={{ borderColor: 'var(--color-border-tertiary)' }}>
              <div className="h-28 flex items-center justify-center text-4xl" style={{ background: prod.bg }}>
                {prod.emoji}
              </div>
              <div className="p-2.5">
                <p className="text-xs font-medium mb-0.5 line-clamp-1" style={{ color: 'var(--color-text-primary)' }}>{prod.name}</p>
                <p className="text-xs mb-1.5 line-clamp-1" style={{ color: 'var(--color-text-secondary)' }}>{prod.brand}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium" style={{ color: '#534AB7' }}>{prod.price}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: '#EEEDFE', color: '#534AB7' }}>{prod.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions Section */}
      <section className="px-6 py-5" style={{ background: 'var(--color-background-primary)' }}>
        <h2 className="text-sm font-medium mb-3.5" style={{ color: 'var(--color-text-primary)' }}>Special Occasions</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {occasions.map((occ) => (
            <button
              key={occ.name}
              className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap hover:shadow-md transition flex-shrink-0"
              style={{ background: occ.color }}
            >
              <span className="text-2xl">{occ.emoji}</span>
              <span className="text-xs font-medium" style={{ color: '#3C3489' }}>{occ.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Surprise Banner */}
      <div className="mx-6 mb-5 px-4 py-4 rounded-lg flex items-center justify-between" style={{ background: '#EEEDFE' }}>
        <div>
          <p className="text-sm font-medium mb-0.5" style={{ color: '#3C3489' }}>Feeling adventurous? Try Surprise Me</p>
          <p className="text-xs" style={{ color: '#534AB7' }}>Let AI pick something unexpected just for you</p>
        </div>
        <button className="text-xs px-3.5 py-1.5 rounded-full text-white font-medium hover:opacity-90 transition flex-shrink-0" style={{ background: '#7F77DD' }}>
          Surprise me ✦
        </button>
      </div>

      {/* Blog Section */}
      <section className="px-6 py-5" style={{ background: 'var(--color-background-primary)' }}>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>From the shopmate blog</h2>
          <a href="/blogs" className="text-xs hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogCards.map((blog) => (
            <div key={blog.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow" style={{ borderColor: 'var(--color-border-tertiary)' }}>
              <div className="h-32 flex items-center justify-center text-5xl" style={{ background: blog.bg }}>
                {blog.emoji}
              </div>
              <div className="p-3">
                <p className="text-xs mb-1" style={{ color: '#7F77DD' }}>{blog.category}</p>
                <p className="text-xs font-medium line-clamp-2" style={{ color: 'var(--color-text-primary)' }}>{blog.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quirky Section */}
      <section className="px-6 py-5" style={{ background: 'var(--color-background-primary)' }}>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Quirky finds this week</h2>
          <a href="/trending?category=quirky" className="text-xs hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quirkyProducts.map((prod) => (
            <div key={prod.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow" style={{ borderColor: 'var(--color-border-tertiary)' }}>
              <div className="h-28 flex items-center justify-center text-4xl" style={{ background: prod.bg }}>
                {prod.emoji}
              </div>
              <div className="p-2.5">
                <p className="text-xs font-medium mb-0.5 line-clamp-1" style={{ color: 'var(--color-text-primary)' }}>{prod.name}</p>
                <p className="text-xs mb-1.5 line-clamp-1" style={{ color: 'var(--color-text-secondary)' }}>{prod.brand}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium" style={{ color: '#534AB7' }}>{prod.price}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: '#EEEDFE', color: '#534AB7' }}>{prod.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--color-background-secondary)', borderTopColor: 'var(--color-border-tertiary)' }} className="border-t mt-8 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* About */}
            <div>
              <p className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                your<span style={{ color: '#7F77DD' }}>ai</span>shopmate
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                Your personal AI shopping assistant for finding the best products across India's top platforms.
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="font-semibold text-xs mb-3" style={{ color: 'var(--color-text-primary)' }}>EXPLORE</p>
              <ul className="space-y-1.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                <li><a href="/trending" className="hover:opacity-70">Trending</a></li>
                <li><a href="/search" className="hover:opacity-70">Deals</a></li>
                <li><a href="/categories" className="hover:opacity-70">Categories</a></li>
              </ul>
            </div>

            {/* Blogs */}
            <div>
              <p className="font-semibold text-xs mb-3" style={{ color: 'var(--color-text-primary)' }}>BLOGS</p>
              <ul className="space-y-1.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                <li><a href="/blogs?category=style-guides" className="hover:opacity-70">Style Guides</a></li>
                <li><a href="/blogs?category=tech-reviews" className="hover:opacity-70">Tech Reviews</a></li>
                <li><a href="/blogs?category=beauty-tips" className="hover:opacity-70">Beauty Tips</a></li>
              </ul>
            </div>

            {/* Special Occasions */}
            <div>
              <p className="font-semibold text-xs mb-3" style={{ color: 'var(--color-text-primary)' }}>OCCASIONS</p>
              <ul className="space-y-1.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                <li><a href="/occasions?search=diwali" className="hover:opacity-70">Diwali</a></li>
                <li><a href="/occasions?search=wedding" className="hover:opacity-70">Wedding</a></li>
                <li><a href="/occasions?search=valentines" className="hover:opacity-70">Valentine's Day</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="font-semibold text-xs mb-3" style={{ color: 'var(--color-text-primary)' }}>CONNECT</p>
              <ul className="space-y-1.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                <li><a href="#" className="hover:opacity-70">Twitter</a></li>
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
                <li><a href="#" className="hover:opacity-70">Help & Support</a></li>
              </ul>
            </div>
          </div>

          <div style={{ borderTopColor: 'var(--color-border-tertiary)' }} className="border-t pt-6 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
            <p>© 2024 youraishopmate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
