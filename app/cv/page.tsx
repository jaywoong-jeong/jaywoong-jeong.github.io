import {
  INDUSTRY_EXPERIENCE,
  LEADERSHIP_ACTIVITIES,
  PUBLICATIONS,
  RESEARCH_COLLABORATIONS,
  RESEARCH_EXPERIENCE,
} from '../data'
import { ObfuscatedEmailLink } from '@/components/ObfuscatedEmailLink'

export const metadata = {
  title: 'CV',
  description: 'Curriculum vitae of Jaywoong Jeong.',
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="mb-5 border-b border-zinc-200 pb-2 text-sm font-semibold tracking-[0.12em] text-zinc-950 uppercase dark:border-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function CVPage() {
  const publications = PUBLICATIONS.filter(
    (publication) => publication.category,
  )

  return (
    <main className="max-w-4xl space-y-12">
      <header>
        <p className="text-xs font-medium tracking-[0.16em] text-zinc-400 uppercase">
          Curriculum Vitae
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Jaywoong Jeong
        </h1>
        <ObfuscatedEmailLink className="mt-3 text-sm text-zinc-500 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-400 dark:decoration-zinc-700" />
      </header>

      <Section title="Education">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-8">
          <div>
            <h3 className="font-medium text-zinc-950 dark:text-zinc-100">
              Korea Advanced Institute of Science and Technology (KAIST)
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              B.S. studies in STS and Mathematical Sciences · Minor in Design
            </p>
          </div>
          <span className="shrink-0 text-sm text-zinc-400">2022 – Present</span>
        </div>
      </Section>

      <Section title="Research Experience">
        <ol className="space-y-6">
          {RESEARCH_EXPERIENCE.map((experience) => (
            <li key={experience.id}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-8">
                <div>
                  <h3 className="font-medium text-zinc-950 dark:text-zinc-100">
                    {experience.institution}
                  </h3>
                  <p className="text-sm text-zinc-500">{experience.role}</p>
                </div>
                <span className="shrink-0 text-sm text-zinc-400">
                  {experience.period}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {experience.summary}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Research Collaborations">
        <ul className="space-y-5">
          {RESEARCH_COLLABORATIONS.map((collaboration) => (
            <li key={collaboration.id}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-8">
                <h3 className="font-medium text-zinc-950 dark:text-zinc-100">
                  {collaboration.title}
                </h3>
                <span className="shrink-0 text-sm text-zinc-400">
                  {collaboration.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                {collaboration.affiliation}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Publications">
        <ol className="space-y-5">
          {publications.map((publication) => (
            <li key={publication.id} className="text-sm leading-relaxed">
              <h3 className="font-medium text-zinc-950 dark:text-zinc-100">
                {publication.title}
              </h3>
              <p className="mt-0.5 text-zinc-600 dark:text-zinc-400">
                {publication.authors.join(', ')}
              </p>
              <p className="mt-0.5 text-zinc-500 italic">
                {publication.venue} · {publication.year}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Industry Experience">
        <ul className="space-y-4">
          {INDUSTRY_EXPERIENCE.map((experience) => (
            <li
              key={experience.id}
              className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-8"
            >
              <div>
                <h3 className="font-medium text-zinc-950 dark:text-zinc-100">
                  {experience.company}
                </h3>
                <p className="text-sm text-zinc-500">{experience.title}</p>
              </div>
              <span className="shrink-0 text-sm text-zinc-400">
                {experience.start} – {experience.end}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Leadership & Activities">
        <ul className="space-y-4">
          {LEADERSHIP_ACTIVITIES.map((activity) => (
            <li key={activity.id}>
              <h3 className="font-medium text-zinc-950 dark:text-zinc-100">
                {activity.organization}
              </h3>
              <p className="text-sm text-zinc-500">{activity.role}</p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
