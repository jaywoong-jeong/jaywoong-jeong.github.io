import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

type FeaturedPost = {
  title: string
  description: string
  link: string
  uid: string
}

export async function GET() {
  try {
    const blogDir = path.join(process.cwd(), 'app', 'blog')
    const entries = await fs.readdir(blogDir, { withFileTypes: true })
    const posts: FeaturedPost[] = []

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const dir = path.join(blogDir, entry.name)
      const mdxPath = path.join(dir, 'page.mdx')
      try {
        const stat = await fs.stat(mdxPath)
        if (!stat.isFile()) continue
      } catch {
        continue
      }

      const content = await fs.readFile(mdxPath, 'utf8')

      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
      const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/)
      const canonicalMatch = content.match(/canonical:\s*['"]([^'"]+)['"]/)

      const title = titleMatch?.[1] || entry.name
      const description = descMatch?.[1] || ''
      const link = canonicalMatch?.[1] || `/blog/${entry.name}`

      posts.push({
        title,
        description,
        link,
        uid: `blog-${entry.name}`,
      })
    }

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 })
  }
}


