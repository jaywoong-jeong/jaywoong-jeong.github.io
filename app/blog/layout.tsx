'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const pathname = usePathname()
  const currentUrl =
    typeof window !== 'undefined' ? window.location.href : pathname

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

function BlogNav({ showCopy }: { showCopy?: boolean }) {
  const links = [
    { label: 'About', href: '/' },
    { label: 'Publications', href: '/publications' },
    { label: 'Projects', href: '/projects' },
    { label: 'CV', href: '/cv' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <nav
      aria-label="Blog navigation"
      className="fixed top-0 left-0 z-30 w-full bg-white/90 backdrop-blur-xl dark:bg-zinc-950/90"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-4 py-4">
        <Link
          href={showCopy ? '/blog' : '/'}
          className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400"
        >
          {showCopy && <span aria-hidden="true">←</span>}
          {showCopy ? 'Blog' : 'Jaywoong'}
        </Link>
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto text-sm whitespace-nowrap text-zinc-500 sm:gap-5 dark:text-zinc-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-zinc-950 dark:hover:text-zinc-100 ${
                link.href === '/blog'
                  ? 'font-medium text-zinc-950 dark:text-zinc-100'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          {showCopy && (
            <span className="border-l border-zinc-200 pl-4 dark:border-zinc-800">
              <CopyButton />
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isIndex = pathname === '/blog' || pathname === '/blog/'

  if (isIndex) {
    return (
      <>
        <BlogNav />
        <div className="mt-14">{children}</div>
      </>
    )
  }

  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-10 h-16 w-full bg-white/80 backdrop-blur-xl dark:bg-zinc-950/80" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      <BlogNav showCopy />
      <main className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:mb-8 prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium mt-20 max-w-none pb-20">
        {children}
      </main>
    </>
  )
}
