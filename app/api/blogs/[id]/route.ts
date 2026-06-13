import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { blog } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status } = body

    if (!['draft', 'published', 'rejected'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      )
    }

    const updatedBlog = await db
      .update(blog)
      .set({
        status,
        publishedAt: status === 'published' ? new Date() : null,
        updatedAt: new Date(),
      })
      .where(eq(blog.id, parseInt(params.id)))
      .returning()

    if (updatedBlog.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json({ blog: updatedBlog[0] })
  } catch (error) {
    console.error('Blog update error:', error)
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    )
  }
}
