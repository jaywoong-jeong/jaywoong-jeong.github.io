import { ProjectsClient } from './ProjectsClient'

export const metadata = {
  title: 'Projects',
  description:
    'Selected design, strategy, and product projects by Jaywoong Jeong.',
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="mb-10">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Design, strategy, product, and organizational work beyond my research
          publications.
        </p>
      </section>

      <ProjectsClient />
    </main>
  )
}
