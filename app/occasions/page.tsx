import Navbar from '@/components/navbar'
import Link from 'next/link'

const OCCASIONS = [
  {
    name: 'Diwali',
    emoji: '🪔',
    tagline: 'Light up the festivities with perfect gifts',
    daysUntil: 127,
    bg: '#FEF3C7',
    link: '/occasions/diwali',
  },
  {
    name: 'Wedding Season',
    emoji: '💍',
    tagline: 'Dress for every wedding moment',
    daysUntil: 155,
    bg: '#FCE7F3',
    link: '/occasions/wedding-season',
  },
  {
    name: "Valentine's Day",
    emoji: '💝',
    tagline: 'Gifts they will remember forever',
    daysUntil: 64,
    bg: '#FFE4E6',
    link: '/occasions/valentines-day',
  },
  {
    name: 'Holi',
    emoji: '🎨',
    tagline: 'Play in colour, glow after',
    daysUntil: 94,
    bg: '#F3E8FF',
    link: '/occasions/holi',
  },
  {
    name: 'Christmas & New Year',
    emoji: '🎄',
    tagline: 'Celebrate, gift, and start fresh',
    daysUntil: 196,
    bg: '#DCFCE7',
    link: '/occasions/christmas-new-year',
  },
  {
    name: "Mother's Day",
    emoji: '🌸',
    tagline: 'For the one who does it all',
    daysUntil: 142,
    bg: '#FFEDD5',
    link: '/occasions/mothers-day',
  },
  {
    name: 'Raksha Bandhan',
    emoji: '🎀',
    tagline: 'Celebrate the bond that lasts forever',
    daysUntil: 88,
    bg: '#FEF3C7',
    link: '/occasions/raksha-bandhan',
  },
  {
    name: 'Back to School',
    emoji: '🎒',
    tagline: 'Start the year right - equipped and inspired',
    daysUntil: 234,
    bg: '#DBEAFE',
    link: '/occasions/back-to-school',
  },
]

export default function OccasionsPage() {
  return (
    <div style={{ background: 'var(--color-background-primary)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-12 text-center" style={{ background: 'var(--color-background-secondary)' }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Shop by Occasion
        </h1>
        <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          From Diwali to Back to School — curated picks for every celebration
        </p>
      </section>

      {/* Occasions Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occasion) => (
            <Link
              key={occasion.name}
              href={occasion.link}
              className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              style={{ background: occasion.bg }}
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-3">{occasion.emoji}</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>
                  {occasion.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#666' }}>
                  {occasion.tagline}
                </p>
                <p className="text-xs font-semibold" style={{ color: '#7F77DD' }}>
                  in {occasion.daysUntil} days
                </p>
                <button
                  className="w-full mt-4 px-4 py-2 rounded-lg font-medium text-white hover:opacity-90 transition"
                  style={{ background: '#7F77DD' }}
                >
                  Shop now →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="p-8 rounded-lg" style={{ background: '#EEEDFE' }}>
          <p className="text-lg font-bold mb-2" style={{ color: '#534AB7' }}>
            Can't find your occasion?
          </p>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Ask AI to help you find the perfect gift for any celebration
          </p>
          <button
            className="px-6 py-2 rounded-lg font-medium text-white hover:opacity-90 transition"
            style={{ background: '#7F77DD' }}
          >
            Ask AI Shopmate
          </button>
        </div>
      </section>
    </div>
  )
}

