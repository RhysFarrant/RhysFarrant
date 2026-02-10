import { useState } from 'react'
import PanelNav, { type PanelTab } from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'
import ProjectAccordion from '@/components/project/ProjectAccordion'
import { projects } from '@/data/projects'

const pills = [
  'Java',
  'Kubernetes / OpenShift',
  'CI/CD',
  'React + Vite',
  'REST APIs',
]

const skillColumns = [
  {
    title: 'Core / Professional Skills',
    items: [
      'Java (REST APIs, integrations, backend services)',
      'Apache Camel',
      'Kubernetes & OpenShift',
      'CI/CD pipelines (Bamboo)',
      'API testing & tooling (JUnit, Postman)',
      'Git & version control',
      'Production deployments & release coordination',
      'Technical leadership & environment management',
    ],
  },
  {
    title: 'Self-Directed / Personal Development',
    items: [
      'React 18',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Frontend architecture & component design',
      'SPA routing and state management',
      'Static site deployment (Vercel)',
      'Experimentation with tooling, workflows, and UI patterns',
    ],
  },
  {
    title: 'Additional Languages & Tools',
    items: [
      'Python',
      'C++',
      'C#',
      'Dart / Flutter',
      'HTML / CSS',
    ],
  },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<PanelTab>('work')

  return (
    <div className="page-gradient min-h-screen">
      <TopBar />

      {/* Hero Stage */}
      <section className="hero-gradient relative flex min-h-[50vh] flex-col items-center justify-center px-6 py-4 text-center">
        {/* Eyebrow */}
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-text-muted sm:text-xs">
          Rhys Farrant &middot; Software Developer
        </p>

        {/* Headline */}
        <h1 className="mx-auto mb-6 max-w-2xl text-2xl font-bold leading-[1.2] sm:text-3xl sm:leading-[1.15] lg:text-4xl">
          <span className="text-text-secondary">Professionally focused on building </span>
          Java-based backend systems and integrations.
          <span className="text-text-secondary"> Creatively focused on building modern, deployable web applications with </span>
          React and Vite.
        </h1>

        {/* Pill chips */}
        <div className="mb-2 flex flex-wrap justify-center gap-2">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-border bg-surface/40 px-3.5 py-1 text-[11px] font-medium text-text-secondary sm:text-xs"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Availability line */}
        <p className="text-xs font-medium text-text-primary/90 sm:text-sm">
          London &middot; Backend, Frontend &amp; Integrations
        </p>
      </section>

      {/* Floating Content Panel */}
      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-4 pb-5 sm:-mt-24 sm:px-6 lg:-mt-32">
        <div className="floating-panel overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
          {/* Panel header / nav */}
          <div className="relative">
            <PanelNav activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="panel-scroll h-[560px] overflow-y-auto">
          {activeTab === 'work' && (
            <section id="work" className="px-6 py-6 sm:px-10 sm:py-10">
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                Featured Personal Work
              </h2>
              <p className="mb-8 text-sm text-text-muted">
                Personal projects and professional highlights.
              </p>
              <ProjectAccordion projects={projects} />
            </section>
          )}

          {activeTab === 'about' && (
            <section id="about" className="px-6 py-12 sm:px-10 sm:py-16">
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                Skills Snapshot
              </h2>
              <p className="mb-10 text-sm text-text-muted">
                Professional strengths, self-directed learning focus, and
                additional languages and tools.
              </p>

              <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                {skillColumns.map((col) => (
                  <div key={col.title}>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                      {col.title}
                    </h3>
                    <ul className="space-y-3">
                      {col.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2.5 text-sm text-text-secondary"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-border" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          </div>

          {/* Panel footer */}
          <div className="border-t border-border px-6 py-6 sm:px-10">
            <div className="flex flex-wrap items-center justify-center text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                &copy; {new Date().getFullYear()} Rhys Farrant
              </span>
              <span className="mx-3 text-lg font-bold text-text-muted/80" aria-hidden="true">
                &middot;
              </span>
              <a
                href="https://github.com/rhysfarrant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-text-primary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
                GitHub
              </a>
              <span className="mx-3 text-lg font-bold text-text-muted/80" aria-hidden="true">
                &middot;
              </span>
              <a
                href="https://www.linkedin.com/in/rhys-farrant-0585ab173/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-text-primary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
                LinkedIn
              </a>
              <span className="mx-3 text-lg font-bold text-text-muted/80" aria-hidden="true">
                &middot;
              </span>
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-text-primary"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
