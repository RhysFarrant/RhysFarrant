import { useState } from 'react'

export type PanelTab = 'work' | 'about'

type PanelNavProps = {
  activeTab: PanelTab
  onTabChange: (tab: PanelTab) => void
}

const navItems: { label: string; tab: PanelTab }[] = [
  { label: 'Work', tab: 'work' },
  { label: 'About', tab: 'about' },
]

export default function PanelNav({ activeTab, onTabChange }: PanelNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-8">
      {/* Left mark */}
      <a
        href="#"
        className="brand-mark text-base sm:text-lg"
      >
        <span className="brand-mark-text">
          Rhys Farrant
        </span>
      </a>

      {/* Mobile toggle */}
      <button
        className="flex flex-col gap-[5px] md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span
          className={`block h-0.5 w-5 bg-text-muted transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
        />
        <span
          className={`block h-0.5 w-5 bg-text-muted transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block h-0.5 w-5 bg-text-muted transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
        />
      </button>

      {/* Right nav links */}
      <nav
        className={`
          max-md:absolute max-md:inset-x-0 max-md:top-full max-md:z-50
          max-md:border-b max-md:border-border max-md:bg-panel max-md:px-6 max-md:py-4
          max-md:transition-all max-md:duration-300
          ${menuOpen ? 'max-md:visible max-md:translate-y-0 max-md:opacity-100' : 'max-md:invisible max-md:-translate-y-2 max-md:opacity-0'}
          md:flex md:items-center md:gap-1
        `}
      >
        {navItems.map((item) => (
          <button
            type="button"
            key={item.label}
            onClick={() => {
              onTabChange(item.tab)
              setMenuOpen(false)
            }}
            className={`block rounded-md px-3 py-2 text-sm transition-colors md:py-1.5 ${
              activeTab === item.tab
                ? 'bg-surface text-text-primary'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            {item.label}
          </button>
        ))}
        <a
          href="https://github.com/rhysfarrant"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-1.5 text-sm text-text-muted transition-colors hover:border-text-muted hover:text-text-primary md:ml-2 md:mt-0"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
          GitHub
        </a>
      </nav>
    </div>
  )
}
