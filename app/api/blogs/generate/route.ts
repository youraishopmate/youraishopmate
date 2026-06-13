import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

export async function POST(request: NextRequest) {
  try {
    const { topic, keywords } = await request.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 }
      )
    }

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      )
    }

    const systemPrompt = `You are an expert shopping and product review writer for an Indian e-commerce aggregator. 
Write engaging, informative blog posts that help readers make better shopping decisions.
Focus on practical advice, comparisons, and recommendations for products available in India.`

    const userPrompt = `Write a comprehensive blog post about: ${topic}
${keywords ? `Keywords to include: ${keywords}` : ''}

Format the response as a blog post with:
- An engaging title (keep it concise)
- A brief excerpt (2-3 sentences)
- Main content divided into clear sections with headers
- Product recommendations where relevant
- Conclusion

Make it informative but not too long (around 500-800 words).`

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1500,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    })

    const content =
      response.content[0].type === 'text' ? response.content[0].text : ''

    // Extract title and excerpt from the generated content
    const titleMatch = content.match(/^#+\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled'

    return NextResponse.json({
      title,
      content,
      excerpt: content.substring(0, 150) + '...',
    })
  } catch (error) {
    console.error('Blog generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate blog' },
      { status: 500 }
    )
  }
}
