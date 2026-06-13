interface OccasionBlogCardProps {
  title: string
  excerpt: string
  category: string
  readTime: number
  emoji: string
}

export default function OccasionBlogCard({
  title,
  excerpt,
  category,
  readTime,
  emoji,
}: OccasionBlogCardProps) {
  return (
    <div
      className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      style={{ borderColor: 'var(--color-border-tertiary)', background: 'var(--color-background-primary)' }}
    >
      {/* Emoji */}
      <div className="h-28 flex items-center justify-center text-5xl bg-gradient-to-br from-purple-50 to-blue-50">
        {emoji}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: '#EEEDFE', color: '#534AB7' }}>
            {category}
          </span>
          <span className="text-xs text-gray-500">{readTime} min read</span>
        </div>
        <h3 className="font-bold text-sm mb-2 line-clamp-2 hover:underline" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h3>
        <p className="text-xs line-clamp-2 mb-3" style={{ color: 'var(--color-text-secondary)' }}>
          {excerpt}
        </p>
        <a href="#" className="text-xs font-medium hover:opacity-70 transition" style={{ color: '#7F77DD' }}>
          Read more →
        </a>
      </div>
    </div>
  )
}
