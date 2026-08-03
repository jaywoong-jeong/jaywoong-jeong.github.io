'use client'

import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { PUBLICATIONS, type Publication } from '../data'

type ScopeFilter =
  | 'all'
  | 'selected'
  | 'first-author'
  | 'awards'
  | 'peer-reviewed'
  | 'preprint'
type ThemeFilter =
  | 'all'
  | 'hci'
  | 'social-simulation'
  | 'group-dynamics'
  | 'computational-social-science'
  | 'multi-agent'

const scopeFilters: { id: ScopeFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'selected', label: 'Selected' },
  { id: 'first-author', label: 'First Author' },
  { id: 'awards', label: 'Awards' },
  { id: 'peer-reviewed', label: 'Peer-reviewed' },
  { id: 'preprint', label: 'Preprints' },
]

const themeFilters: {
  id: ThemeFilter
  label: string
  keywords: string[]
}[] = [
  { id: 'all', label: 'All Themes', keywords: [] },
  {
    id: 'hci',
    label: 'HCI',
    keywords: [
      'hci',
      'creativity support',
      'music collaboration',
      'multimodal',
      'eye tracking',
    ],
  },
  {
    id: 'social-simulation',
    label: 'Social Simulation',
    keywords: [
      'social simulation',
      'llm simulation',
      'llm personas',
      'political simulation',
    ],
  },
  {
    id: 'group-dynamics',
    label: 'Group Dynamics',
    keywords: [
      'group dynamics',
      'social dynamics',
      'multi-party interaction',
      'music collaboration',
      'organizational ai',
    ],
  },
  {
    id: 'computational-social-science',
    label: 'Computational Social Science',
    keywords: [
      'computational social science',
      'policy auditing',
      'political simulation',
      'algorithmic fairness',
      'voter',
    ],
  },
  {
    id: 'multi-agent',
    label: 'Multi-Agent Systems',
    keywords: [
      'multi-agent systems',
      'multi-agent',
      'marl',
      'llm agents',
      'organizational ai',
    ],
  },
]

const filterButton = (active: boolean) =>
  `rounded-full px-3 py-1.5 text-sm transition-colors ${
    active
      ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950'
      : 'bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800 dark:hover:bg-zinc-800'
  }`

function VenueWithAward({ venue }: { venue?: string }) {
  const match = venue?.match(
    /(Best Poster Award|Grand Prix|Spotlight(?:\s*\([^)]*\))?)/i,
  )

  if (!venue || !match || match.index === undefined) return venue

  return (
    <>
      {venue.slice(0, match.index)}
      <span aria-label="Award" title="Award">
        🏆{' '}
      </span>
      {venue.slice(match.index)}
    </>
  )
}

function publicationText(publication: Publication) {
  return [
    publication.title,
    publication.venue,
    publication.year,
    publication.status,
    ...(publication.authors || []),
    ...(publication.tags || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

function matchesScope(publication: Publication, scope: ScopeFilter) {
  if (scope === 'all') return true
  if (scope === 'selected') return publication.selected
  if (scope === 'first-author') {
    return publication.authors[0]?.replace(/[\*†]/g, '') === 'Jaywoong Jeong'
  }
  if (scope === 'awards') {
    return /award|grand prix|spotlight/.test(publicationText(publication))
  }
  return publication.category === scope
}

export default function PublicationsPage() {
  const [scope, setScope] = useState<ScopeFilter>('all')
  const [theme, setTheme] = useState<ThemeFilter>('all')
  const [query, setQuery] = useState('')

  const allPublications = useMemo(
    () => PUBLICATIONS.filter((publication) => publication.category),
    [],
  )

  const publications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const selectedTheme = themeFilters.find((item) => item.id === theme)

    return allPublications
      .filter((publication) => matchesScope(publication, scope))
      .filter((publication) => {
        if (theme === 'all' || !selectedTheme) return true
        const text = publicationText(publication)
        return selectedTheme.keywords.some((keyword) => text.includes(keyword))
      })
      .filter((publication) => {
        if (!normalizedQuery) return true
        return publicationText(publication).includes(normalizedQuery)
      })
  }, [allPublications, query, scope, theme])

  return (
    <main>
      <section className="mb-9">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Publications
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Peer-reviewed publications, workshop papers, posters, and preprints.
        </p>
      </section>

      <section className="mb-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-medium text-zinc-900 dark:text-zinc-100">
            Filters
          </h2>
          <label className="relative block sm:w-72">
            <span className="sr-only">Search publications</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search title, author, or venue"
              className="w-full rounded-full bg-white px-4 py-2 text-sm text-zinc-900 ring-1 ring-zinc-200 transition outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:focus:ring-zinc-600"
            />
          </label>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase">
              Filter by
            </h3>
            <div className="flex flex-wrap gap-2">
              {scopeFilters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={scope === item.id}
                  onClick={() => setScope(item.id)}
                  className={filterButton(scope === item.id)}
                >
                  {item.label} (
                  {
                    allPublications.filter((publication) =>
                      matchesScope(publication, item.id),
                    ).length
                  }
                  )
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase">
              Theme
            </h3>
            <div className="flex flex-wrap gap-2">
              {themeFilters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={theme === item.id}
                  onClick={() => setTheme(item.id)}
                  className={filterButton(theme === item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <p className="mb-4 text-sm text-zinc-400">
        {publications.length} publication{publications.length === 1 ? '' : 's'}
      </p>

      <motion.ul layout className="space-y-4">
        {publications.map((publication) => (
          <motion.li
            layout
            key={publication.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="group rounded-2xl bg-white p-4 ring-1 ring-zinc-200/60 transition-shadow hover:shadow-md dark:bg-zinc-950 dark:ring-zinc-800/70"
          >
            <div className="min-w-0 text-sm leading-relaxed">
              <p className="text-base leading-snug font-medium text-zinc-900 dark:text-zinc-100">
                {publication.title}.
              </p>
              <p className="mt-1.5 text-zinc-500 italic dark:text-zinc-400">
                <VenueWithAward venue={publication.venue} /> ·{' '}
                {publication.year}
              </p>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                {publication.authors.map((author, index) => (
                  <span key={`${publication.id}-${author}-${index}`}>
                    <span
                      className={
                        author === 'Jaywoong Jeong'
                          ? 'font-medium text-zinc-900 dark:text-zinc-100'
                          : undefined
                      }
                    >
                      {author}
                    </span>
                    {index < publication.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              {(publication.link || publication.links?.length) && (
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                  {publication.link && (
                    <a
                      href={publication.link}
                      target={publication.link === '#' ? undefined : '_blank'}
                      rel={
                        publication.link === '#'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      aria-disabled={
                        publication.link === '#' ? 'true' : undefined
                      }
                      title={
                        publication.link === '#'
                          ? 'Paper coming soon'
                          : undefined
                      }
                      onClick={
                        publication.link === '#'
                          ? (event) => event.preventDefault()
                          : undefined
                      }
                      className={`text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100 ${
                        publication.link === '#' ? 'cursor-not-allowed' : ''
                      }`}
                    >
                      Paper
                    </a>
                  )}
                  {publication.links?.map((link) => (
                    <a
                      key={`${publication.id}-${link.label}`}
                      href={link.url}
                      target={
                        link.url.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        link.url.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {publications.length === 0 && (
        <p className="rounded-2xl bg-zinc-50 p-8 text-center text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
          No publications match this filter.
        </p>
      )}
    </main>
  )
}
