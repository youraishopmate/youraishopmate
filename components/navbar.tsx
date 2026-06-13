'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavbarProps {
  showProfileLinks?: boolean
}

const OCCASIONS_MAP = {
  'Diwali': '/occasions/diwali',
  'Wedding Season': '/occasions/wedding-season',
  "Valentine's Day": '/occasions/valentines-day',
  'Holi': '/occasions/holi',
  'Christmas & New Year': '/occasions/christmas-new-year',
  "Mother's Day": '/occasions/mothers-day',
  'Raksha Bandhan': '/occasions/raksha-bandhan',
  'Back to School': '/occasions/back-to-school',
}

const BLOG_CATEGORIES = [
  'All Blogs',
  'Style Guides',
  'Tech Reviews',
  'Beauty Tips',
  'Gift Ideas',
]

export default function Navbar({ showProfileLinks = true }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="border-b" style={{ borderColor: 'var(--color-border-tertiary)', background: 'var(--color-background-primary)' }}>
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-lg font-medium" style={{ color: 'var(--color-text-primary)' }}>
          your<span style={{ color: '#7F77DD' }}>ai</span>shopmate
        </Link>
        {showProfileLinks && (
          <div className="flex gap-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <Link href="/trending" className="hover:opacity-70 transition">Trending</Link>

            {/* Blogs Dropdown */}
            <div className="relative group">
              <button className="hover:opacity-70 transition flex items-center gap-1">
                Blogs
                <span className="text-xs">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50" style={{ borderColor: 'var(--color-border-tertiary)' }}>
                {BLOG_CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blogs?category=${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 hover:bg-purple-50 first:rounded-t-lg last:rounded-b-lg"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Occasions Dropdown */}
            <div className="relative group">
              <button className="hover:opacity-70 transition flex items-center gap-1">
                Occasions
                <span className="text-xs">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50" style={{ borderColor: 'var(--color-border-tertiary)' }}>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(OCCASIONS_MAP).map(([name, link]) => (
                    <Link
                      key={name}
                      href={link}
                      className="px-3 py-2 rounded hover:bg-purple-50 text-sm transition flex items-center gap-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className="border-t mt-3 pt-3">
                  <Link
                    href="/occasions"
                    className="text-xs font-medium hover:opacity-70 transition"
                    style={{ color: '#7F77DD' }}
                  >
                    View all occasions →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/search" className="hover:opacity-70 transition">Deals</Link>
            <Link href="/sign-in" className="hover:opacity-70 transition">My Profile</Link>
            <span>❤️</span>
          </div>
        )}
      </div>
    </nav>
  )
}
