import { SITE_OWNER } from '@/lib/constants'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

function getLastUpdated(): string {
  const roots = [
    'app',
    'components',
    'lib',
  ]

  function latestMTimeInDir(dir: string): number {
    let latest = 0
    const abs = path.join(process.cwd(), dir)
    if (!fs.existsSync(abs)) return latest
    const entries = fs.readdirSync(abs, { withFileTypes: true })
    for (const entry of entries) {
      const p = path.join(abs, entry.name)
      try {
        const stat = fs.statSync(p)
        if (entry.isDirectory()) {
          latest = Math.max(latest, latestMTimeInDir(path.join(dir, entry.name)))
        } else {
          latest = Math.max(latest, stat.mtimeMs)
        }
      } catch {}
    }
    return latest
  }

  try {
    const latest = Math.max(...roots.map(latestMTimeInDir))
    if (latest > 0) {
      const d = new Date(latest)
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  } catch {}

  try {
    const gitDate = execSync("git log -1 --format=%cd --date=format:%B %e, %Y", { encoding: 'utf8' }).trim()
    if (gitDate) return gitDate
  } catch {}

  const now = new Date()
  return now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = getLastUpdated()
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          <span>© {currentYear} {SITE_OWNER}</span>
          <span className="mx-1">•</span>
          <span>
            Adapted from{' '}
            <a href="https://github.com/ibelick/nim" target="_blank" className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100">
              Nim
            </a>
          </span>
          <span className="mx-1">•</span>
          <span>Last updated {lastUpdated}</span>
        </div>
      </div>
    </footer>
  )
}
