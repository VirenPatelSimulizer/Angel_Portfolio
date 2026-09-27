import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import PlaceholderBadge from '../components/PlaceholderBadge'
import { portfolio } from '../data/content'

export default function Portfolio() {
  return (
    <PageTransition>
      <PageHero
        icon={Briefcase}
        eyebrow="Portfolio"
        title="Experience & activities"
        description="School activities, internships, volunteering, and courses — add your timeline here."
      />

      <section className="pb-24 md:pb-32">
        <div className="section-container relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--color-violet)] via-[color:var(--color-pink)] to-transparent md:left-[23px]" />

          <div className="space-y-10">
            {portfolio.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 md:pl-16"
              >
                <div className="absolute left-2 top-1 w-6 h-6 rounded-full bg-[color:var(--color-bg)] border-2 border-[color:var(--color-violet)] flex items-center justify-center md:left-2.5">
                  <Briefcase size={12} className="text-[color:var(--color-violet)]" />
                </div>

                <div
                  className={`p-6 rounded-2xl border transition-colors ${
                    exp.placeholder
                      ? 'border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface)]/20'
                      : 'border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 hover:border-[color:var(--color-violet)]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                    {exp.placeholder && <PlaceholderBadge />}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[color:var(--color-pink)] mb-4">
                    {exp.org && <span>{exp.org}</span>}
                    {exp.period && <span className="text-[color:var(--color-muted)]">· {exp.period}</span>}
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="text-sm text-[color:var(--color-muted)] leading-relaxed flex gap-2">
                        <span className="text-[color:var(--color-violet)] mt-1.5">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
