import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ClientLayout } from '@/components/ClientLayout'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import RouteTheme from '@/components/RouteTheme'
import { WEBSITE_URL } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(`${WEBSITE_URL}/`),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Jaywoong Jeong',
    template: '%s | Jaywoong Jeong',
  },
  description:
    '정재웅(Jaywoong Jeong) — KAIST(한국과학기술원) HCI/디자인/AI 포트폴리오. 프로젝트, 연구, 전략, 제품 작업을 소개합니다.',
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
    '포트폴리오',
  ],
  openGraph: {
    title: 'Jaywoong Jeong',
    description: 'KAIST(한국과학기술원) HCI/디자인/AI 포트폴리오',
    url: `${WEBSITE_URL}/`,
    siteName: 'Jaywoong Jeong',
    locale: 'ko_KR',
    type: 'website',
  },
  authors: [{ name: 'Jaywoong Jeong' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaywoong Jeong (정재웅)',
    alternateName: ['정재웅', 'Jaywoong Jeong'],
    url: `${WEBSITE_URL}/`,
    alumniOf: ['KAIST', '한국과학기술원', '민족사관고등학교'],
    knowsAbout: ['HCI', 'Human-Computer Interaction', 'Design', 'AI'],
    sameAs: [
      'https://www.linkedin.com/in/jaywoong-jeong/',
      'https://github.com/jaywoong-jeong',
      'https://www.instagram.com/jaywoong.jeong',
    ],
  }
  return (
    <html lang="ko" suppressHydrationWarning className="light">
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        {/* Set the route-specific theme before hydration to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var t=location.pathname.indexOf('/artist')===0?'dark':'light';
                var d=document.documentElement;
                d.classList.remove('light','dark');
                d.classList.add(t);
                d.style.colorScheme=t;
                try{ localStorage.setItem('theme', t); }catch(e){}
              })();
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="theme"
          enableSystem={false}
          disableTransitionOnChange
        >
          <RouteTheme />
          <ClientLayout footer={<Footer />}>{children}</ClientLayout>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
