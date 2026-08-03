'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { BLOG_POSTS } from '@/app/data'

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

export default function Blog() {
  const visiblePosts = BLOG_POSTS.filter((post) => !post.draft)

  return (
    <motion.main
      aria-label="Blog"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {visiblePosts.length > 0 ? (
          <ol className="space-y-2">
            {visiblePosts.map((post) => (
              <li key={post.uid}>
                <Link
                  className="group grid rounded-xl px-1 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8"
                  href={post.link}
                >
                  <div className="min-w-0">
                    <h3 className="text-lg leading-snug font-medium text-zinc-900 transition-colors group-hover:text-zinc-500 sm:text-xl dark:text-zinc-100 dark:group-hover:text-zinc-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base dark:text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                  {post.date && (
                    <time className="row-start-1 mt-1 text-sm text-zinc-400 tabular-nums sm:col-start-2 sm:text-right dark:text-zinc-500">
                      {post.date}
                    </time>
                  )}
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="py-8 text-zinc-500">No entries yet.</p>
        )}
      </motion.section>
    </motion.main>
  )
}
