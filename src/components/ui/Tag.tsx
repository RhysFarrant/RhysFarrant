type TagProps = {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-md bg-surface-hover px-2 py-0.5 text-xs text-text-muted">
      {label}
    </span>
  )
}
