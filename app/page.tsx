'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { ObfuscatedEmailLink } from '@/components/ObfuscatedEmailLink'
import {
  PROJECTS,
  PUBLICATIONS,
  RESEARCH_COLLABORATIONS,
  RESEARCH_EXPERIENCE,
} from './data'

const LINKS = {
  kaist: 'https://www.kaist.ac.kr/en/',
  lids: 'https://lids.mit.edu/',
  ael: 'https://ai-experience-lab.github.io/',
  takyeon: 'https://takyeonlee.com/',
  asuman: 'https://asu.mit.edu/',
}

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.3 }

const textLink =
  'underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100'

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

function Section({
  id,
  title,
  action,
  children,
}: {
  id: string
  title: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <motion.section
      id={id}
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      className="scroll-mt-10"
    >
      <div className="mb-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-lg font-medium sm:text-xl">{title}</h2>
        {action}
      </div>
      {children}
    </motion.section>
  )
}

function InstitutionLogos({
  logos,
}: {
  logos?: { label: string; domain: string; src?: string }[]
}) {
  if (!logos?.length) return null

  return (
    <div className="flex w-16 shrink-0 flex-col gap-2 sm:w-20">
      {logos.map((logo) => (
        <div
          key={`${logo.domain}-${logo.label}`}
          title={logo.label}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-zinc-200/70 sm:h-20 sm:w-20 dark:bg-zinc-900 dark:ring-zinc-700/70"
        >
          <Image
            src={
              logo.src ||
              `https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`
            }
            alt={`${logo.label} logo`}
            width={60}
            height={60}
            className="h-12 w-12 object-contain sm:h-[60px] sm:w-[60px]"
          />
        </div>
      ))}
    </div>
  )
}

function Publications() {
  const selectedPublicationIds = [
    'pub-tides-2026',
    'pub-gaze2prompt-2025',
    'pub-orgprocessgym-2026',
  ]
  const selectedPublications = selectedPublicationIds
    .map((id) => PUBLICATIONS.find((publication) => publication.id === id))
    .filter((publication) => publication !== undefined)

  return (
    <Section
      id="publications"
      title="Selected Publications"
      action={
        <Link
          href="/publications"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          View all publications <span aria-hidden="true">→</span>
        </Link>
      }
    >
      <ul className="space-y-3">
        {selectedPublications.map((publication) => (
          <motion.li
            key={publication.id}
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            whileHover={{ y: -2 }}
            className="group relative rounded-2xl bg-white p-4 text-sm leading-relaxed ring-1 ring-zinc-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm hover:ring-zinc-300/80 dark:bg-zinc-950 dark:ring-zinc-800/70 dark:hover:ring-zinc-700"
          >
            <Spotlight
              size={220}
              className="from-zinc-100 via-zinc-100/70 to-transparent dark:from-zinc-800 dark:via-zinc-900 dark:to-transparent"
            />
            <div className="relative z-10 min-w-0 py-0.5">
              <p className="text-base leading-snug text-zinc-900 dark:text-zinc-100">
                <span className="font-medium">{publication.title}.</span>
              </p>
              <p className="mt-1 text-zinc-500 italic dark:text-zinc-400">
                <VenueWithAward venue={publication.venue} /> ·{' '}
                {publication.year}
              </p>
              <p className="mt-0.5 text-zinc-600 dark:text-zinc-400">
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
                      className={`${textLink} text-zinc-600 dark:text-zinc-400 ${
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
                      className={`${textLink} text-zinc-600 dark:text-zinc-400`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}

function SelectedProjects() {
  const selectedProjects = PROJECTS.filter((project) => project.selected)

  return (
    <Section
      id="selected-projects"
      title="Selected Projects"
      action={
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          View all projects <span aria-hidden="true">→</span>
        </Link>
      }
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {selectedProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            whileHover={{ y: -3 }}
            className="group overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200/60 transition-shadow hover:shadow-md dark:bg-zinc-950 dark:ring-zinc-800/70"
          >
            <Link href={`/projects/${project.id}`} className="block h-full">
              <div className="relative aspect-[16/9] overflow-hidden bg-white dark:bg-white">
                <Image
                  src={project.image || '/next.svg'}
                  alt={project.imageAlt || project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="leading-snug font-medium text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <span className="shrink-0 text-xs text-zinc-400 tabular-nums">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="max-w-5xl space-y-4 text-zinc-600 dark:text-zinc-400">
          <p>
            Hello! I&apos;m an undergraduate student at{' '}
            <a href={LINKS.kaist} className={textLink}>
              KAIST
            </a>{' '}
            affiliated with{' '}
            <a
              href="https://sts.kaist.ac.kr/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline outline-none"
              aria-label="Learn about KAIST School of Transdisciplinary Studies"
            >
              <abbr
                title="School of Transdisciplinary Studies"
                className="text-zinc-900 no-underline decoration-zinc-300 underline-offset-4 group-hover:underline group-focus:underline dark:text-zinc-100 dark:decoration-zinc-700"
              >
                STS
              </abbr>
              <span
                aria-hidden="true"
                className="inline-block max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-28 group-hover:opacity-100 group-focus:max-w-28 group-focus:opacity-100"
              >
                <span className="ml-1 text-xs text-zinc-400">
                  (What is STS?)
                </span>
              </span>
            </a>{' '}
            and the Math Department, with a minor in Design. My work sits at
            the intersection of social AI, multi-agent systems, and
            human-computer interaction. I am especially interested in how AI
            systems can understand people and groups—and how they can augment
            human creativity, collaboration, and decision-making.
          </p>
          <p>
            I currently conduct research with{' '}
            <a href={LINKS.asuman} className={textLink}>
              Asuman Özdağlar
            </a>{' '}
            at{' '}
            <a href={LINKS.lids} className={textLink}>
              MIT LIDS
            </a>
            , with{' '}
            <a href={LINKS.takyeon} className={textLink}>
              Tak Yeon Lee
            </a>{' '}
            at{' '}
            <a href={LINKS.ael} className={textLink}>
              AI Experience Lab
            </a>
            . Across these collaborations, I combine computational methods,
            system building, and human-centered evaluation to study how
            intelligent systems behave within real social and organizational
            contexts. Outside of research, I secretly pursue theater and
            stand-up comedy.{' '}
            <Link href="/artist" className={textLink}>
              Check out my creative page
            </Link>{' '}
            to see this side of me.
          </p>
          <p>
            I also keep a{' '}
            <a
              href="#"
              aria-disabled="true"
              title="Research manifesto coming soon"
              onClick={(event) => event.preventDefault()}
              className={`${textLink} cursor-not-allowed`}
            >
              research manifesto
            </a>{' '}
            on the research I want to pursue, the problems I hope to solve, and
            the kind of life I want to live.
          </p>
        </div>
      </motion.section>

      <Publications />

      <Section id="research-experience" title="Research Experience">
        <ol className="space-y-2">
          {RESEARCH_EXPERIENCE.map((experience) => (
            <motion.li
              key={experience.id}
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
              whileHover={{ y: -2 }}
              className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200/60 transition-shadow hover:shadow-md dark:bg-zinc-950 dark:ring-zinc-800/70"
            >
              <Spotlight
                size={180}
                className="from-zinc-100 via-zinc-100/70 to-transparent dark:from-zinc-800 dark:via-zinc-900 dark:to-transparent"
              />
              <div className="relative z-10 flex items-start gap-4">
                <InstitutionLogos logos={experience.logos} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                        {experience.link ? (
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
                          >
                            {experience.institution} ↗
                          </a>
                        ) : (
                          experience.institution
                        )}
                      </h3>
                      <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                        {experience.role}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm text-zinc-400 tabular-nums">
                      {experience.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                    {experience.mentors && experience.mentors.length > 0 && (
                      <>
                        Mentor{experience.mentors.length > 1 ? 's' : ''}:{' '}
                        {experience.mentors.map((mentor, index) => (
                          <span key={`${experience.id}-${mentor.name}`}>
                            {mentor.link ? (
                              <a
                                href={mentor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={textLink}
                              >
                                {mentor.name}
                              </a>
                            ) : (
                              mentor.name
                            )}
                            {index < experience.mentors!.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                        <span className="mx-1.5 text-zinc-300 dark:text-zinc-700">
                          |
                        </span>
                      </>
                    )}
                    Advisor:{' '}
                    {experience.advisor.link ? (
                      <a
                        href={experience.advisor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                      >
                        Prof. {experience.advisor.name}
                      </a>
                    ) : (
                      <>Prof. {experience.advisor.name}</>
                    )}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {experience.summary}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </Section>

      <Section id="research-collaborations" title="Research Collaborations">
        <div className="space-y-2">
          {RESEARCH_COLLABORATIONS.map((collaboration) => (
            <motion.article
              key={collaboration.id}
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
              whileHover={{ y: -2 }}
              className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200/60 transition-shadow hover:shadow-md dark:bg-zinc-950 dark:ring-zinc-800/70"
            >
              <Spotlight
                size={180}
                className="from-zinc-100 via-zinc-100/70 to-transparent dark:from-zinc-800 dark:via-zinc-900 dark:to-transparent"
              />
              <div className="relative z-10 flex items-start gap-4">
                <InstitutionLogos logos={collaboration.logos} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="leading-snug font-medium text-zinc-900 dark:text-zinc-100">
                      {collaboration.title}
                    </h3>
                    {collaboration.period && (
                      <span className="shrink-0 text-sm text-zinc-400 tabular-nums">
                        {collaboration.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {collaboration.affiliation} · With{' '}
                    {collaboration.collaborators.join(', ')}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {collaboration.summary}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <SelectedProjects />

      <Section id="contact" title="Connect">
        <p className="text-zinc-600 dark:text-zinc-400">
          Feel free to{' '}
          <ObfuscatedEmailLink className={textLink} label="email me" /> or find
          a time on{' '}
          <a
            href="#"
            aria-disabled="true"
            title="Scheduling link coming soon"
            onClick={(event) => event.preventDefault()}
            className={`${textLink} cursor-not-allowed`}
          >
            Calendly
          </a>
          .
        </p>
      </Section>
    </motion.main>
  )
}
