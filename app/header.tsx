'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TextEffect } from '@/components/ui/text-effect'
import { SOCIAL_LINKS } from './data'

const professionalLinks = [
  { label: 'Home', href: '/' },
  { label: 'Publications', href: '/publications' },
  { label: 'Experience', href: '/#research-experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
]

const artistLinks = [
  { label: 'Home', href: '/' },
  { label: 'Artist', href: '/artist' },
  { label: 'Theatre', href: '/artist#theatre' },
  { label: 'Comedy', href: '/artist#comedy' },
  { label: 'Critique', href: '/artist#critique' },
]

export function Header() {
  const pathname = usePathname()
  const isArtist = pathname?.startsWith('/artist')

  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-start gap-4 lg:flex-col lg:gap-3">
        <Image
          src="/profile.jpeg"
          alt="Jaywoong Jeong"
          width={192}
          height={192}
          priority
          sizes="(max-width: 1024px) 88px, 192px"
          className="h-[88px] w-[88px] shrink-0 rounded-full object-cover ring-2 ring-zinc-200 lg:h-[192px] lg:w-[192px] dark:ring-zinc-800"
        />
        <div className="min-w-0">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xl font-medium text-black dark:text-white"
          >
            <Image
              src="/logo.svg"
              alt="Jaywoong Jeong cube logo"
              width={26}
              height={26}
              className="transition-transform duration-300 group-hover:-rotate-6 dark:invert"
            />
            Jaywoong Jeong
          </Link>
          <TextEffect
            key={isArtist ? 'artist-subtitle' : 'home-subtitle'}
            as="p"
            preset="fade"
            per="char"
            className="mt-0.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
            delay={0.45}
          >
            {isArtist
              ? 'Writer, Actor, and Stand-Up Comedian'
              : 'Math & STS @ KAIST'}
          </TextEffect>
          {!isArtist && (
            <p className="mt-1 max-w-[270px] text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
              HCI · Computational Social Science · Multi-Agent Systems
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.link}
            target={link.link.startsWith('http') ? '_blank' : undefined}
            rel={
              link.link.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            className="group inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 transition-colors hover:bg-zinc-950 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            {link.label} <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>

      <PrimaryNavigation />
    </header>
  )
}

function PrimaryNavigation() {
  const pathname = usePathname()
  const isArtist = pathname?.startsWith('/artist')

  const linkClass = (href: string) => {
    const isActive =
      href === '/'
        ? pathname === '/'
        : href.includes('#')
          ? false
          : pathname?.startsWith(href)

    return `transition-colors hover:text-zinc-950 dark:hover:text-zinc-100 ${
      isActive ? 'font-medium text-zinc-950 dark:text-zinc-100' : ''
    }`
  }

  if (isArtist) {
    return (
      <nav aria-label="Primary" className="mt-1 text-sm">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-zinc-500 lg:flex-col lg:gap-2 dark:text-zinc-400">
          {artistLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label="Primary" className="mt-1 text-sm">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-zinc-500 lg:flex-col lg:gap-2 dark:text-zinc-400">
        {professionalLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
