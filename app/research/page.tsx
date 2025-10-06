import Link from 'next/link'
import { RESEARCH_ITEMS } from '../data'

export const metadata = {
  title: 'Research',
}

export default function ResearchIndex() {
  return (
    <div>
      <h1>Research</h1>
      <p className="text-zinc-600 dark:text-zinc-400">Ongoing research themes and projects.</p>
      <ul className="mt-6 space-y-3">
        {RESEARCH_ITEMS.map((item) => (
          <li key={item.id} className="rounded-xl bg-white p-2 ring-1 ring-zinc-200/60 dark:bg-zinc-950 dark:ring-zinc-800/60">
            <Link href={item.link} className="block">
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</span>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{item.status}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}



