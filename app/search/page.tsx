'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Navbar from '@/components/navbar'
import { getProductsByQuery } from '@/lib/products'
import type { Product } from '@/lib/products'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || ''

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [hasInitialized, setHasInitialized] = useState(false)

  // Auto-submit query if it exists on page load
  useEffect(() => {
    if (initialQuery && !hasInitialized) {
      setHasInitialized(true)
      submitQuery(initialQuery)
    }
  }, [initialQuery, hasInitialized])

  const submitQuery = async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    const userMessage: Message = { role: 'user', content: query }
    setMessages([userMessage])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [userMessage],
          query: query,
        }),
      })

      const data = await response.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
      }
      setMessages([userMessage, assistantMessage])

      // Get products based on query
      const foundProducts = getProductsByQuery(query).slice(0, 8)
      setProducts(foundProducts)
    } catch (error) {
      console.error('Failed to get response:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      }
      setMessages([userMessage, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const query = input
    setInput('')
    await submitQuery(query)
  }

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--color-background-secondary)' }} className="min-h-screen py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Chat Section - Left */}
            <div className="lg:col-span-5 flex flex-col" style={{ background: 'var(--color-background-primary)', borderColor: 'var(--color-border-tertiary)' }} className="rounded-lg border p-6 h-fit sticky top-6">
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Shopping Assistant
              </h2>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-96">
                {messages.length === 0 ? (
                  <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>
                    Search for products to get AI recommendations
                  </p>
                ) : (
                  messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                          msg.role === 'user'
                            ? 'bg-purple-600 text-white'
                            : 'rounded-lg p-3'
                        }`}
                        style={msg.role === 'assistant' ? { background: 'var(--color-background-secondary)', color: 'var(--color-text-primary)' } : {}}
                      >
                        {msg.role === 'assistant' ? (
                          <div className="text-xs">
                            {msg.content.split('\n').map((line, i) => (
                              <p key={i} className="mb-1">{line}</p>
                            ))}
                          </div>
                        ) : (
                          msg.content
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about products..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 rounded border text-sm"
                  style={{ borderColor: 'var(--color-border-secondary)', color: 'var(--color-text-primary)' }}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 text-white rounded text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
                  style={{ background: '#7F77DD' }}
                >
                  {isLoading ? 'Loading...' : 'Send'}
                </button>
              </form>
            </div>

            {/* Products Section - Right */}
            <div className="lg:col-span-7">
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Recommended Products
              </h2>
              {products.length === 0 ? (
                <div className="text-center py-12 rounded-lg" style={{ background: 'var(--color-background-primary)', borderColor: 'var(--color-border-tertiary)' }} className="border">
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Search for products to see recommendations
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="rounded-lg border overflow-hidden hover:shadow-md transition"
                      style={{ borderColor: 'var(--color-border-tertiary)', background: 'var(--color-background-primary)' }}
                    >
                      {/* Product Image Placeholder */}
                      <div className="h-24 flex items-center justify-center text-3xl" style={{ background: product.bg }}>
                        {product.emoji}
                      </div>

                      {/* Product Info */}
                      <div className="p-2.5">
                        <p className="text-xs font-medium mb-0.5 line-clamp-1" style={{ color: 'var(--color-text-primary)' }}>
                          {product.name}
                        </p>
                        <p className="text-xs mb-2 line-clamp-1" style={{ color: 'var(--color-text-secondary)' }}>
                          {product.brand}
                        </p>

                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-semibold" style={{ color: '#534AB7' }}>
                            ₹{product.price}
                          </span>
                          <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: '#EEEDFE', color: '#534AB7' }}>
                            {product.platform}
                          </span>
                        </div>

                        <button className="w-full text-xs px-2 py-1.5 rounded text-white font-medium hover:opacity-90 transition" style={{ background: '#7F77DD' }}>
                          View Deal →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
