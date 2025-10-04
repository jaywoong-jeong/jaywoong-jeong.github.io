import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import ThemeEnforcer from '@/components/ThemeEnforcer'
import { cookies } from 'next/headers'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jaywoong.me/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Jaywoong Jeong',
    template: '%s | Jaywoong Jeong'
  },
  description:  '정재웅(Jaywoong Jeong) — KAIST(한국과학기술원) HCI/디자인/AI 포트폴리오. 프로젝트, 연구, 전략, 제품 작업을 소개합니다.',
  keywords: [
    '정재웅',
    'Jaywoong Jeong',
    'KAIST',
    '한국과학기술원',
    '민사고',
    'Minjok Leadership Academy',
    'HCI',
    'Human-Computer Interaction',
    '디자인',
    'AI',
    '포트폴리오'
  ],
  openGraph: {
    title: 'Jaywoong Jeong',
    description: 'KAIST(한국과학기술원) HCI/디자인/AI 포트폴리오',
    url: 'https://jaywoong.me/',
    siteName: 'Jaywoong Jeong',
    locale: 'ko_KR',
    type: 'website'
  },
  authors: [{ name: 'Jaywoong Jeong' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')?.value
  const isDark = themeCookie === 'dark'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaywoong Jeong (정재웅)',
    alternateName: ['정재웅', 'Jaywoong Jeong'],
    url: 'https://jaywoong.me/',
    alumniOf: ['KAIST', '한국과학기술원', '민족사관고등학교'],
    knowsAbout: ['HCI', 'Human-Computer Interaction', 'Design', 'AI'],
    sameAs: [
      'https://www.linkedin.com/in/jaywoong-jeong/',
      'https://github.com/jaywoong-jeong',
      'https://www.instagram.com/jaywoong.jeong'
    ]
  };
  return (
    <html lang="ko" suppressHydrationWarning className={isDark ? 'dark' : ''}>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider attribute="class" storageKey="theme" defaultTheme={isDark ? 'dark' : 'light'} enableSystem={false}>
          <ThemeEnforcer />
            <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
              <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 pt-12 lg:pt-20">
                <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                  <aside className="lg:sticky lg:top-20 self-start">
                    <Header />
                  </aside>
                  <div>
                    {children}
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
      </body>
    </html>
  )
}
