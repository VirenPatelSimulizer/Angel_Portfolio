import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import PlaceholderBadge from '../components/PlaceholderBadge'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <PageTransition>
      <PageHero
        icon={Trophy}
        eyebrow="Achievements"
        title="Awards & recognition"
        description="Competitions, certificates, scholarships, and honors — add them here as you earn them."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`relative p-6 rounded-2xl border ${
                a.placeholder
                  ? 'border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface)]/20'
                  : 'border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[color:var(--color-pink)]/10 flex items-center justify-center mb-4">
                <Award size={18} className="text-[color:var(--color-pink)]" />
              </div>

              <h3 className="font-display font-semibold text-lg mb-1.5">{a.title}</h3>
              {a.placeholder && <div className="mb-2"><PlaceholderBadge /></div>}
              <div className="flex items-center gap-1.5 text-xs text-[color:var(--color-pink)] mb-3">
                {a.org && <span>{a.org}</span>}
                {a.period && <span className="text-[color:var(--color-muted)]">· {a.period}</span>}
              </div>
              {a.description && (
                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{a.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
