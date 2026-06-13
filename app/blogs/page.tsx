import Navbar from '@/components/navbar'
import Link from 'next/link'

// Mock blog data
const MOCK_BLOGS = [
  {
    id: 1,
    slug: 'best-headphones-2024',
    title: 'Best Wireless Headphones Under 5000 in 2024',
    excerpt: 'Find the perfect wireless headphones for your needs and budget',
    content: 'Detailed review of top wireless headphones available in India...',
    status: 'published',
    publishedAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    slug: 'summer-fashion-guide',
    title: 'Summer Fashion Guide 2024',
    excerpt: 'Essential fashion tips for the hot season',
    content: 'Complete guide to dressing stylishly in summer...',
    status: 'published',
    publishedAt: new Date('2024-02-01'),
  },
  {
    id: 3,
    slug: 'skincare-routine',
    title: 'Complete Skincare Routine for Indian Climate',
    excerpt: 'Build the perfect skincare regimen',
    content: 'Step-by-step guide to skincare in humid weather...',
    status: 'published',
    publishedAt: new Date('2024-02-10'),
  },
]

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-2">Shopping Guides & Reviews</h1>
          <p className="text-gray-600 mb-12">
            Expert advice and reviews to help you make better shopping decisions
          </p>

          <div className="space-y-6">
            {MOCK_BLOGS.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 border border-gray-100 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {blog.title}
                    </h2>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Published
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      {blog.publishedAt.toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <span className="text-blue-600 font-medium hover:text-blue-800">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
