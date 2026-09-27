import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <PageTransition>
      <PageHero
        icon={Mail}
        eyebrow="Contact"
        title="Get in touch"
        description="Add your real contact details in src/data/content.ts."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-xl">
          <div className="p-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              <Mail size={18} className="text-[color:var(--color-violet)]" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              <Phone size={18} className="text-[color:var(--color-violet)]" />
              {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-sm text-[color:var(--color-muted)]">
              <MapPin size={18} className="text-[color:var(--color-violet)]" />
              {profile.location}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
