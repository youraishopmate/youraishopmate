'use client'

import { Suspense } from 'react'
import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/navbar'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Product {
  id: number
  name: string
  price: number
  platform: string
  category: string
  rating: number
  description: string
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Fetch products based on search query
  useEffect(() => {
    if (initialQuery) {
      fetchProducts(initialQuery)
    }
  }, [initialQuery])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const fetchProducts = async (query: string) => {
    try {
      const response = await fetch(`/api/products?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setProducts(data.products)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Get AI response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          query: input,
        }),
      })

      const data = await response.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
      }
      setMessages((prev) => [...prev, assistantMessage])

      // Fetch products based on the query
      fetchProducts(input)
    } catch (error) {
      console.error('Failed to get response:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Section */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow p-6 h-[600px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Shopping Assistant</h2>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <p>Start asking about products...</p>
                  </div>
                ) : (
                  messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about products..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Products Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
              {products.length === 0 ? (
                <div className="text-center text-gray-500 py-12 bg-white rounded-lg">
                  <p>Search for products to see recommendations</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-100"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 flex-1">
                          {product.name}
                        </h3>
                        <span className="text-yellow-500 text-sm font-medium">
                          ★ {product.rating}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xl font-bold text-blue-600">
                            ₹{product.price.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.platform}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {product.category}
                        </span>
                      </div>
                      <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                        View on {product.platform}
                      </button>
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
