'use client'

interface OccasionProductCardProps {
  name: string
  brand: string
  price: number
  originalPrice?: number
  discount?: number
  emoji: string
  platform: string
  tag: string
  occasionBadge: string
  occasionColor: string
  affiliateUrl?: string
}

export default function OccasionProductCard({
  name,
  brand,
  price,
  originalPrice,
  discount,
  emoji,
  platform,
  tag,
  occasionBadge,
  occasionColor,
  affiliateUrl = '#',
}: OccasionProductCardProps) {
  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow hover:scale-105 transform duration-200"
      style={{ borderColor: 'var(--color-border-tertiary)', display: 'block' }}
    >
      {/* Image Placeholder */}
      <div className="relative h-32 flex items-center justify-center text-5xl" style={{ background: occasionColor }}>
        {emoji}
        {/* Occasion Badge */}
        <div
          className="absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-full text-white"
          style={{ background: '#7F77DD' }}
        >
          {occasionBadge}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3" style={{ background: 'var(--color-background-primary)' }}>
        <p className="text-sm font-bold mb-0.5 line-clamp-1" style={{ color: 'var(--color-text-primary)' }}>
          {name}
        </p>
        <p className="text-xs mb-2 line-clamp-1" style={{ color: 'var(--color-text-secondary)' }}>
          {brand}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-sm font-bold" style={{ color: '#7F77DD' }}>
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-xs line-through" style={{ color: 'var(--color-text-secondary)' }}>
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
          {discount && <span className="text-xs font-semibold text-green-600">{discount}% off</span>}
        </div>

        {/* Platform & Tag */}
        <div className="flex gap-1.5 mb-3">
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#EEEDFE', color: '#534AB7' }}>
            {platform}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#F0F0F0', color: '#666' }}>
            {tag}
          </span>
        </div>

        {/* Button */}
        <button
          className="w-full text-xs px-3 py-2 rounded font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: '#7F77DD' }}
        >
          View Deal →
        </button>
      </div>
    </a>
  )
}
