import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PROJECTS } from '@/app/data'

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id)
  if (!project) return notFound()

  return (
    <main className="prose prose-gray mt-24 pb-20 dark:prose-invert">
      <Link href="/" className="no-underline">
        ← Back
      </Link>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <div className="mt-2 flex flex-wrap gap-1">
        {(() => {
          const mapColor: Record<string, string> = {
            course: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
            competition: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
            company: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
            organization: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
          }
          const labelMap: Record<string, string> = {
            course: 'Coursework',
            competition: 'Competition',
            company: 'Company',
            organization: 'Organization',
          }
          const cls = mapColor[project.context.kind] || 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
          return (
            <span className={`rounded-full px-2 py-0.5 text-xs ${cls}`}>{labelMap[project.context.kind]}</span>
          )
        })()}
        {project.types.map((t) => (
          <span key={`${project.id}-type-${t}`} className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700 capitalize dark:bg-blue-900/30 dark:text-blue-300">{t}</span>
        ))}
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">{project.year}</span>
      </div>

      {project.links && project.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map((l, idx) => (
            <a
              key={`${project.id}-detail-link-${idx}`}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
              {...(l.kind === 'pdf' ? { download: '' } : {})}
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </main>
  )
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }))
}


