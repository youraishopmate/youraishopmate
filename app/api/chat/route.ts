import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

interface UserIntent {
  type: 'search' | 'recommendation' | 'comparison' | 'info' | 'casual'
  category?: string
  query?: string
  priceRange?: { min: number; max: number }
}

function parseIntent(userMessage: string): UserIntent {
  const lowerMessage = userMessage.toLowerCase()

  let priceRange = undefined
  const priceMatch = userMessage.match(/(\d+)\s*[-to]*\s*(\d+)/i)
  if (priceMatch) {
    priceRange = {
      min: parseInt(priceMatch[1]),
      max: parseInt(priceMatch[2]),
    }
  }

  let category = undefined
  const categories = [
    'electronics',
    'fashion',
    'beauty',
    'sports',
    'home',
    'furniture',
  ]
  for (const cat of categories) {
    if (lowerMessage.includes(cat)) {
      category = cat
      break
    }
  }

  if (
    lowerMessage.includes('compare') ||
    lowerMessage.includes('vs') ||
    lowerMessage.includes('difference')
  ) {
    return { type: 'comparison', category, priceRange, query: userMessage }
  } else if (
    lowerMessage.includes('recommend') ||
    lowerMessage.includes('suggest') ||
    lowerMessage.includes('best')
  ) {
    return { type: 'recommendation', category, priceRange, query: userMessage }
  } else if (
    lowerMessage.includes('where to buy') ||
    lowerMessage.includes('price') ||
    lowerMessage.includes('deal')
  ) {
    return { type: 'search', category, priceRange, query: userMessage }
  } else if (
    lowerMessage.includes('how') ||
    lowerMessage.includes('what is') ||
    lowerMessage.includes('tell me')
  ) {
    return { type: 'info', category, priceRange, query: userMessage }
  }

  return { type: 'search', category, priceRange, query: userMessage }
}

export async function POST(request: NextRequest) {
  try {
    const { messages, query } = await request.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 }
      )
    }

    const lastUserMessage = messages[messages.length - 1]?.content || query
    const intent = parseIntent(lastUserMessage)

    const systemPrompt = `You are a shopping assistant for youraishopmate.com.
The user is looking for products to buy.
Respond with EXACTLY one friendly sentence summarising what you found for them.
Maximum 20 words.
No markdown. No bullet points. No headings. No tables.
No questions. No suggestions. Just one clean sentence.

Example good responses:
- "Here are the best running shoes under ₹1500 from top Indian brands."
- "Found 4 great wireless earbuds under ₹1000 with ANC and long battery."
- "These quirky home decor picks make perfect gifts under ₹400."

Never include markdown, tables, or multiple sentences.`

    // Upgraded model parameter target configuration
    const response = await client.messages.create({
model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((msg: any) => {
        const textContent = typeof msg.content === 'string' ? msg.content : (msg.content?.text || '');
        return {
          role: msg.role === 'assistant' ? 'assistant' : 'user',
          content: textContent || 'Search query'
        };
      }).filter((msg: any) => msg.content.trim() !== ''),
    })

    const assistantMessage =
      response.content[0].type === 'text' ? response.content[0].text : ''

    return NextResponse.json({
      message: assistantMessage,
      stop_reason: response.stop_reason,
      intent: intent.type,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
