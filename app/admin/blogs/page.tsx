import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'

export default async function AdminBlogsPage() {
  const session = await auth.api.getSession({ headers: await headers() })

  // Redirect if not authenticated or not admin
  if (!session?.user) {
    redirect('/sign-in')
  }

  // For now, allow any authenticated user. In production, you'd check for admin role.
  const isAdmin = session.user.email === 'admin@youraishopmate.com'

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b">
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" className="text-lg font-medium">
              your<span className="text-purple-600">ai</span>shopmate
            </Link>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Go Home
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-4">
              You do not have permission to access this page.
            </p>
          </div>
        </div>
      </main>
    )
  }

  const DRAFT_BLOGS = [
    {
      id: 1,
      title: 'Best Gaming Laptops 2024',
      excerpt: 'Top gaming laptops under 100,000',
      author: 'user@example.com',
      createdAt: new Date('2024-02-20'),
      status: 'draft',
    },
    {
      id: 2,
      title: 'Budget Friendly Kitchen Gadgets',
      excerpt: 'Essential kitchen gadgets that won\'t break the bank',
      author: 'user@example.com',
      createdAt: new Date('2024-02-21'),
      status: 'draft',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="text-lg font-medium">
            your<span className="text-purple-600">ai</span>shopmate
          </Link>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/sign-in" className="hover:text-gray-600">Sign Out</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Blog Review Dashboard</h1>
        <p className="text-gray-600 mb-12">Approve or reject blog posts for publication</p>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Author</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Created</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {DRAFT_BLOGS.map((blog) => (
                <tr key={blog.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{blog.title}</p>
                      <p className="text-sm text-gray-500">{blog.excerpt}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{blog.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {blog.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                        Approve
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                        Reject
                      </button>
                      <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {DRAFT_BLOGS.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600">No pending blogs for review</p>
          </div>
        )}
      </div>
    </main>
  )
}
