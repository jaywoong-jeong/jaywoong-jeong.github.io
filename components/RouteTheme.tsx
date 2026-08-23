'use client'
import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useTheme } from 'next-themes'

export default function RouteTheme() {
  const pathname = usePathname()
  const { setTheme } = useTheme()

  useLayoutEffect(() => {
    const isArtist = pathname?.startsWith('/artist')
    const desired = isArtist ? 'dark' : 'light'

    // Route changes happen client-side, so update the document before the
    // browser paints the next page. Waiting for a normal effect causes a
    // visible white-to-black flash when entering the artist section.
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(desired)
    root.style.colorScheme = desired

    setTheme(desired)
  }, [pathname, setTheme])

  return null
}
