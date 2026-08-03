'use client'
import { usePathname } from 'next/navigation'
import { Header } from '@/app/header'

export function ClientLayout({
  children,
  footer,
}: {
  children: React.ReactNode
  footer: React.ReactNode
}) {
  const pathname = usePathname()
  const isBlog = pathname?.startsWith('/blog')

  if (isBlog) {
    return (
      <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
        <div className="relative mx-auto w-full max-w-4xl flex-1 px-4 pt-12 lg:pt-20">
          {children}
          {footer}
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 pt-12 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-20">
            <Header />
          </aside>
          <div className="min-w-0">
            {children}
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}
