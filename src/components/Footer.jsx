export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-text-secondary">Mohammed Ghandor</span>. All
          rights reserved.
        </p>
        <p className="text-text-muted text-xs">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
