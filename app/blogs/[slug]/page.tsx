import Navbar from '@/components/navbar'
import Link from 'next/link'

// Mock blog data
const MOCK_BLOGS: { [key: string]: any } = {
  'best-headphones-2024': {
    id: 1,
    slug: 'best-headphones-2024',
    title: 'Best Wireless Headphones Under 5000 in 2024',
    excerpt: 'Find the perfect wireless headphones for your needs and budget',
    content: `
      <h2>Finding the Perfect Wireless Headphones</h2>
      <p>In this comprehensive guide, we review the best wireless headphones available in India under 5000 rupees.</p>
      
      <h3>Top Picks</h3>
      <ul>
        <li><strong>Boult Audio ProBass</strong> - Best for Bass Lovers: ₹1,999</li>
        <li><strong>Sony WH-CH720</strong> - Best Overall: ₹4,999</li>
        <li><strong>JBL Tune 770NC</strong> - Best Noise Cancellation: ₹3,999</li>
      </ul>
      
      <h3>What to Consider</h3>
      <p>When choosing wireless headphones, consider these factors:</p>
      <ul>
        <li>Battery Life</li>
        <li>Sound Quality</li>
        <li>Comfort</li>
        <li>Noise Cancellation</li>
        <li>Build Quality</li>
      </ul>
      
      <p>Read our detailed reviews to find the perfect match for your needs and budget.</p>
    `,
    status: 'published',
    publishedAt: new Date('2024-01-15'),
  },
  'summer-fashion-guide': {
    id: 2,
    slug: 'summer-fashion-guide',
    title: 'Summer Fashion Guide 2024',
    excerpt: 'Essential fashion tips for the hot season',
    content: `
      <h2>Master Your Summer Style</h2>
      <p>Summer fashion in India requires special consideration for the heat and humidity.</p>
      
      <h3>Essential Summer Items</h3>
      <ul>
        <li>Light Cotton T-shirts</li>
        <li>Linen Shorts</li>
        <li>Breathable Sundresses</li>
        <li>Lightweight Scarves</li>
        <li>Comfortable Sandals</li>
      </ul>
      
      <h3>Color Palette</h3>
      <p>Stick to light and neutral colors to reflect heat and create a fresh look.</p>
      
      <h3>Accessories</h3>
      <p>Don't forget UV protection with sunglasses and hats!</p>
    `,
    status: 'published',
    publishedAt: new Date('2024-02-01'),
  },
  'skincare-routine': {
    id: 3,
    slug: 'skincare-routine',
    title: 'Complete Skincare Routine for Indian Climate',
    excerpt: 'Build the perfect skincare regimen',
    content: `
      <h2>Skincare for Humid Weather</h2>
      <p>The Indian climate can be challenging for skin. Here's a complete routine.</p>
      
      <h3>Morning Routine</h3>
      <ol>
        <li>Gentle Cleanser</li>
        <li>Toner</li>
        <li>Lightweight Moisturizer</li>
        <li>Sunscreen SPF 50+</li>
      </ol>
      
      <h3>Evening Routine</h3>
      <ol>
        <li>Oil Cleanser</li>
        <li>Water-based Cleanser</li>
        <li>Toner</li>
        <li>Serum</li>
        <li>Night Cream</li>
      </ol>
      
      <h3>Weekly Treatments</h3>
      <p>Add exfoliation and masks 2-3 times per week.</p>
    `,
    status: 'published',
    publishedAt: new Date('2024-02-10'),
  },
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const blog = MOCK_BLOGS[params.slug]

  if (!blog) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
              <Link href="/blogs" className="text-blue-600 hover:text-blue-800">
                Back to Blogs
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blogs" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
            ← Back to Blogs
          </Link>

          <article className="bg-white rounded-lg shadow p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
              <div className="flex items-center justify-between text-gray-600">
                <p>
                  {blog.publishedAt.toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Published
                </span>
              </div>
            </header>

            <div
              className="prose prose-sm max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-8 pt-8 border-t">
              <p className="text-gray-600 mb-4">
                Found this helpful? Share with others!
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Share on Facebook
                </button>
                <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
                  Share on Twitter
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
