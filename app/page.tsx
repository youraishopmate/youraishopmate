'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('trending')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const languages = ['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'বাংলা', 'ಕನ್ನಡ', 'मराठी']
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

  const suggestionChips = [
    'help me buy running shoes',
    'surprise me with beauty',
    'best earbuds under ₹1500',
    'trending skincare',
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background-primary)' }}>
      {/* Navbar */}
      <nav className="border-b" style={{ borderColor: 'var(--color-border-tertiary)', background: 'var(--color-background-primary)' }}>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-lg font-medium" style={{ color: 'var(--color-text-primary)' }}>
            your<span style={{ color: '#7F77DD' }}>ai</span>shopmate
          </div>
          <div className="flex gap-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <a href="/trending" className="hover:opacity-70">Trending</a>
            <a href="/search" className="hover:opacity-70">Deals</a>
            <a href="/sign-in" className="hover:opacity-70">My Profile</a>
            <span>❤️</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ background: 'var(--color-background-secondary)', padding: '36px 24px 28px' }} className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: '#EEEDFE', marginBottom: '14px' }}>
          <span>✨</span>
          <span className="text-xs font-medium" style={{ color: '#534AB7' }}>AI-powered shopping assistant</span>
        </div>
        <h1 className="text-2xl font-medium mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
          What are you shopping for today?
        </h1>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Type, talk, or explore — your AI shopmate is ready
        </p>

        {/* Chat Box */}
        <div className="max-w-2xl mx-auto mb-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border" style={{ borderColor: 'var(--color-border-secondary)', background: 'var(--color-background-primary)' }}>
            <span className="text-lg" style={{ color: 'var(--color-text-tertiary)' }}>🔍</span>
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
            <button type="submit" className="w-8 h-8 rounded-full flex items-center justify-center text-base font-medium" style={{ background: '#7F77DD', color: 'white' }}>
              →
            </button>
          </form>
        </div>

        {/* Suggestion Chips */}
        <div className="flex gap-2 justify-center flex-wrap max-w-4xl mx-auto">
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              className="text-xs px-3 py-1 rounded-full border transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--color-border-secondary)', background: 'var(--color-background-primary)', color: 'var(--color-text-secondary)' }}
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      {/* Language Selection */}
      <div className="flex gap-1.5 justify-center flex-wrap px-6 py-2.5" style={{ background: 'var(--color-background-primary)' }}>
        {languages.map((lang) => (
          <button
            key={lang}
            className="text-xs px-2.5 py-1 rounded-full border hover:opacity-70"
            style={{ borderColor: 'var(--color-border-tertiary)', color: 'var(--color-text-secondary)' }}
          >
            {lang}
          </button>
        ))}
      </div>

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
        <div className="grid grid-cols-4 gap-3">
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

      {/* Surprise Banner */}
      <div className="mx-6 mb-4 px-4 py-3.5 rounded-lg flex items-center justify-between" style={{ background: '#EEEDFE' }}>
        <div>
          <p className="text-sm font-medium mb-0.5" style={{ color: '#3C3489' }}>Feeling adventurous? Try Surprise Me</p>
          <p className="text-xs" style={{ color: '#534AB7' }}>Let AI pick something unexpected just for you</p>
        </div>
        <button className="text-xs px-3.5 py-1.5 rounded-full text-white font-medium hover:opacity-90 transition" style={{ background: '#7F77DD' }}>
          Surprise me ✦
        </button>
      </div>

      {/* Quirky Section */}
      <section className="px-6 py-5" style={{ background: 'var(--color-background-primary)', paddingTop: '8px' }}>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Quirky finds this week</h2>
          <a href="/trending?category=quirky" className="text-xs hover:opacity-70" style={{ color: '#7F77DD' }}>See all →</a>
        </div>
        <div className="grid grid-cols-4 gap-3">
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
    </div>
  )
}
