'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeEnforcer() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const isArtist = pathname?.startsWith('/artist')
  useEffect(() => {
    const desired = isArtist ? 'dark' : 'light'
    if (theme !== desired) setTheme(desired)
    // Ensure no stale theme classes remain on body
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
  }, [pathname, isArtist, theme, setTheme])
  return null
}


