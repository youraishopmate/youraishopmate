'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import { searchProducts, getTrendingProducts } from '@/lib/products'
import type { Product } from '@/lib/products'
import Link from 'next/link'

interface FilterState {
  categories: string[]
  priceRange: [number, number]
  platforms: string[]
}

function extractBudget(q: string): number | undefined {
  const match = q.match(/(?:under|below|within|upto|up to)\s*[₹]?\s*(\d+)/i)
  return match ? parseInt(match[1]) : undefined
}

function extractCategory(q: string): string | undefined {
  const q2 = q.toLowerCase()
  if (/shoes|sneakers|footwear|running|gym shoe|sports shoe/.test(q2)) 
    return 'Fashion'
  if (/earbuds|earphones|headphones|buds|tws|bluetooth/.test(q2)) 
    return 'Electronics'
  if (/skincare|serum|moisturizer|sunscreen|shampoo|makeup|lipstick|beauty|lotion|candle|face|hair/.test(q2)) 
    return 'Beauty'
  if (/yoga|fitness|wellness|massage|meditation|health/.test(q2)) 
    return 'Wellness'
  if (/quirky|funny|gift|decor|showpiece|lamp|coaster|holder|candle|figurine/.test(q2)) 
    return 'Quirky'
  return undefined
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || ''

  const [aiResponse, setAiResponse] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [isSurpriseMode, setIsSurpriseMode] = useState(false)
  const [input, setInput] = useState(initialQuery)
  const [hasInitialized, setHasInitialized] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 10000],
    platforms: [],
  })

  // Auto-submit query on page load
  useEffect(() => {
    if (initialQuery && !hasInitialized) {
      setHasInitialized(true)
      submitQuery(initialQuery)
    }
  }, [initialQuery, hasInitialized])

  const submitQuery = async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    setInput(query)
    setIsSurpriseMode(false)

    // Check if it's a "Surprise Me" query
    if (query.toLowerCase().includes('surprise')) {
      const allProducts = getTrendingProducts(100)
      const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)]
      setProducts([randomProduct])
      setAiResponse("Here's something fun we picked just for you ✦")
      setIsSurpriseMode(true)
      setIsLoading(false)
      return
    }

    // Extract budget and category for frontend search
    const budget = extractBudget(query)
    const category = extractCategory(query)

    // Frontend search (parallel with AI call)
    const results = searchProducts(query, category, budget)

    // Show products immediately
    if (results.length > 0) {
      setProducts(results)
    } else {
      // Fallback to trending products
      const trending = getTrendingProducts(8)
      setProducts(trending)
      setAiResponse(`We couldn't find exact matches — here are our trending picks instead`)
      setIsLoading(false)
      return
    }

    // Parallel AI call - but don't block UI
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: query }], query }),
      })

      const data = await response.json()
      setAiResponse(data.message || `Here are the best ${query} results for you.`)
    } catch (error) {
      console.error('AI response failed:', error)
      // Don't show error - just use products
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    submitQuery(input)
  }

  const handleSurpriseAgain = () => {
    submitQuery('surprise me')
  }

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      'Amazon': '#FF9900',
      'Flipkart': '#1F4B96',
      'Nykaa': '#E74C62',
      'Myntra': '#C41E3A',
    }
    return colors[platform] || '#7F77DD'
  }

  const categories = ['Electronics', 'Fashion', 'Beauty', 'Wellness', 'Quirky']
  const platforms = ['Amazon', 'Flipkart', 'Nykaa', 'Myntra']

  const renderStars = (rating: number) => {
    const stars = Math.round(rating)
    return '★'.repeat(stars) + '☆'.repeat(5 - stars)
  }

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--color-background-primary)' }} className="min-h-screen pb-32">
        {/* Enhanced Top Bar */}
        {initialQuery && (
          <div
            className="sticky top-0 z-40 border-b px-6 py-5"
            style={{
              background: 'var(--color-background-primary)',
              borderColor: 'var(--color-border-tertiary)',
            }}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link href="/" className="text-2xl hover:opacity-70 flex-shrink-0">
                  ←
                </Link>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Results for
                  </p>
                  <p
                    className="text-lg font-bold"
                    style={{ color: '#7F77DD' }}
                  >
                    {isSurpriseMode ? '✦ Surprise Pick' : initialQuery}
                  </p>
                </div>
              </div>
              
              {/* Filters Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden px-4 py-2 rounded-lg border font-medium transition hover:opacity-80"
                style={{
                  borderColor: 'var(--color-border-tertiary)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Filters ⚙
              </button>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
          {/* Left Sidebar - Filters (Collapsible on Mobile) */}
          {showFilters && (
            <aside className="fixed inset-0 top-24 lg:static lg:w-60 lg:flex-shrink-0 z-30 bg-white lg:bg-transparent">
              <div
                className="rounded-lg border p-6 sticky top-32 lg:top-24 h-screen lg:h-auto overflow-y-auto lg:overflow-y-visible"
                style={{
                  background: 'var(--color-background-primary)',
                  borderColor: 'var(--color-border-tertiary)',
                }}
              >
                <div className="flex items-center justify-between mb-4 lg:hidden">
                  <h3 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    Filters
                  </h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-xl hover:opacity-70"
                  >
                    ✕
                  </button>
                </div>

                <h3
                  className="text-sm font-bold mb-4 hidden lg:block"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Filters
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Category
                  </p>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(cat)}
                          onChange={e => {
                            const newCats = e.target.checked
                              ? [...filters.categories, cat]
                              : filters.categories.filter(c => c !== cat)
                            setFilters({ ...filters, categories: newCats })
                          }}
                          className="w-4 h-4"
                        />
                        <span style={{ color: 'var(--color-text-secondary)' }}>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Price Range
                  </p>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={filters.priceRange[1]}
                    onChange={e =>
                      setFilters({
                        ...filters,
                        priceRange: [filters.priceRange[0], parseInt(e.target.value)],
                      })
                    }
                    className="w-full"
                  />
                  <p
                    className="text-xs mt-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    ₹0 - ₹{filters.priceRange[1].toLocaleString()}
                  </p>
                </div>

                {/* Platform Filter */}
                <div className="mb-6">
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Platform
                  </p>
                  <div className="space-y-2">
                    {platforms.map(plat => (
                      <label key={plat} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.platforms.includes(plat)}
                          onChange={e => {
                            const newPlats = e.target.checked
                              ? [...filters.platforms, plat]
                              : filters.platforms.filter(p => p !== plat)
                            setFilters({ ...filters, platforms: newPlats })
                          }}
                          className="w-4 h-4"
                        />
                        <span style={{ color: 'var(--color-text-secondary)' }}>{plat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full px-4 py-2 text-white font-medium rounded-lg hover:opacity-90 transition lg:hidden"
                  style={{ background: '#7F77DD' }}
                >
                  Apply Filters
                </button>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* AI Response Card */}
            {aiResponse && (
              <div
                className="rounded-lg border-l-4 p-4 mb-8"
                style={{
                  background: 'var(--color-background-primary)',
                  borderColor: '#7F77DD',
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {aiResponse}
                </p>
              </div>
            )}

            {/* Surprise Mode - Large Single Product Card */}
            {isSurpriseMode && products.length === 1 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div
                  className="w-full max-w-sm rounded-lg overflow-hidden border hover:shadow-md transition"
                  style={{
                    borderColor: 'var(--color-border-tertiary)',
                    background: 'var(--color-background-primary)',
                  }}
                >
                  {/* Platform color accent bar */}
                  <div
                    className="h-2"
                    style={{ background: getPlatformColor(products[0].platform) }}
                  />

                  {/* Product Image */}
                  <div
                    className="h-64 flex items-center justify-center text-8xl"
                    style={{ background: '#F8F8F8' }}
                  >
                    {products[0].emoji}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <p
                      className="text-lg font-bold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {products[0].name}
                    </p>
                    <p
                      className="text-sm mb-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {products[0].brand}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: '#7F77DD' }}
                        >
                          ₹{products[0].price.toLocaleString()}
                        </span>
                        {products[0].originalPrice && (
                          <span
                            className="text-sm line-through"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            ₹{products[0].originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {products[0].discountPercent && (
                        <span
                          className="text-sm font-bold px-3 py-1 rounded inline-block mt-2"
                          style={{
                            background: '#D4F4DD',
                            color: '#009933',
                          }}
                        >
                          {products[0].discountPercent}% off
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <p
                      className="text-sm mb-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {renderStars(products[0].rating)} {products[0].rating} · {products[0].reviews.toLocaleString()} reviews
                    </p>

                    {/* Platform Badge */}
                    <div className="mb-4 flex gap-2">
                      <span
                        className="text-sm px-3 py-1 rounded-full text-white font-medium"
                        style={{ background: getPlatformColor(products[0].platform) }}
                      >
                        {products[0].platform}
                      </span>
                    </div>

                    {/* View Deal Button */}
                    <a
                      href={products[0].affiliateUrl || `https://${products[0].platform.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-3 rounded text-white text-sm font-medium text-center hover:opacity-90 transition mb-3"
                      style={{ background: '#7F77DD' }}
                    >
                      View Deal →
                    </a>

                    {/* Surprise Again Button */}
                    <button
                      onClick={handleSurpriseAgain}
                      className="block w-full px-4 py-3 rounded text-sm font-medium text-center hover:opacity-90 transition border"
                      style={{
                        borderColor: 'var(--color-border-tertiary)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      Not feeling it? Surprise me again →
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Product Grid (Normal Mode)
              <>
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden animate-pulse"
                        style={{ background: '#E5E0F0' }}
                      >
                        <div className="h-40" />
                        <div className="p-4 space-y-2">
                          <div className="h-4 rounded" style={{ background: '#D5D0F0' }} />
                          <div className="h-3 w-2/3 rounded" style={{ background: '#D5D0F0' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : products.length === 0 ? (
                  <div
                    className="text-center py-12 rounded-lg"
                    style={{ background: 'var(--color-background-secondary)' }}
                  >
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      No products match your search
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map(product => (
                      <div
                        key={product.id}
                        className="rounded-lg overflow-hidden border hover:shadow-md hover:scale-[1.02] transition cursor-pointer"
                        style={{
                          borderColor: 'var(--color-border-tertiary)',
                          background: 'var(--color-background-primary)',
                        }}
                      >
                        {/* Platform color accent bar */}
                        <div
                          className="h-1"
                          style={{ background: getPlatformColor(product.platform) }}
                        />

                        {/* Product Image */}
                        <div
                          className="h-40 flex items-center justify-center text-6xl"
                          style={{ background: '#F8F8F8' }}
                        >
                          {product.emoji}
                        </div>

                        {/* Product Info */}
                        <div className="p-4">
                          <p
                            className="text-sm font-bold mb-1 line-clamp-2"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {product.name}
                          </p>
                          <p
                            className="text-xs mb-2"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {product.brand}
                          </p>

                          {/* Price */}
                          <div className="mb-2">
                            <div className="flex items-center gap-2">
                              <span
                                className="text-base font-bold"
                                style={{ color: '#7F77DD' }}
                              >
                                ₹{product.price.toLocaleString()}
                              </span>
                              {product.originalPrice && (
                                <span
                                  className="text-xs line-through"
                                  style={{ color: 'var(--color-text-secondary)' }}
                                >
                                  ₹{product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                            {product.discountPercent && (
                              <span
                                className="text-xs font-bold px-2 py-0.5 rounded inline-block mt-1"
                                style={{
                                  background: '#D4F4DD',
                                  color: '#009933',
                                }}
                              >
                                {product.discountPercent}% off
                              </span>
                            )}
                          </div>

                          {/* Rating */}
                          <p
                            className="text-xs mb-3"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {renderStars(product.rating)} {product.rating} · {product.reviews.toLocaleString()} reviews
                          </p>

                          {/* Platform Badge */}
                          <div className="mb-3 flex gap-2">
                            <span
                              className="text-xs px-2 py-1 rounded-full text-white"
                              style={{ background: getPlatformColor(product.platform) }}
                            >
                              {product.platform}
                            </span>
                          </div>

                          {/* View Deal Button */}
                          <a
                            href={product.affiliateUrl || `https://${product.platform.toLowerCase()}.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full px-3 py-2 rounded text-white text-xs font-medium text-center hover:opacity-90 transition"
                            style={{ background: '#7F77DD' }}
                          >
                            View Deal →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Fixed Bottom Chat Input */}
        <div
          className="fixed bottom-0 left-0 right-0 border-t px-6 py-4"
          style={{
            background: 'var(--color-background-primary)',
            borderColor: 'var(--color-border-tertiary)',
          }}
        >
          <div className="max-w-7xl mx-auto">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:opacity-70 flex-shrink-0"
                style={{ background: 'var(--color-background-secondary)' }}
              >
                🎤
              </button>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Refine your search or try 'surprise me'..."
                className="flex-1 px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
                style={{
                  borderColor: 'var(--color-border-tertiary)',
                  color: 'var(--color-text-primary)',
                }}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 text-white rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 flex-shrink-0"
                style={{ background: '#7F77DD' }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  )
}
