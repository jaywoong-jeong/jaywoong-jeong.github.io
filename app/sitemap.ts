import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

const routes = [
  '',
  '/artist',
  '/blog',
  '/blog/chatgpt-is-our-new-dopamine',
  '/blog/dont-ban-the-car-build-the-seat-belt',
  '/blog/invisible-leash-of-airpods',
  '/cv',
  '/manifesto',
  '/projects',
  '/projects/cheil-idea-festival',
  '/projects/cuve',
  '/projects/finance-rag',
  '/projects/icist-scof',
  '/projects/kaist-mba-sm',
  '/projects/network-analysis-kr-finance',
  '/projects/new-space',
  '/projects/theatre-poster',
  '/publications',
  '/research',
  '/research/ai-creativity-augmentation',
  '/research/cstl-project',
  '/research/dramaforge',
  '/research/gaze-aware-interaction',
  '/research/sloan-project',
  '/research/social-impact-of-ai',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${WEBSITE_URL}${route}` }))
}
