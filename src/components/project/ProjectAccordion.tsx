import { type KeyboardEvent, useState } from 'react'
import type { Project } from '@/data/projects'
import Tag from '@/components/ui/Tag'

type ProjectAccordionProps = {
  projects: Project[]
}

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId(openId === id ? null : id)
  }

  function handleRowKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
    id: string,
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle(id)
    }
  }

  return (
    <div className="divide-y divide-border">
      {projects.map((project) => {
        const isOpen = openId === project.id

        return (
          <div key={project.id}>
            <div
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`project-panel-${project.id}`}
              onClick={() => toggle(project.id)}
              onKeyDown={(event) => handleRowKeyDown(event, project.id)}
              className="group flex w-full cursor-pointer items-center justify-between py-6 text-left transition-colors hover:text-accent"
            >
              <div className="flex items-center gap-4">
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="h-8 w-8 rounded-lg"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-elevated text-text-muted"
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
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </span>
                )}
                <div>
                  <div className="flex items-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        onKeyDown={(event) => event.stopPropagation()}
                        className="text-lg font-semibold text-text-primary transition-colors hover:text-accent"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <span className="text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
                        {project.name}
                      </span>
                    )}
                    {project.wip && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                        WIP
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-text-muted">
                    {project.tagline}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden gap-1.5 md:flex">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Tag key={tech} label={tech} />
                  ))}
                </div>
                <svg
                  className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            <div
              id={`project-panel-${project.id}`}
              className={`accordion-content ${isOpen ? 'open' : ''}`}
            >
              <div>
                <div className="pb-6">
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5 md:hidden">
                    {project.stack.map((tech) => (
                      <Tag key={tech} label={tech} />
                    ))}
                  </div>

                  {project.highlights.length > 0 && (
                    <ul className="mb-5 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm text-text-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-text-primary"
                      >
                        Live
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                      >
                        Source
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
