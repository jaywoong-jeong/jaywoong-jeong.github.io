'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { SOCIAL_LINKS, EMAIL } from './data'

export function Header() {
  return (
    <header className="mb-8 flex flex-col gap-6">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white text-2xl">
          <span className="inline-flex items-center gap-2">
            <Image src="/logo.svg" alt="Jaywoong Jeong logo" width={24} height={24} />
            <span>Jaywoong Jeong</span>
          </span>
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Math & Design @ KAIST
        </TextEffect>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-2 inline-block text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          {EMAIL}
        </a>
      </div>

      <div className="hidden flex-wrap gap-2 lg:flex">
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
      
      <nav aria-label="Primary" className="text-sm">
        <ul className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
          <li>
            <a href="#projects" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Projects
            </a>
          </li>
          <li>
            <a href="#research" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Research
            </a>
          </li>
          <li>
            <a href="#work" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Work
            </a>
          </li>
          <li>
            <a href="#blog" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
