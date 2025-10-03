'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function ThemeEnforcer() {
  const pathname = usePathname()
  const isArtist = pathname?.startsWith('/artist')
  useEffect(() => {
    const root = document.documentElement
    if (isArtist) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [pathname, isArtist])
  return null
}


