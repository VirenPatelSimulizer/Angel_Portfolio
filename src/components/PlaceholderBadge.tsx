import { Plus } from 'lucide-react'

export default function PlaceholderBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded-full border border-dashed border-[color:var(--color-violet)]/50 text-[color:var(--color-violet)]">
      <Plus size={10} />
      Placeholder — edit me
    </span>
  )
}
