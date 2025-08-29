type Project = {
  id: string
  name: string
  description: string
  link?: string
  video?: string
  image?: string
  imageAlt?: string
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
  advisor?: {
    name: string
    link?: string
  }
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

type Advisor = {
  name: string
  affiliation: string
  role: 'Advisor' | 'Co-advisor' | 'Mentor'
  start?: string
  end?: string
  link?: string
  id: string
  details?: string[]
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
    id: 'cuve',
    name: 'CUVE: Concentration Unit for Variable Efforts',
    description: 'KAIST ID301 Interactive Product Design Term Project. Turning abstract time into a sensory, intuitive experience with a physical–software hybrid timer.',
    context: { kind: 'course', name: 'Interactive Product Design', code: 'ID301' },
    types: ['design', 'product'],
    year: '2025',
    image: '/projects/2025_course_id301_cuve_interactive_product_design/IPD Final.png',
    imageAlt: 'CUVE cover image',
    links: [
      { label: 'Slides', url: '/projects/2025_course_id301_cuve_interactive_product_design/Slides.pdf', kind: 'pdf' },
      { label: 'Design', url: '/projects/2025_course_id301_cuve_interactive_product_design/Brief.pdf', kind: 'pdf' },
    ],
  },
  {
    id: 'theatre-poster',
    name: 'Theatre Poster Design',
    description: 'Poster design for a theatre production.',
    context: { kind: 'organization', name: 'Ibagutor' },
    types: ['design'],
    year: '2025',
    image: '/projects/2025_organization_ibagutor_poster_md_design/Poster.png',
    imageAlt: 'Theatre poster design',
    links: [
      { label: 'Design', url: '/projects/2025_organization_ibagutor_poster_md_design/Poster.png', kind: 'image' },
      { label: 'External', url: 'https://tumblbug.com/ibagutor65', kind: 'link' },
    ],
  },
  {
    id: 'finance-rag',
    name: 'Financial RAG Pipeline & Product Development',
    description: 'Built RAG-based financial information retrieval and QA system. Proposed Query Chain framework for latent user intent analysis. 4th UNIST-KAIST-POSTECH Data Science Competition 3rd place.',
    context: { kind: 'competition', name: '4회 UNIST-KAIST-POSTECH 데이터사이언스 경진대회', award: '은상' },
    types: ['strategy', 'research'],
    year: '2024',
    selected: true,
    image: '/projects/2024_competition_ukp_finance_rag_kb_securities/Cover.png',
    imageAlt: 'Finance RAG cover',
    links: [
      { label: 'Slides', url: '/projects/2024_competition_ukp_finance_rag_kb_securities/Slides.pdf', kind: 'pdf' },
      { label: 'Report', url: '/projects/2024_competition_ukp_finance_rag_kb_securities/Report.pdf', kind: 'pdf' },
      { label: 'External', url: 'https://biz.heraldcorp.com/article/10389646', kind: 'link' },
    ],
  },
  {
    id: 'network-analysis-kr-finance',
    name: 'Network Analysis of Korean Financial Markets During Economic Crises',
    description:
      'KAIST IE471 AI for Finance Term Project. Korean market network analysis before/after major crises (IMF, Subprime, COVID-19). Built MST, centrality, and communities to derive portfolio implications.',
    context: { kind: 'course', name: 'AI for Finance', code: 'IE471' },
    types: ['research'],
    year: '2024',
    image: '/projects/2024_course_ie471_ai_finance_network_analysis/image_1.png',
    imageAlt: 'Subprime MST preview',
    links: [
      { label: 'Report', url: '/projects/2024_course_ie471_ai_finance_network_analysis/Paper.pdf', kind: 'pdf' },
      { label: 'Slides', url: '/projects/2024_course_ie471_ai_finance_network_analysis/Slides.pdf', kind: 'pdf' },
    ],
  },
  {
    id: 'kaist-mba-sm',
    name: 'SM Entertainment Global Viral Marketing Strategy',
    description: 'KAIST BIZ558 Marketing Term Project. Developed SM Entertainment\'s global viral marketing strategy using TikTok and Spotify API data. Selected to present findings to C-level executives at SM Entertainment headquarters.',
    context: { kind: 'course', name: 'Marketing', code: 'Biz558' },
    types: ['strategy', 'research'],
    year: '2023',
    selected: true,
    image: '/projects/2023_course_biz558_sm_global_marketing_strategy/cover.jpg',
    imageAlt: 'KAIST MBA project cover',
    links: [
      { label: 'Slides', url: '/projects/kaist-mba-sm/slides.pdf', kind: 'pdf' },
    ],
  },
  {
    id: 'cheil-idea-festival',
    name: '44th Cheil Idea Festival – Albamon "Respect the First Time"',
    description: 'IMC campaign and welcome kit solution supporting Gen Z’s first part-time job experience. Solution Case Video Top 16 Finalist (top 1.8%).',
    context: { kind: 'competition', name: '제일기획 아이디어 페스티벌', award: 'Top 16 Finalist (1.8%)' },
    types: ['strategy', 'design'],
    year: '2023',
    selected: true,
    image: '/projects/2023_competition_cheil_idea_festival_albamon_campaign/cover.png',
    imageAlt: 'Albamon "Respect the First Time" campaign cover',
    links: [
      { label: 'Slides', url: '/projects/2023_competition_cheil_idea_festival_albamon_campaign/Slides.pdf', kind: 'pdf' },
      { label: 'Design', url: '/projects/2023_competition_cheil_idea_festival_albamon_campaign/StoryBoard.jpeg', kind: 'image' },
      { label: 'Video', url: '/projects/2023_competition_cheil_idea_festival_albamon_campaign/Video_1.mp4', kind: 'video' },
    ],
  },
  {
    id: 'new-space',
    name: 'New Space – Seminar & Investment Report',
    description:
      "Executive seminar and investment report on the New Space industry conducted during an VC internship at Company K Partners.",
    context: { kind: 'company', name: 'Company K Partners' },
    types: ['research'],
    year: '2023',
    image: '/projects/2023_company_new_space_industry_research_seminar/cover.png',
    links: [
      { label: 'Slides', url: '/projects/2023_company_new_space_industry_research_seminar/Slides.pdf', kind: 'pdf' },
      { label: 'Report', url: '/projects/2023_company_new_space_industry_research_seminar/Report.pdf', kind: 'pdf' },
    ],
  },
  {
    id: 'icist-scof',
    name: 'ICIST SCOF',
    description: 'Founding TF Lead for the Science Communication Festival (SCOF). From initial concept and branding to program design and successful launch.',
    context: { kind: 'organization', name: 'ICIST / SCOF' },
    types: ['strategy'],
    year: '2022',
    image: '/projects/2022_organization_icists_scof_science_communication/cover.png',
    imageAlt: 'SCOF 2022 행사 현장',
    
    links: [
      { label: 'Report', url: '/projects/2022_organization_icists_scof_science_communication/Report.pdf', kind: 'pdf' },
      { label: 'Design', url: '/projects/2022_organization_icists_scof_science_communication/Brochure.pdf', kind: 'pdf' },
      { label: 'External', url: '/projects/2022_organization_icists_scof_science_communication/Press.pdf', kind: 'pdf' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=5bC7OLrdrHQ', kind: 'video' },
    ],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'KAIST School of Computing - Collaborative Social Technologies Lab',
    title: 'Research Intern',
    start: 'Jun 2025',
    end: 'Aug 2025',
    link: 'https://cstlab.org/',
    id: 'work-kaist-cstl-2025',
    advisor: {
      name: 'Joseph Seering',
      link: 'https://joseph.seering.org/index.html',
    },
  },
  {
    company: 'KAIST Department of Industrial Design - AI Experience Lab',
    title: 'Research Intern',
    start: 'Aug 2024',
    end: 'Present',
    link: 'https://ai-experience-lab.github.io/',
    id: 'work-kaist-aix-2024',
    advisor: {
      name: 'Tak Yeon Lee',
      link: 'https://takyeonlee.com/',
    },
  },
  {
    company: 'KAIST Department of Industrial and Systems Engineering - Applied AI Lab',
    title: 'Research Intern',
    start: 'Jun 2024',
    end: 'Aug 2024',
    link: 'https://aai.kaist.ac.kr/',
    id: 'work-kaist-ise-applied-ai-2024',
    advisor: {
      name: 'Il-Chul Moon',
      link: 'https://aai.kaist.ac.kr/bbs/board.php?bo_table=sub2_1&wr_id=3',
    },
  },
  {
    company: 'MIT Sloan School of Management - Chu Lab',
    title: 'Research Assistant',
    start: 'Mar 2024',
    end: 'Present',
    link: 'https://mitsloan.mit.edu/faculty/directory/johan-chu',
    id: 'work-mit-chu-2024',
    advisor: {
      name: 'Johan Chu',
      link: 'https://mitsloan.mit.edu/faculty/directory/johan-chu',
    },
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

export const ADVISORS: Advisor[] = [
  {
    name: 'Joseph Seering',
    affiliation: 'KAIST School of Computing - Collaborative Social Technologies Lab (CSTL)',
    role: 'Advisor',
    start: 'Jun 2025',
    end: 'Aug 2025',
    link: 'https://joseph.seering.org/index.html',
    id: 'advisor-joseph-seering',
  },
  {
    name: 'Il-Chul Moon',
    affiliation: 'KAIST Department of Industrial and Systems Engineering - Applied AI Lab',
    role: 'Advisor',
    start: 'Jun 2024',
    end: 'Aug 2024',
    link: 'https://aai.kaist.ac.kr/bbs/board.php?bo_table=sub2_1&wr_id=3',
    id: 'advisor-il-chul-moon',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '배달앱 별점에 관하여',
    description: '별점이 만드는 인센티브, 왜곡, 그리고 개선 아이디어.',
    link: '/blog/delivery-app-ratings',
    uid: 'blog-delivery-app-ratings',
  },
  {
    title: '급식을 남기지 않는 법',
    description: '남김 없이 맛있게 먹는 작은 습관과 루틴.',
    link: '/blog/how-not-to-leave-lunch',
    uid: 'blog-how-not-to-leave-lunch',
  },
  {
    title: '운 9, 실력 1',
    description: '운과 실력의 비율을 다시 생각해보는 짧은 에세이.',
    link: '/blog/luck-9-skill-1',
    uid: 'blog-luck-9-skill-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jaywoong-jeong/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/jaywoong.jeong',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/jaywoong-jeong',
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
      "DramaForge is a system that uses LLMs to analyze theatrical scripts' structural dependencies and propose targeted adaptation options that meet user constraints while supporting collaborative workflows and maintaining human creative control.",
    link: '/publications/DramaForge_UnderReview.pdf',
    id: 'pub-dramaforge-2025',
    tags: ['LLM', 'Creativity Support', 'HCI'],
    image: '/publications/DramaForge-Cover.png',
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
    image: '/publications/image.png',
    imageAlt: 'Placeholder image',
  }
]

export const EMAIL = 'jaywoong.jeong@kaist.ac.kr'
