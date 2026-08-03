'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { PROJECTS } from '../data'

type Filter =
  | 'all'
  | 'selected'
  | 'design'
  | 'strategy'
  | 'product'
  | 'research'

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'selected', label: 'Selected' },
  { id: 'design', label: 'Design' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'product', label: 'Product' },
  { id: 'research', label: 'Research' },
]

const contextLabels = {
  course: 'Coursework',
  competition: 'Competition',
  organization: 'Organization',
  company: 'Company',
}

export function ProjectsClient() {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const projects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return [...PROJECTS]
      .sort((a, b) => Number(b.year) - Number(a.year))
      .filter((project) => {
        if (filter === 'selected') return project.selected
        if (filter === 'all') return true
        return project.types.includes(filter)
      })
      .filter((project) => {
        if (!normalizedQuery) return true
        return [
          project.name,
          project.description,
          project.context.name,
          project.context.code,
          ...project.types,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      })
  }, [filter, query])

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                filter === item.id
                  ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <label className="relative block sm:w-72">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
            className="w-full rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-900 ring-zinc-300 transition outline-none focus:ring-2 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700"
          />
        </label>
      </div>

      <p className="mb-4 text-sm text-zinc-400">
        {projects.length} project{projects.length === 1 ? '' : 's'}
      </p>

      <motion.ul layout className="space-y-4">
        {projects.map((project) => (
          <motion.li
            layout
            key={project.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative rounded-2xl bg-white p-2 ring-1 ring-zinc-200/60 transition-shadow hover:shadow-md hover:ring-zinc-300 dark:bg-zinc-950 dark:ring-zinc-800/60 dark:hover:ring-zinc-700"
          >
            <Link
              href={`/projects/${project.id}`}
              className="absolute inset-0 z-10 rounded-2xl"
              aria-label={`View ${project.name} project details`}
            />
            <div className="relative flex flex-col items-stretch gap-3 p-2 sm:flex-row sm:gap-4">
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200/60 sm:h-28 sm:w-40 dark:bg-white dark:ring-zinc-800/60">
                <Image
                  src={project.image || '/next.svg'}
                  alt={project.imageAlt || project.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>
              <div className="min-w-0 flex-1 py-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="leading-snug font-medium text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h2>
                  <span className="shrink-0 text-xs text-zinc-400 tabular-nums">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {contextLabels[project.context.kind]}
                  </span>
                  {project.types.map((type) => (
                    <span
                      key={`${project.id}-${type}`}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 capitalize dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {type}
                    </span>
                  ))}
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {project.year}
                  </span>
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="relative z-20 mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {project.links.map((link, index) => (
                      <a
                        key={`${project.id}-link-${index}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {projects.length === 0 && (
        <p className="rounded-2xl bg-zinc-50 p-8 text-center text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
          No projects match this filter.
        </p>
      )}
    </>
  )
}
