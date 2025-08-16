'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  PUBLICATIONS,
} from './data'

const LINKS = {
  kaist: 'https://www.kaist.ac.kr/en/',
  aix: 'https://ai-experience-lab.github.io/',
  takyeon: 'https://takyeonlee.com/',
  johan: 'https://mitsloan.mit.edu/faculty/directory/johan-chu',
  mitSloan: 'https://mitsloan.mit.edu/',
}

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  // Local filter state and helpers
  const [filter, setFilter] = useState<
    | 'selected'
    | 'course'
    | 'competition'
    | 'organization'
    | 'company'
    | 'design'
    | 'strategy'
    | 'research'
  >('selected')

  function useFilteredProjects() {
    return useMemo(() => {
      return PROJECTS.filter((p) => {
        const isContext = (
          filter === 'course' ||
          filter === 'competition' ||
          filter === 'organization' ||
          filter === 'company'
        )
        if (filter === 'selected') return Boolean(p.selected)
        if (isContext) return p.context.kind === filter
        return p.types.includes(filter)
      })
    }, [filter])
  }

  function ProjectsFilters() {
    const baseBtn = 'inline-flex items-center rounded-full border px-2.5 py-1 text-xs transition-colors'
    const active = 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
    const inactive = 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
    const groupCls = 'flex flex-wrap items-center gap-2'
    const labelCls = 'mr-2 text-xs text-zinc-500'
    const labelMap: Record<string, string> = {
      selected: 'Selected',
      course: 'Coursework',
      competition: 'Competition',
      organization: 'Organization',
      company: 'Company',
      design: 'Design',
      strategy: 'Strategy',
      research: 'Research',
    }

    return (
      <div className="mb-4 space-y-2">
        <div className={groupCls}>
          <span className={labelCls}>Filter</span>
          {(['selected','course','competition','organization','company','design','strategy','research'] as const).map((k) => (
            <button key={k} className={`${baseBtn} ${filter === k ? active : inactive}`} onClick={() => setFilter(k)}>
              {labelMap[k]}
            </button>
          ))}
        </div>
      </div>
    )
  }
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Hello! I'm an undergraduate student studying Mathematics and Industrial Design at{' '}
            <a
              href={LINKS.kaist}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              KAIST
            </a>
            . Currently, I work as a researcher with{' '}
            <a
              href={LINKS.takyeon}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              Tak Yeon Lee
            </a>{' '}
            at the{' '}
            <a
              href={LINKS.aix}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              AI Experience Lab
            </a>{' '}
            and{' '}
            <a
              href={LINKS.johan}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              Johan Chu
            </a>{' '}
            at{' '}
            <a
              href={LINKS.mitSloan}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              MIT Sloan
            </a>
            . My research focuses on exploring the possibilities of technology and AI in creative domains. 
            I work on developing systems that augment human creativity and enable accessible content creation tools. 
            My goal is to expand creative possibilities by making AI-powered creation tools available to everyone.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Projects</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Below is a collection of work I've done through coursework, competitions, companies, and organizations. 
          Click on each card to see detailed information.
        </p>
        {/* Filters */}
        <ProjectsFilters />
        <ul className="space-y-4">
          {useFilteredProjects().map((project) => (
            <li key={project.id} className="group/card rounded-2xl bg-white p-2 ring-1 ring-zinc-200/60 transition-all duration-200 hover:ring-zinc-300/80 dark:bg-zinc-950 dark:ring-zinc-800/60 dark:hover:ring-zinc-700/80">
              <div className="relative">
                <Link 
                  href={`/projects/${project.id}`} 
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.name} project details`}
                />
                <div className="relative z-0 flex items-stretch gap-4 p-2">
                  <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-xl ring-1 ring-zinc-200/60 dark:ring-zinc-800/60">
                    <Image src="/next.svg" alt="placeholder" fill className="object-contain p-6 opacity-70 dark:opacity-60" sizes="(max-width: 768px) 160px, 200px" />
                  </div>
                  <div className="flex min-w-0 flex-col gap-1">
                    <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                      {project.name}
                      <span className="block h-[1px] max-w-0 bg-zinc-900 transition-all duration-200 group-hover/card:max-w-full dark:bg-zinc-50"></span>
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
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
                      <div className="relative z-20 mt-2 flex flex-wrap gap-3">
                        {project.links.map((l, idx) => (
                          <a
                            key={`${project.id}-link-${idx}`}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-20 text-sm text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                            {...(l.kind === 'pdf' ? { download: '' } : {})}
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        id="work"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
                {job.details && job.details.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                    {job.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="research"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Research</h3>
        <ul className="space-y-4">
          {PUBLICATIONS.map((pub) => (
            <li key={pub.id} className="rounded-2xl bg-white p-2 ring-1 ring-zinc-200/60 dark:bg-zinc-950 dark:ring-zinc-800/60">
              <div className="flex items-stretch gap-4 p-2">
                {pub.image && (
                  <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-xl ring-1 ring-zinc-200/60 dark:ring-zinc-800/60">
                    <Image src={pub.image} alt={pub.imageAlt || pub.title} fill className="object-cover" sizes="(max-width: 768px) 160px, 200px" />
                  </div>
                )}
                <div className="flex min-w-0 flex-col gap-1">
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{pub.title}</h4>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {pub.authors.map((author, idx) => (
                      <span key={`${pub.id}-author-${idx}`}>
                        <span className={author === 'Jaywoong Jeong' ? 'font-semibold text-zinc-900 dark:text-zinc-100' : undefined}>
                          {author}
                        </span>
                        {idx < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{pub.status ?? `${pub.venue}, ${pub.year}`}</p>
                  {pub.description && (
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{pub.description}</p>
                  )}
                  <div className="mt-2 flex items-center gap-2">
                    {pub.tags?.map((tag) => (
                      <span key={tag} className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>
                    ))}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-block text-sm text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                      >
                        Paper
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        id="blog"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {false && (
        <motion.section
          id="contact"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Connect</h3>
          <p className="mb-5 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <div className="flex items-center justify-start space-x-3 lg:hidden">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.section>
      )}
    </motion.main>
  )
}
