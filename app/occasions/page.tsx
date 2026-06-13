import Navbar from '@/components/navbar'

const OCCASIONS = [
  {
    id: 1,
    name: 'Holi Festival',
    description: 'Festival of Colors - Shop for colors, gifts, and festive wear',
    date: 'March 25, 2024',
    daysLeft: 42,
    icon: '🎨',
  },
  {
    id: 2,
    name: 'Eid Celebration',
    description: 'Eid-ul-Fitr - Traditional attire and gifts',
    date: 'April 11, 2024',
    daysLeft: 59,
    icon: '🌙',
  },
  {
    id: 3,
    name: 'Wedding Season',
    description: 'Bridal wear, jewelry, and celebration essentials',
    date: 'May 2024 - June 2024',
    daysLeft: 90,
    icon: '💍',
  },
  {
    id: 4,
    name: 'Summer Vacation',
    description: 'Travel gear, beachwear, and vacation essentials',
    date: 'May 2024',
    daysLeft: 75,
    icon: '🏖️',
  },
  {
    id: 5,
    name: 'Diwali Festival',
    description: 'Festival of Lights - Home decor, gifts, and traditional items',
    date: 'November 1, 2024',
    daysLeft: 232,
    icon: '🪔',
  },
  {
    id: 6,
    name: 'Christmas Season',
    description: 'Christmas gifts, decorations, and festive items',
    date: 'December 25, 2024',
    daysLeft: 286,
    icon: '🎄',
  },
]

export default function OccasionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-2">Upcoming Occasions</h1>
          <p className="text-gray-600 mb-12">
            Shop for upcoming festivals and special events
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OCCASIONS.map((occasion) => (
              <div
                key={occasion.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border border-gray-100"
              >
                <div className="text-4xl mb-3">{occasion.icon}</div>
                <h3 className="text-xl font-bold mb-2">{occasion.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{occasion.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">{occasion.date}</p>
                  <div className="mt-2 text-red-600 font-semibold">
                    {occasion.daysLeft} days to go
                  </div>
                </div>

                {/* Countdown Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${Math.min(100, (occasion.daysLeft / 365) * 100)}%` }}
                  ></div>
                </div>

                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Shop for {occasion.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
