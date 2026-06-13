import Link from 'next/link'

interface NavbarProps {
  showProfileLinks?: boolean
}

export default function Navbar({ showProfileLinks = true }: NavbarProps) {
  return (
    <nav className="border-b" style={{ borderColor: 'var(--color-border-tertiary)', background: 'var(--color-background-primary)' }}>
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-lg font-medium" style={{ color: 'var(--color-text-primary)' }}>
          your<span style={{ color: '#7F77DD' }}>ai</span>shopmate
        </Link>
        {showProfileLinks && (
          <div className="flex gap-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <Link href="/trending" className="hover:opacity-70">Trending</Link>
            <Link href="/search" className="hover:opacity-70">Deals</Link>
            <Link href="/sign-in" className="hover:opacity-70">My Profile</Link>
            <span>❤️</span>
          </div>
        )}
      </div>
    </nav>
  )
}
