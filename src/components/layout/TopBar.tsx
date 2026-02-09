export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className="brand-mark text-lg sm:text-xl"
        >
          <span className="brand-mark-text">
            RHYS FARRANT
          </span>
        </a>
      </div>
    </header>
  )
}
