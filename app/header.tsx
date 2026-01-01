'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { SOCIAL_LINKS, EMAIL, NEWS } from './data'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isArtist = pathname?.startsWith('/artist')
  return (
    <header className="mb-8 flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-row items-start gap-4 sm:flex-col sm:gap-2">
        <Image
          src="/profile.jpeg"
          alt="Jaywoong Jeong"
          width={80}
          height={80}
          className="h-[80px] w-[80px] shrink-0 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800 sm:h-[192px] sm:w-[192px]"
        />
        <div className="flex min-w-0 flex-col gap-1 sm:gap-0">
          <Link href="/" className="font-medium text-black dark:text-white text-xl sm:text-2xl">
            <span className="inline-flex items-center gap-2">
              <Image src="/logo.svg" alt="Jaywoong Jeong logo" width={24} height={24} className="dark:invert" />
              <span>Jaywoong Jeong</span>
            </span>
          </Link>
          <TextEffect
            key={isArtist ? 'artist-subtitle' : 'home-subtitle'}
            as="p"
            preset="fade"
            per="char"
            className="break-words whitespace-normal text-sm text-zinc-600 dark:text-zinc-500 sm:text-base"
            delay={0.5}
          >
            {isArtist ? 'Amateur Writer, Actor, and Stand-Up Comedian' : 'Math & Design @ KAIST'}
          </TextEffect>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-1 inline-block text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            {EMAIL}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            {link.label}
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
        ))}
      </div>

      <nav aria-label="Primary" className="hidden text-sm sm:block">
        {isArtist ? (
          <ul className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
            <li>
              <Link href="/artist#theatre" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                Theatre
              </Link>
            </li>
            <li>
              <Link href="/artist#comedy" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                Comedy
              </Link>
            </li>
            <li>
              <Link href="/artist#critique" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                Media Critique
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
            <li>
              <Link href="/#work" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                Work
              </Link>
            </li>
            <li>
              <Link href="/#research" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                Research
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#publications" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                Publications
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {!isArtist && (
        <div className="hidden lg:block mt-6">
          <h3 className="mb-3 pl-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Latest News</h3>
          <div className="-ml-3 rounded-2xl bg-white p-5 ring-1 ring-zinc-200/60 dark:bg-zinc-950 dark:ring-zinc-800/60">
            <ul className="space-y-4 text-sm">
              {NEWS.map((item) => (
                <li key={item.id} className="text-zinc-600 dark:text-zinc-400">
                  <div className="mb-1 font-semibold text-zinc-700 dark:text-zinc-300">{item.date}</div>
                  <div className="leading-relaxed">{item.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
