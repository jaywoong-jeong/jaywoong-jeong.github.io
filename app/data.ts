type Project = {
  id: string
  name: string
  description: string
  link?: string
  video?: string
  // New tag system
  context: {
    kind: 'course' | 'competition' | 'organization' | 'company'
    name?: string // e.g., course/competition/organization name
    code?: string // e.g., course code
    award?: string // e.g., competition award
  }
  types: Array<'design' | 'strategy' | 'product' | 'research'>
  year: string
  selected?: boolean
  links?: { label: 'Slides' | 'Report' | 'Demo' | 'Video' | 'Design' | 'Code' | 'External'; url: string; kind?: 'pdf' | 'link' | 'video' | 'image' }[]
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  details?: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

// Research/Publications
export type Publication = {
  id: string
  title: string
  authors: string[]
  venue?: string
  year?: string
  status?: string
  description?: string
  tags?: string[]
  link?: string
  image?: string
  imageAlt?: string
}

// Publications data is defined near the end of this file

export const PROJECTS: Project[] = [
  {
    id: 'kaist-mba-sm',
    name: 'KAIST MBA - SM Project',
    description: 'Marketing strategy project for KAIST MBA (SM).',
    context: { kind: 'course', name: 'Marketing', code: 'Biz558' },
    types: ['strategy', 'research'],
    year: '2023',
    selected: true,
    links: [
      { label: 'Slides', url: '/projects/kaist-mba-sm/slides.pdf', kind: 'pdf' },
    ],
  },
  {
    id: 'finance-rag',
    name: 'Finance RAG',
    description: 'RAG-based financial information retrieval and Q&A system.',
    context: { kind: 'competition', name: '4회 UNIST-KAIST-POSTECH 데이터사이언스 경진대회', award: '은상' },
    types: ['strategy', 'research'],
    year: '2024',
    selected: true,
    links: [
      { label: 'Slides', url: '/projects/finance-rag/slides.pdf', kind: 'pdf' },
      { label: 'External', url: 'https://biz.heraldcorp.com/article/10389646', kind: 'link' },
    ],
  },
  {
    id: 'cheil-idea-festival',
    name: 'Cheil Idea Festival',
    description: 'Marketing/advertising concept and campaign proposal.',
    context: { kind: 'competition', name: '제일기획 아이디어 페스티벌', award: 'Top 16 Finalist (1.6%)' },
    types: ['strategy', 'design'],
    year: '2023',
    selected: true,
    links: [
      { label: 'Design', url: '/projects/cheil-idea-festival/storyboard.pdf', kind: 'pdf' },
      { label: 'Slides', url: '/projects/cheil-idea-festival/slides.pdf', kind: 'pdf' },
      { label: 'Video', url: '/projects/cheil-idea-festival/video.mp4', kind: 'video' },
    ],
  },
  {
    id: 'new-space',
    name: 'New Space',
    description: 'Economic research on the emerging space industry.',
    context: { kind: 'company' },
    types: ['research'],
    year: '2023',
    links: [
      { label: 'Slides', url: '/projects/new-space/slides.pdf', kind: 'pdf' },
      { label: 'Report', url: '/projects/new-space/report.pdf', kind: 'pdf' },
    ],
  },
  {
    id: 'cuve',
    name: 'CUVE',
    description: 'Product design project (prototype and UX flow).',
    context: { kind: 'course', name: 'Interactive product Design', code: 'ID301' },
    types: ['design'],
    year: '2025',
    links: [
      { label: 'Design', url: '/projects/cuve/storyboard.pdf', kind: 'pdf' },
      { label: 'Slides', url: '/projects/cuve/slides.pdf', kind: 'pdf' },
      { label: 'Demo', url: '/projects/cuve/demo.mp4', kind: 'video' },
    ],
  },
  {
    id: 'icist-scof',
    name: 'ICIST SCOF',
    description: 'Organized and hosted a conference session.',
    context: { kind: 'organization', name: 'ICIST / SCOF' },
    types: ['strategy'],
    year: '2022',
    links: [
      { label: 'Report', url: '/projects/icist-scof/cover-letter.pdf', kind: 'pdf' },
      { label: 'Design', url: '/projects/icist-scof/poster.pdf', kind: 'pdf' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=5bC7OLrdrHQ', kind: 'video' },
      { label: 'External', url: 'https://www.notion.so/', kind: 'link' },
    ],
  },
  {
    id: 'theatre-poster',
    name: 'Theatre Poster Design',
    description: 'Poster design for a theatre production.',
    context: { kind: 'organization', name: 'Theatre Club' },
    types: ['design'],
    year: '2025',
    links: [
      { label: 'Design', url: '/projects/theatre-poster/design.png', kind: 'image' },
      { label: 'External', url: 'https://tumblbug.com/', kind: 'link' },
    ],
  },
  {
    id: 'network-analysis-kr-finance',
    name: 'Network Analysis of Korean Financial Markets During Economic Crises',
    description:
      'Network analysis of KR financial market linkages during crises.',
    context: { kind: 'course', name: 'AI for Finance', code: 'IE471' },
    types: ['research'],
    year: '2023',
    links: [
      { label: 'Report', url: '/projects/network-analysis-kr-finance/slides.pdf', kind: 'pdf' },
    ],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'KAIST Department of Industrial Design - AI Experience Lab',
    title: 'Research Intern',
    start: 'Aug 2024',
    end: 'Present',
    link: 'https://ai-experience-lab.github.io/',
    id: 'work-kaist-aix-2024',
  },
  {
    company: 'KAIST Department of Industrial and Systems Engineering - Applied AI Lab',
    title: 'Research Intern',
    start: 'Jun 2024',
    end: 'Aug 2024',
    link: 'https://aai.kaist.ac.kr/',
    id: 'work-kaist-ise-applied-ai-2024',
  },
  {
    company: 'MIT Sloan School of Management - Chu Lab',
    title: 'Research Assistant',
    start: 'Mar 2024',
    end: 'Feb 2025',
    link: 'https://mitsloan.mit.edu/faculty/directory/johan-chu',
    id: 'work-mit-chu-2024',
  },
  {
    company: 'Company K Partners',
    title: 'Venture Capital Intern',
    start: 'Feb 2023',
    end: 'Jul 2023',
    link: 'https://kpartners.co.kr/wordpress/en/',
    id: 'work-companyk-2023',
  },
  {
    company: 'Hiconsy (Edtech Start-up)',
    title: 'Researcher',
    start: 'Feb 2022',
    end: 'Dec 2022',
    link: 'https://www.hiconsy.com/',
    id: 'work-hiconsy-2022',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  }
]

export const PUBLICATIONS: Publication[] = [
  
  {
    title:
      'Gaze2Prompt: Turning Eye-Tracking Data into Visual Prompts for Multimodal LLMs',
    authors: [
      'Jae Young Choi',
      'Seon Gyeom Kim',
      'Jaywoong Jeong',
      'Ryan Rossi',
      'Jihyung Kil',
      'Tak Yeon Lee',
    ],
    venue: 'UbiComp Companion (To Appear)',
    year: '2025',
    status: 'UbiComp Companion (To Appear), 2025',
    description:
      'Proposes a method for converting eye-tracking signals into visual prompts to enhance multimodal LLM performance, enabling attention-aware interaction and analysis.',
    link: '/publications/Gaze2Prompt_Turning_Eye_Tracking_Data_into_Visual_Prompts_for_Multimodal_LLMs (1).pdf',
    id: 'pub-gaze2prompt-2025',
    tags: ['Multimodal', 'Eye Tracking', 'LLM'],
    image: '/publications/Gaze2Prompt Cover.png',
    imageAlt: 'Gaze2Prompt cover',
  },
  {
    title:
      'DramaForge: AI-Assisted Tool for Script Analysis and Adaptation Considering Production Constraints',
    authors: ['Jaywoong Jeong', 'Jae Young Choi', 'Seon Gyeom Kim', 'Tak Yeon Lee'],
    venue: 'Under Review',
    year: '2025',
    status: 'Under Review, 2025',
    description:
      "Theatrical script adaptation requires complex manual effort. DramaForge employs LLMs to analyze a script’s structural dependencies and proposes targeted adaptation options (e.g., merging roles, cutting subplots) that satisfy user-defined constraints, supporting a co-creative workflow while retaining human creative control.",
    link: '/publications/DramaForge_UnderReview.pdf',
    id: 'pub-dramaforge-2025',
    tags: ['LLM', 'Creativity Support', 'HCI'],
    image: '/publications/DramaForge Cover.png',
    imageAlt: 'DramaForge cover',
  },
  {
    title:
      'Attention Misdirection: The use of entertainment scandals to bury political scandals',
    authors: ['Johan Chu', 'Jaywoong Jeong'],
    venue: 'Work in progress',
    year: '2024-',
    status: 'Work in progress',
    id: 'pub-attention-misdirection-wip',
    image: '/publications/placeholder.png',
    imageAlt: 'Placeholder image',
  }
]

export const EMAIL = 'jaywoong.jeong@kaist.ac.kr'
