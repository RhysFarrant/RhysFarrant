export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  logo?: string
  stack: string[]
  highlights: string[]
  liveUrl?: string
  liveLabel?: string
  repoUrl?: string
  featured?: boolean
  wip?: boolean
}

export const projects: Project[] = [
  {
    id: 'solstice',
    name: 'Solstice',
    tagline: 'Personal productivity platform',
    description:
      'A project planning and personal management app designed to help you stay on track with goals, habits, and daily workflows.',
    logo: '/solstice-logo.png',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Goal tracking with streak-based motivation system',
      'Drag-and-drop project boards with custom workflows',
      'Responsive SPA with offline-ready architecture',
    ],
    liveUrl: 'https://solstice-app.com',
    featured: true,
    wip: true,
  },
  {
    id: 'aether',
    name: 'Aether',
    tagline: 'D&D character builder & manager',
    description:
      'A character builder and manager for Dungeons & Dragons 5e with real-time validation, PDF export, and campaign management.',
    logo: '/aether-logo.png',
    stack: ['React', 'Firebase', 'TypeScript', 'PDF Export'],
    highlights: [
      'Full 5e character creation with real-time rule validation',
      'PDF character sheet export matching official layouts',
      'Campaign-level party management and shared resources',
    ],
    liveUrl: 'https://aether-builder.com',
    featured: true,
    wip: true,
  },
  {
    id: 'nightguard',
    name: 'NightGuard',
    tagline: 'Windows desktop app for enforcing nightly PC cutoff times',
    description:
      'A Windows-only desktop app built to help enforce a configured bedtime by tracking the active countdown, persisting session state, and preparing the foundation for reminders and lockout-style enforcement.',
    stack: ['C#', '.NET 8', 'WPF', 'xUnit'],
    highlights: [
      'Desktop app for configuring bedtime targets and active days',
      'Persistent settings and session state stored in AppData',
      'Scheduling and persistence logic covered by unit tests',
    ],
    liveUrl: 'https://github.com/RhysFarrant/NightGuard/releases/tag/1.0',
    liveLabel: 'Release',
    repoUrl: 'https://github.com/RhysFarrant/NightGuard',
    featured: true,
  },
  {
    id: 'labs',
    name: 'Labs',
    tagline: 'Sandbox for rapid prototypes and experiments',
    description:
      'A rolling collection of focused experiments used to explore new ideas, tooling patterns, and implementation approaches before they graduate into full projects.',
    stack: ['TypeScript', 'React', 'Vite', 'Prototyping'],
    highlights: [
      'Short-cycle experiments to validate product and UX ideas quickly',
      'Technical spikes for architecture and integration decisions',
      'Reusable components and patterns extracted for future builds',
    ],
    liveUrl: 'https://labs.rhysfarrant.com',
    featured: true,
    wip: true,
  },
]
