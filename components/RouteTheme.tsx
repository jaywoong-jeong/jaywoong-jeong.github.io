'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function RouteTheme() {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    const isArtist = pathname?.startsWith('/artist')
    const desired = isArtist ? 'dark' : 'light'
    if (resolvedTheme !== desired) {
      setTheme(desired)
      // keep SSR in sync on subsequent navigations
      document.cookie = `theme=${desired}; path=/; max-age=31536000`
    }
  }, [pathname, resolvedTheme, setTheme])

  return null
}


