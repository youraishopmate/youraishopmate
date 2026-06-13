import Navbar from '@/components/navbar'

const TRENDS = [
  {
    id: 1,
    title: 'Sustainable Fashion',
    description: 'Eco-friendly clothing and accessories gaining popularity',
    searchVolume: 45000,
    trend: 'up',
    category: 'Fashion',
  },
  {
    id: 2,
    title: 'Productivity Gadgets',
    description: 'Tech accessories for remote work setup',
    searchVolume: 38000,
    trend: 'up',
    category: 'Electronics',
  },
  {
    id: 3,
    title: 'Home Gym Equipment',
    description: 'Fitness equipment for home workout enthusiasts',
    searchVolume: 52000,
    trend: 'up',
    category: 'Sports & Fitness',
  },
  {
    id: 4,
    title: 'Skincare Routines',
    description: 'Natural and organic skincare products trending',
    searchVolume: 65000,
    trend: 'up',
    category: 'Beauty',
  },
  {
    id: 5,
    title: 'Smart Home Devices',
    description: 'AI-powered smart home automation',
    searchVolume: 48000,
    trend: 'up',
    category: 'Electronics',
  },
  {
    id: 6,
    title: 'Minimalist Living',
    description: 'Minimalist furniture and home decor',
    searchVolume: 35000,
    trend: 'stable',
    category: 'Home & Living',
  },
]

export default function TrendingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-2">What&apos;s Trending</h1>
          <p className="text-gray-600 mb-12">
            Discover what&apos;s trending on social media and gaining popularity
          </p>

          <div className="space-y-4">
            {TRENDS.map((trend) => (
              <div
                key={trend.id}
                className="bg-white rounded-lg shadow hover:shadow-md transition p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{trend.title}</h3>
                    <p className="text-gray-600 mb-4">{trend.description}</p>
                    <div className="flex gap-4 items-center">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                        {trend.category}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {trend.searchVolume.toLocaleString()} searches this week
                      </span>
                      <span
                        className={`px-3 py-1 rounded text-sm font-medium ${
                          trend.trend === 'up'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {trend.trend === 'up' ? '📈 Rising' : '➡️ Stable'}
                      </span>
                    </div>
                  </div>
                  <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition whitespace-nowrap">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
