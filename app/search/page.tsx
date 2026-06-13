'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Navbar from '@/components/navbar'
import { featuredProducts } from '@/lib/products'
import type { Product } from '@/lib/products'
import Link from 'next/link'

interface FilterState {
  categories: string[]
  priceRange: [number, number]
  platforms: string[]
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || 'earbuds'

  const [aiResponse, setAiResponse] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>(featuredProducts)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(featuredProducts)
  const [input, setInput] = useState(initialQuery)
  const [hasInitialized, setHasInitialized] = useState(false)
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

  // Apply filters
  useEffect(() => {
    let filtered = products

    if (filters.categories.length > 0) {
      filtered = filtered.filter(p =>
        filters.categories.includes(p.category)
      )
    }

    if (filters.platforms.length > 0) {
      filtered = filtered.filter(p =>
        filters.platforms.includes(p.platform)
      )
    }

    filtered = filtered.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    setFilteredProducts(filtered)
  }, [filters, products])

  const submitQuery = async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    setInput(query)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: query }], query }),
      })

      const data = await response.json()
      setAiResponse(data.message || `Here are the best ${query} results for you.`)
      
      // Use featured products (all 8 products)
      setProducts(featuredProducts)
      setFilteredProducts(featuredProducts)
    } catch (error) {
      console.error('Search failed:', error)
      setAiResponse('Sorry, I encountered an error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    submitQuery(input)
  }

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      'Amazon': '#FF9900',
      'Flipkart': '#1F4B96',
      'Nykaa': '#E74C62',
      'Myntra': '#0C1F37',
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
        {/* Top Bar */}
        <div
          className="sticky top-0 z-40 border-b px-6 py-4"
          style={{
            background: 'var(--color-background-primary)',
            borderColor: 'var(--color-border-tertiary)',
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <Link href="/" className="text-xl hover:opacity-70">
              ←
            </Link>
            <span style={{ color: 'var(--color-text-primary)' }}>
              AI results for: <span className="font-semibold">{initialQuery}</span>
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
          {/* Left Sidebar - Filters (Desktop Only) */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div
              className="rounded-lg border p-6 sticky top-24"
              style={{
                background: 'var(--color-background-primary)',
                borderColor: 'var(--color-border-tertiary)',
              }}
            >
              <h3
                className="text-sm font-bold mb-4"
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
                className="w-full px-4 py-2 text-white font-medium rounded-lg hover:opacity-90 transition"
                style={{ background: '#7F77DD' }}
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* AI Response Card */}
            {aiResponse && (
              <div
                className="rounded-lg border-l-4 p-6 mb-8"
                style={{
                  background: 'var(--color-background-primary)',
                  borderColor: '#7F77DD',
                }}
              >
                <div className="flex gap-3 items-start">
                  <span className="text-2xl flex-shrink-0">✨</span>
                  <div className="min-w-0">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="text-sm m-0" style={{ color: 'var(--color-text-primary)' }}>
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => <strong>{children}</strong>,
                        em: ({ children }) => <em>{children}</em>,
                        h2: ({ children }) => (
                          <h2 className="text-sm font-bold mt-2 mb-1">{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-sm font-semibold mt-2 mb-1">{children}</h3>
                        ),
                        ul: ({ children }) => (
                          <ul className="text-sm list-disc list-inside m-0">{children}</ul>
                        ),
                        li: ({ children }) => <li className="m-0">{children}</li>,
                      }}
                    >
                      {aiResponse}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
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
            ) : filteredProducts.length === 0 ? (
              <div
                className="text-center py-12 rounded-lg"
                style={{ background: 'var(--color-background-secondary)' }}
              >
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  No products match your filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="rounded-lg overflow-hidden border hover:shadow-md hover:scale-[1.02] transition cursor-pointer"
                    style={{
                      borderColor: 'var(--color-border-tertiary)',
                      background: 'var(--color-background-primary)',
                    }}
                  >
                    {/* Product Image */}
                    <div
                      className="h-40 flex items-center justify-center text-5xl rounded-t-lg"
                      style={{ background: product.bg }}
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
                        href={`https://${product.platform.toLowerCase()}.com`}
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
                placeholder="Refine your search or ask a follow-up..."
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
