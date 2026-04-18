'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
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
  const visiblePosts = BLOG_POSTS.filter(post => !post.draft)

  return (
    <motion.main
      className="space-y-10"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Blog</h3>
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
            {visiblePosts.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 block w-full rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1 w-full">
                  <div className="flex flex-row justify-between items-baseline w-full gap-4">
                    <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
                    {post.date && (
                      <span className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500 text-right">
                        {post.date}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 w-full">{post.description}</p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
          {visiblePosts.length === 0 && (
            <p className="text-zinc-500">No entries yet.</p>
          )}
        </div>
      </motion.section>
    </motion.main>
  )
}
