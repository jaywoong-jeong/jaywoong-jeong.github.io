'use client'

import { useState } from 'react'
import { PUBLICATIONS } from '@/app/data'
import type { Publication } from '@/app/data'

const publications = PUBLICATIONS.filter((publication) => publication.category)

const groups = [
  { label: 'Peer-Reviewed Publications', category: 'peer-reviewed' },
  { label: 'Preprints', category: 'preprint' },
] as const

function Authors({ publication }: { publication: Publication }) {
  return (
    <>
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
    </>
  )
}

function PaperLink({ publication }: { publication: Publication }) {
  if (!publication.link) return null
  return (
    <a
      href={publication.link}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
    >
      [paper]
    </a>
  )
}

function Grouped({
  children,
}: {
  children: (publication: Publication) => React.ReactNode
}) {
  return (
    <div className="space-y-9">
      {groups.map((group) => {
        const items = publications.filter(
          (publication) => publication.category === group.category,
        )
        return (
          <section key={group.category}>
            <h3 className="mb-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {group.label}
            </h3>
            <ul className="space-y-5">{items.map(children)}</ul>
          </section>
        )
      })}
    </div>
  )
}

function StackedVariant() {
  return (
    <Grouped>
      {(publication) => (
        <li key={publication.id} className="text-sm leading-relaxed">
          <p className="leading-snug font-medium text-zinc-900 dark:text-zinc-100">
            {publication.title}. <PaperLink publication={publication} />
          </p>
          <p className="mt-0.5 text-zinc-500 italic dark:text-zinc-400">
            {publication.venue}
          </p>
          <p className="mt-0.5 text-zinc-600 dark:text-zinc-400">
            <Authors publication={publication} />
          </p>
          <p className="mt-0.5 text-xs text-zinc-400 tabular-nums">
            {publication.year}
          </p>
        </li>
      )}
    </Grouped>
  )
}

function CitationVariant() {
  return (
    <Grouped>
      {(publication) => (
        <li
          key={publication.id}
          className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 text-sm leading-relaxed"
        >
          <span className="text-right text-xs text-zinc-300 dark:text-zinc-600">
            [{publications.indexOf(publication) + 1}]
          </span>
          <p className="text-zinc-600 dark:text-zinc-400">
            <Authors publication={publication} />.{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {publication.title}.
            </span>{' '}
            <span className="italic">{publication.venue}</span>,{' '}
            {publication.year}. <PaperLink publication={publication} />
          </p>
        </li>
      )}
    </Grouped>
  )
}

function VenueFirstVariant() {
  return (
    <Grouped>
      {(publication) => (
        <li key={publication.id} className="text-sm">
          <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
            {publication.venue} · {publication.year}
          </p>
          <p className="mt-1 leading-snug font-medium text-zinc-900 dark:text-zinc-100">
            {publication.title}
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            <Authors publication={publication} />{' '}
            <span className="ml-1 text-zinc-500">
              <PaperLink publication={publication} />
            </span>
          </p>
        </li>
      )}
    </Grouped>
  )
}

function RuledVariant() {
  return (
    <div className="space-y-9">
      {groups.map((group) => {
        const items = publications.filter(
          (publication) => publication.category === group.category,
        )
        return (
          <section key={group.category}>
            <h3 className="border-b border-zinc-300 pb-2 text-sm font-medium text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              {group.label}
            </h3>
            <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {items.map((publication) => (
                <li
                  key={publication.id}
                  className="grid gap-2 py-4 text-sm sm:grid-cols-[minmax(0,1fr)_11rem] sm:gap-6"
                >
                  <div>
                    <p className="leading-snug font-medium text-zinc-900 dark:text-zinc-100">
                      {publication.title}
                    </p>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      <Authors publication={publication} />
                    </p>
                  </div>
                  <div className="text-zinc-500 sm:text-right dark:text-zinc-400">
                    <p>{publication.venue}</p>
                    <p className="mt-1">
                      {publication.year} <PaperLink publication={publication} />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

const variants = [
  {
    id: 'stacked',
    label: 'Stacked',
    description: '현재 구조에 가장 가까운 균형형',
    component: <StackedVariant />,
  },
  {
    id: 'citation',
    label: 'Citation',
    description: '논문 인용 형식처럼 한 문단으로 정리',
    component: <CitationVariant />,
  },
  {
    id: 'venue-first',
    label: 'Venue First',
    description: '풀네임 venue와 workshop을 먼저 강조',
    component: <VenueFirstVariant />,
  },
  {
    id: 'ruled',
    label: 'Ruled',
    description: 'Akaash의 스캔하기 쉬운 행 구조를 참고한 버전',
    component: <RuledVariant />,
  },
]

export default function PublicationVariantsPage() {
  const [active, setActive] = useState('stacked')
  const selected = variants.find((variant) => variant.id === active)!

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Publication Variants
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          모든 안에서 저자 순서와 전체 venue 명칭은 동일하게 유지됩니다.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            type="button"
            onClick={() => setActive(variant.id)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              active === variant.id
                ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                : 'border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-400'
            }`}
          >
            {variant.label}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="font-medium text-zinc-900 dark:text-zinc-100">
          {selected.label}
        </h2>
        <p className="mt-1 text-sm text-zinc-500">{selected.description}</p>
      </div>
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7 dark:border-zinc-800 dark:bg-zinc-950">
        {selected.component}
      </div>
    </main>
  )
}
