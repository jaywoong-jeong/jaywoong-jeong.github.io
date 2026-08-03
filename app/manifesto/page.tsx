import Link from 'next/link'

export const metadata = {
  title: 'Research Manifesto',
  description:
    'The research Jaywoong Jeong wants to pursue, the problems he hopes to solve, and the life he wants to live.',
}

const textLink =
  'underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100'

export default function ResearchManifestoPage() {
  return (
    <main className="max-w-3xl">
      <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <p className="text-xs font-medium tracking-[0.16em] text-zinc-400 uppercase">
          Research · Work · Life
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          Research Manifesto
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          The research I want to pursue, the problems I want to solve, and the
          kind of life I hope to live.
        </p>
      </header>

      <article className="space-y-10 py-9 text-[17px] leading-8 text-zinc-700 dark:text-zinc-300">
        <section>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-zinc-950 uppercase dark:text-zinc-100">
            The problems worth solving
          </h2>
          <p>
            Most AI systems treat a person as an isolated user with a task to
            complete. But much of human life happens between people: through
            shifting roles, conflicting goals, shared norms, and informal
            structures. I want to understand those dynamics and build systems
            that support them without reducing a group to a single objective.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-zinc-950 uppercase dark:text-zinc-100">
            The research I want to do
          </h2>
          <p>
            I am interested in socially intelligent AI that can reason about
            people, relationships, and organizations. I combine computational
            modeling, multi-agent environments, interactive system building, and
            human-centered evaluation to study how intelligence behaves in real
            social contexts—and how it might help people create, collaborate,
            and make decisions together.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-zinc-950 uppercase dark:text-zinc-100">
            The life I want around the work
          </h2>
          <p>
            I do not want research to be separate from the rest of living. I
            want to keep making things, performing, learning from people outside
            my field, and participating in communities whose values cannot be
            captured by a benchmark. The work should make me more attentive to
            other people, not less; more willing to question what progress
            means, not merely faster at producing it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-zinc-950 uppercase dark:text-zinc-100">
            A direction, not a conclusion
          </h2>
          <p>
            This is a living statement. The methods and projects will change,
            but I hope the central commitment remains: to pursue difficult
            questions with technical rigor, social imagination, and enough
            humility to let people complicate the answer.
          </p>
        </section>
      </article>

      <p className="border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        See how these ideas take shape in my{' '}
        <Link href="/publications" className={textLink}>
          publications
        </Link>{' '}
        and{' '}
        <Link href="/#research-experience" className={textLink}>
          research experience
        </Link>
        .
      </p>
    </main>
  )
}
