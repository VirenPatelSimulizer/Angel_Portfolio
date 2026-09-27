export const profile = {
  name: 'Angel Singh',
  tagline: 'Class 12 (Biology, Chemistry & Physics) · Seth M.R. Jaipuria School',
  location: 'India',
  bio: "This is your bio. Write a couple of sentences about who you are, what you're interested in, and what you're aiming for next — a course, a college, a skill you're building.",
  email: 'you@example.com',
  phone: '+91-00000-00000',
  social: {
    linkedin: '',
    instagram: '',
  },
}

export type PortfolioItem = {
  title: string
  org?: string
  period?: string
  points: string[]
  placeholder?: boolean
}

export const portfolio: PortfolioItem[] = [
  {
    title: 'Add a school, activity, or role',
    org: 'Organization / School name',
    period: 'Month Year – Month Year',
    points: [
      'Describe what you did in one line',
      'Add another highlight or responsibility here',
    ],
    placeholder: true,
  },
  {
    title: 'Add an internship, volunteering stint, or club position',
    org: 'Organization name',
    period: 'Month Year – Month Year',
    points: [
      'What did you contribute or learn?',
      'Any measurable outcome? (e.g. helped organize an event for 100 people)',
    ],
    placeholder: true,
  },
  {
    title: 'AI Tools Workshop',
    org: 'Be10x',
    period: 'Issued May 2026',
    points: [
      'Completed a workshop on practical, hands-on use of AI tools',
    ],
  },
]

export type Project = {
  title: string
  meta?: string
  description: string
  link?: string
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    title: 'Project One',
    meta: 'Add tools/tech used · duration',
    description: 'Describe what you built, why you built it, and what problem it solved. Keep it short and specific.',
    placeholder: true,
  },
  {
    title: 'Project Two',
    meta: 'Add tools/tech used · duration',
    description: 'A second project — this could be a school assignment, a personal project, or something you built for fun.',
    placeholder: true,
  },
  {
    title: 'Project Three',
    meta: 'Add tools/tech used · duration',
    description: 'Add a link to a demo, GitHub repo, or write-up once it is ready.',
    link: '',
    placeholder: true,
  },
]

export type Achievement = {
  title: string
  org?: string
  period?: string
  description?: string
  placeholder?: boolean
}

export const achievements: Achievement[] = [
  {
    title: 'School Topper Award',
    org: 'Seth M.R. Jaipuria School',
    period: '2025',
    description: 'Awarded for topping the school academically.',
  },
  {
    title: 'Add a certificate',
    org: 'Issuing platform / body',
    period: 'Year',
    description: 'What skill or knowledge did it certify?',
    placeholder: true,
  },
  {
    title: 'Add a scholarship, honor, or recognition',
    org: 'Awarding organization',
    period: 'Year',
    description: 'What was it recognizing?',
    placeholder: true,
  },
]

export const skills = {
  technical: ['Add a skill', 'Add a skill', 'Add a skill'],
  interests: ['Add an interest', 'Add an interest', 'Add an interest'],
}

export const education = [
  {
    degree: 'Biology, Chemistry & Physics (PCB)',
    school: 'Seth M.R. Jaipuria School',
    period: 'Sep 2023 – Mar 2025',
  },
]

export type NavItem = { path: string; label: string }

export const nav: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/projects', label: 'Projects' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
]
