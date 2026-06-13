import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { blog } from '@/lib/db/schema'
import { eq, or } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get('status') || 'published'
    const slug = searchParams.get('slug')

    let query = db.select().from(blog)

    if (slug) {
      query = query.where(eq(blog.slug, slug))
    } else {
      query = query.where(eq(blog.status, status))
    }

    const results = await query

    return NextResponse.json({ blogs: results })
  } catch (error) {
    console.error('Blog fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, excerpt, content, userId } = body

    if (!title || !slug || !content || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const newBlog = await db
      .insert(blog)
      .values({
        title,
        slug,
        excerpt: excerpt || '',
        content,
        status: 'draft',
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning()

    return NextResponse.json({ blog: newBlog[0] })
  } catch (error) {
    console.error('Blog creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    )
  }
}
