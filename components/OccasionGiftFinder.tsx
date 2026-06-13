'use client'

import { useState } from 'react'

interface OccasionGiftFinderProps {
  occasionName: string
  chips: string[]
}

export default function OccasionGiftFinder({ occasionName, chips }: OccasionGiftFinderProps) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleChipClick = async (chip: string) => {
    await submitQuery(chip)
    setInput('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    await submitQuery(input)
    setInput('')
  }

  const submitQuery = async (query: string) => {
    const userMessage = { role: 'user' as const, content: query }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [userMessage],
          query: query,
          context: `User is shopping for ${occasionName}`,
        }),
      })

      const data = await response.json()
      const assistantMessage = { role: 'assistant' as const, content: data.message }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        role: 'assistant' as const,
        content: 'Sorry, I encountered an error. Please try again.',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="my-8 p-6 rounded-lg" style={{ background: 'var(--color-background-secondary)' }}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
        AI Gift Finder for {occasionName}
      </h2>
      <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
        Tell me who you&apos;re shopping for and your budget
      </p>

      {/* Messages */}
      {messages.length > 0 && (
        <div className="mb-4 p-4 rounded-lg" style={{ background: 'var(--color-background-primary)', borderColor: 'var(--color-border-tertiary)' }} className="border">
          <div className="space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'text-white'
                      : ''
                  }`}
                  style={{
                    background: msg.role === 'user' ? '#7F77DD' : '#EEEDFE',
                    color: msg.role === 'user' ? 'white' : '#534AB7',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => handleChipClick(chip)}
            disabled={isLoading}
            className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:opacity-80 disabled:opacity-50"
            style={{ borderColor: '#7F77DD', color: '#7F77DD', background: 'white' }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about gifts..."
          disabled={isLoading}
          className="flex-1 px-4 py-2 rounded border text-sm outline-none disabled:opacity-50"
          style={{ borderColor: 'var(--color-border-secondary)', color: 'var(--color-text-primary)' }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 rounded text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
          style={{ background: '#7F77DD' }}
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  )
}
