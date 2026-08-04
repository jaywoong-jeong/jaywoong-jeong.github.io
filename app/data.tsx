import type { ReactNode } from 'react'
import Link from 'next/link'

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
  links?: {
    label:
      | 'Slides'
      | 'Report'
      | 'Demo'
      | 'Video'
      | 'Design'
      | 'Code'
      | 'External'
    url: string
    kind?: 'pdf' | 'link' | 'video' | 'image'
  }[]
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
  mentors?: {
    name: string
    link?: string
  }[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date?: string
  draft?: boolean
}

// Research (MDX-based) minimal metadata
export type ResearchItem = {
  id: string
  title: string
  status?: 'Ongoing' | 'Completed'
  link: string // route to the MDX page
  period?: string
  affiliation?: string
  collaborators?: string[]
  summary?: string
  topics?: string[]
  image?: string
  programTag?: string
}

export type ResearchExperience = {
  id: string
  institution: string
  role: string
  period: string
  advisor: {
    name: string
    link?: string
  }
  mentors?: {
    name: string
    link?: string
  }[]
  summary: string
  link?: string
  logos?: {
    label: string
    domain: string
    src?: string
  }[]
}

export type ResearchCollaboration = {
  id: string
  title: string
  affiliation: string
  collaborators: string[]
  period?: string
  summary: string
  logos?: {
    label: string
    domain: string
    src?: string
  }[]
}

export type LeadershipActivity = {
  id: string
  organization: string
  role: string
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
  category?: 'peer-reviewed' | 'preprint'
  venue?: string
  year?: string
  status?: string
  description?: string
  tags?: string[]
  link?: string
  links?: {
    label: 'Project Page' | 'Dataset' | 'Code' | 'DOI' | 'Website'
    url: string
  }[]
  image?: string
  imageAlt?: string
  selected?: boolean
}

// Publications data is defined near the end of this file

export const PROJECTS: Project[] = [
  {
    id: 'cuve',
    name: 'CUVE: Concentration Unit for Variable Efforts',
    description:
      'KAIST ID301 Interactive Product Design Term Project. Turning abstract time into a sensory, intuitive experience with a physical–software hybrid timer.',
    context: {
      kind: 'course',
      name: 'Interactive Product Design',
      code: 'ID301',
    },
    types: ['design', 'product'],
    year: '2025',
    selected: true,
    image:
      '/projects/2025_course_id301_cuve_interactive_product_design/IPD Final.png',
    imageAlt: 'CUVE cover image',
    links: [
      {
        label: 'Slides',
        url: '/projects/2025_course_id301_cuve_interactive_product_design/Slides.pdf',
        kind: 'pdf',
      },
      {
        label: 'Design',
        url: '/projects/2025_course_id301_cuve_interactive_product_design/Brief.pdf',
        kind: 'pdf',
      },
    ],
  },
  {
    id: 'theatre-poster',
    name: 'Theatre Poster Design',
    description: 'Poster design for a theatre production.',
    context: { kind: 'organization', name: 'Ibagutor' },
    types: ['design'],
    year: '2025',
    selected: true,
    image: '/projects/2025_organization_ibagutor_poster_md_design/Poster.png',
    imageAlt: 'Theatre poster design',
    links: [
      {
        label: 'Design',
        url: '/projects/2025_organization_ibagutor_poster_md_design/Poster.png',
        kind: 'image',
      },
      {
        label: 'External',
        url: 'https://tumblbug.com/ibagutor65',
        kind: 'link',
      },
    ],
  },
  {
    id: 'finance-rag',
    name: 'Financial RAG Pipeline & Product Development',
    description:
      'Built RAG-based financial information retrieval and QA system. Proposed Query Chain framework for latent user intent analysis. 4th UNIST-KAIST-POSTECH Data Science Competition 3rd place.',
    context: {
      kind: 'competition',
      name: '4회 UNIST-KAIST-POSTECH 데이터사이언스 경진대회',
      award: '은상',
    },
    types: ['strategy', 'research'],
    year: '2024',
    selected: true,
    image: '/projects/2024_competition_ukp_finance_rag_kb_securities/Cover.png',
    imageAlt: 'Finance RAG cover',
    links: [
      {
        label: 'Slides',
        url: '/projects/2024_competition_ukp_finance_rag_kb_securities/Slides.pdf',
        kind: 'pdf',
      },
      {
        label: 'Report',
        url: '/projects/2024_competition_ukp_finance_rag_kb_securities/Report.pdf',
        kind: 'pdf',
      },
      {
        label: 'External',
        url: 'https://biz.heraldcorp.com/article/10389646',
        kind: 'link',
      },
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
    image:
      '/projects/2024_course_ie471_ai_finance_network_analysis/image_1.png',
    imageAlt: 'Subprime MST preview',
    links: [
      {
        label: 'Report',
        url: '/projects/2024_course_ie471_ai_finance_network_analysis/Paper.pdf',
        kind: 'pdf',
      },
      {
        label: 'Slides',
        url: '/projects/2024_course_ie471_ai_finance_network_analysis/Slides.pdf',
        kind: 'pdf',
      },
    ],
  },
  {
    id: 'kaist-mba-sm',
    name: 'SM Entertainment Global Viral Marketing Strategy',
    description:
      "KAIST BIZ558 Marketing Term Project. Developed SM Entertainment's global viral marketing strategy using TikTok and Spotify API data. Selected to present findings to C-level executives at SM Entertainment headquarters.",
    context: { kind: 'course', name: 'Marketing', code: 'Biz558' },
    types: ['strategy', 'research'],
    year: '2023',
    image:
      '/projects/2023_course_biz558_sm_global_marketing_strategy/cover.jpg',
    imageAlt: 'KAIST MBA project cover',
    links: [
      {
        label: 'Slides',
        url: '/projects/kaist-mba-sm/slides.pdf',
        kind: 'pdf',
      },
    ],
  },
  {
    id: 'cheil-idea-festival',
    name: '44th Cheil Idea Festival – Albamon "Respect the First Time"',
    description:
      'IMC campaign and welcome kit solution supporting Gen Z’s first part-time job experience. Solution Case Video Top 16 Finalist (top 1.8%).',
    context: {
      kind: 'competition',
      name: '제일기획 아이디어 페스티벌',
      award: 'Top 16 Finalist (1.8%)',
    },
    types: ['strategy', 'design'],
    year: '2023',
    image:
      '/projects/2023_competition_cheil_idea_festival_albamon_campaign/cover.png',
    imageAlt: 'Albamon "Respect the First Time" campaign cover',
    links: [
      {
        label: 'Slides',
        url: '/projects/2023_competition_cheil_idea_festival_albamon_campaign/Slides.pdf',
        kind: 'pdf',
      },
      {
        label: 'Design',
        url: '/projects/2023_competition_cheil_idea_festival_albamon_campaign/StoryBoard.jpeg',
        kind: 'image',
      },
      {
        label: 'Video',
        url: '/projects/2023_competition_cheil_idea_festival_albamon_campaign/Video_1.mp4',
        kind: 'video',
      },
    ],
  },
  {
    id: 'new-space',
    name: 'New Space – Seminar & Investment Report',
    description:
      'Executive seminar and investment report on the New Space industry conducted during an VC internship at Company K Partners.',
    context: { kind: 'company', name: 'Company K Partners' },
    types: ['research'],
    year: '2023',
    image:
      '/projects/2023_company_new_space_industry_research_seminar/cover.png',
    links: [
      {
        label: 'Slides',
        url: '/projects/2023_company_new_space_industry_research_seminar/Slides.pdf',
        kind: 'pdf',
      },
      {
        label: 'Report',
        url: '/projects/2023_company_new_space_industry_research_seminar/Report.pdf',
        kind: 'pdf',
      },
    ],
  },
  {
    id: 'icist-scof',
    name: 'ICIST SCOF',
    description:
      'Founding TF Lead for the Science Communication Festival (SCOF). From initial concept and branding to program design and successful launch.',
    context: { kind: 'organization', name: 'ICIST / SCOF' },
    types: ['strategy'],
    year: '2022',
    image:
      '/projects/2022_organization_icists_scof_science_communication/cover.png',
    imageAlt: 'SCOF 2022 행사 현장',

    links: [
      {
        label: 'Report',
        url: '/projects/2022_organization_icists_scof_science_communication/Report.pdf',
        kind: 'pdf',
      },
      {
        label: 'Design',
        url: '/projects/2022_organization_icists_scof_science_communication/Brochure.pdf',
        kind: 'pdf',
      },
      {
        label: 'External',
        url: '/projects/2022_organization_icists_scof_science_communication/Press.pdf',
        kind: 'pdf',
      },
      {
        label: 'Video',
        url: 'https://www.youtube.com/watch?v=5bC7OLrdrHQ',
        kind: 'video',
      },
    ],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
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
    mentors: [
      { name: 'Jae Young Choi', link: 'https://jaeyoungchoi1.github.io/' },
      { name: 'Seon Gyeom Kim', link: 'https://kimseongyeom.github.io/' },
    ],
  },
  {
    company:
      'KAIST School of Computing - Collaborative Social Technologies Lab (CSTL)',
    title: 'Research Intern',
    start: 'Jun 2025',
    end: 'Aug 2025',
    link: 'https://cstlab.org/',
    id: 'work-kaist-cstl-2025',
    advisor: {
      name: 'Joseph Seering',
      link: 'https://joseph.seering.org/index.html',
    },
    mentors: [{ name: 'Heechan Lee', link: 'https://heechanlee.com/' }],
  },
  {
    company:
      'KAIST Department of Industrial and Systems Engineering - Applied AI Lab',
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

export const RESEARCH_EXPERIENCE: ResearchExperience[] = [
  {
    id: 'research-experience-mit-lids',
    institution: 'MIT Laboratory for Information and Decision Systems (LIDS)',
    role: 'Research Assistant',
    period: 'Spring & Summer 2026',
    advisor: {
      name: 'Asuman Özdağlar',
      link: 'https://asu.mit.edu/',
    },
    mentors: [
      {
        name: 'Chanwoo Park',
        link: 'https://chanwoo-park-official.github.io/',
      },
    ],
    summary:
      'Co-authoring TeamGym and studying how strategic LLM agents behave in multi-level organizational structures under human-inspired constraints.',
    link: 'https://lids.mit.edu/',
    logos: [{ label: 'MIT', domain: 'mit.edu' }],
  },
  {
    id: 'research-experience-aix',
    institution: 'KAIST AI Experience Lab',
    role: 'Research Intern',
    period: 'Fall 2024 & Spring 2025',
    advisor: {
      name: 'Tak Yeon Lee',
      link: 'https://takyeonlee.com/',
    },
    mentors: [
      { name: 'Jae Young Choi', link: 'https://jaeyoungchoi1.github.io/' },
      { name: 'Seon Gyeom Kim', link: 'https://kimseongyeom.github.io/' },
    ],
    summary:
      'Led DramaForge and co-authored Gaze2Prompt, developing AI systems for constraint-aware creative work and gaze-grounded multimodal interaction.',
    link: 'https://ai-experience-lab.github.io/',
    logos: [{ label: 'KAIST', domain: 'kaist.ac.kr' }],
  },
  {
    id: 'research-experience-cstl',
    institution: 'KAIST Collaborative Social Technologies Lab',
    role: 'Research Assistant',
    period: 'Summer 2025',
    advisor: {
      name: 'Joseph Seering',
      link: 'https://joseph.seering.org/index.html',
    },
    mentors: [{ name: 'Heechan Lee', link: 'https://heechanlee.com/' }],
    summary:
      'Co-authored TIDES and built data-processing and annotation workflows for longitudinal, bilingual, multi-party collaboration data.',
    link: 'https://cstlab.org/',
    logos: [{ label: 'KAIST', domain: 'kaist.ac.kr' }],
  },
  {
    id: 'research-experience-mit-sloan',
    institution: 'MIT Sloan School of Management',
    role: 'Research Assistant',
    period: 'Summer 2024 & Winter 2025',
    advisor: {
      name: 'Johan Chu',
      link: 'https://mitsloan.mit.edu/faculty/directory/johan-chu',
    },
    summary:
      'Studied shifts in film-industry participation after Netflix and generative AI, and built an LLM classification pipeline over 112M news articles.',
    link: 'https://mitsloan.mit.edu/faculty/directory/johan-chu',
    logos: [{ label: 'MIT Sloan', domain: 'mitsloan.mit.edu' }],
  },
]

export const RESEARCH_COLLABORATIONS: ResearchCollaboration[] = [
  {
    id: 'collaboration-civic-dialogues',
    title: 'LLM-Assisted Sensemaking Across Civic Dialogues',
    affiliation: 'MIT Media Lab · Center for Constructive Communication',
    collaborators: ['Brandon Roy'],
    period: 'Ongoing',
    summary:
      'Mapping shared themes, disagreements, and perspective structures while evaluating whether LLM-generated completions preserve the diversity of human contributions.',
    logos: [{ label: 'MIT Media Lab', domain: 'media.mit.edu' }],
  },
  {
    id: 'collaboration-gaze-accessibility',
    title: 'Gaze-Grounded Web Accessibility',
    affiliation: 'University of Utah · Carnegie Mellon University',
    collaborators: ['Yue Jiang', 'Jeffrey P. Bigham', 'Jae Young Choi'],
    period: 'Ongoing',
    summary:
      'Aligning eye-tracking traces with interactive web components and designing WebArena tasks for gaze-informed web access for blind and low-vision users.',
    logos: [{ label: 'University of Utah', domain: 'cs.utah.edu' }],
  },
  {
    id: 'collaboration-electoral-trajectories',
    title:
      'Aggregate Electoral Opinion Trajectories with LLM Personas and Media Exposure',
    affiliation: 'MIT Sloan School of Management',
    collaborators: ['Robin Na', 'Michiel Bakker'],
    period: 'Ongoing',
    summary:
      'Extending an initial workshop study into auditable simulations of aggregate electoral opinion trajectories under evolving media exposure.',
    logos: [{ label: 'MIT Sloan', domain: 'mitsloan.mit.edu' }],
  },
]

export const INDUSTRY_EXPERIENCE: WorkExperience[] = [
  {
    company: 'TRAX',
    title: 'Co-founder & Software Engineer',
    start: 'Oct 2025',
    end: 'May 2026',
    link: '#',
    id: 'industry-trax-2025',
  },
  WORK_EXPERIENCE.find((item) => item.id === 'work-companyk-2023')!,
  WORK_EXPERIENCE.find((item) => item.id === 'work-hiconsy-2022')!,
]

export const LEADERSHIP_ACTIVITIES: LeadershipActivity[] = [
  {
    id: 'leadership-toons',
    organization: 'MIT Wellesley Toons',
    role: 'Tenor and Bass',
  },
  {
    id: 'leadership-theatre',
    organization: 'KAIST Acting & Theatre Club',
    role: 'Lead Actor & Design Lead',
  },
  {
    id: 'leadership-gess',
    organization: 'Global Entrepreneurship Summer School',
    role: 'Fellow · Pitch Competition Winner',
  },
  {
    id: 'leadership-leeds-kaist',
    organization: 'Leeds–KAIST International Leadership Program',
    role: 'Selected KAIST Representative',
  },
]

export const ADVISORS: Advisor[] = [
  {
    name: 'Joseph Seering',
    affiliation:
      'KAIST School of Computing - Collaborative Social Technologies Lab (CSTL)',
    role: 'Advisor',
    start: 'Jun 2025',
    end: 'Aug 2025',
    link: 'https://joseph.seering.org/index.html',
    id: 'advisor-joseph-seering',
  },
  {
    name: 'Il-Chul Moon',
    affiliation:
      'KAIST Department of Industrial and Systems Engineering - Applied AI Lab',
    role: 'Advisor',
    start: 'Jun 2024',
    end: 'Aug 2024',
    link: 'https://aai.kaist.ac.kr/bbs/board.php?bo_table=sub2_1&wr_id=3',
    id: 'advisor-il-chul-moon',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Don't Ban the Car. Build the Seat Belt.",
    description:
      'Why banning AI in education is the wrong approach and how we should adapt instead.',
    link: '/blog/dont-ban-the-car-build-the-seat-belt',
    uid: 'blog-dont-ban-the-car-build-the-seat-belt',
    date: 'Apr 8, 2026',
    draft: false,
  },
  {
    title: 'Invisible leash of AirPods',
    description:
      'How wireless technology evolved from a tool of liberation to an invisible leash.',
    link: '/blog/invisible-leash-of-airpods',
    uid: 'blog-invisible-leash-of-airpods',
    date: 'Mar 25, 2026',
    draft: false,
  },
  {
    title: 'ChatGPT is our NEW DOPAMINE',
    description:
      'A reflection on AI dependency, instant gratification, and the value of intellectual struggle.',
    link: '/blog/chatgpt-is-our-new-dopamine',
    uid: 'blog-chatgpt-is-our-new-dopamine',
    date: 'Mar 4, 2026',
    draft: false,
  },
]
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'CV',
    link: '/cv',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jaywoong-jeong/',
  },
  {
    label: 'Digital Garden',
    link: 'https://knowledge.jaywoong.me',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/jaywoong.jeong',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/jaywoong-jeong',
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    title: 'TeamGym (working title)',
    authors: [
      'Chanwoo Park',
      '…',
      'Jaywoong Jeong',
      '…',
      'Asuman Özdağlar',
      'et al.',
    ],
    category: 'preprint',
    venue: 'Preprint · Under review',
    year: '2026',
    status: 'In submission',
    id: 'pub-orgprocessgym-2026',
    tags: [
      'LLM Agents',
      'Multi-Agent Systems',
      'Social Simulation',
      'Group Dynamics',
      'Organizational AI',
    ],
    selected: true,
  },
  {
    title:
      'TIDES: A Longitudinal Bilingual Dataset for Modeling Multi-Party Social Dynamics',
    authors: [
      'Heechan Lee*',
      'Jeonggyu Kang*',
      'Junho Myung',
      'Jaywoong Jeong',
      'Juho Kim',
      'Joseph Seering',
    ],
    category: 'peer-reviewed',
    venue: 'COLM',
    year: '2026',
    status: 'To appear',
    id: 'pub-tides-2026',
    tags: [
      'Computational Social Science',
      'Group Dynamics',
      'Dataset',
      'Multi-Party Interaction',
    ],
    selected: true,
    link: '#',
    links: [
      { label: 'Project Page', url: 'https://tides.cstlab.org' },
      {
        label: 'Dataset',
        url: 'https://huggingface.co/datasets/hclee99/TIDES',
      },
    ],
  },
  {
    title:
      'Simulating Individual Voter Trajectories with LLM Personas and Media Exposure',
    authors: ['Jaywoong Jeong', 'Robin Na'],
    category: 'peer-reviewed',
    venue:
      'COLM Workshop on Social Simulation with LLMs: Fidelity in Applications',
    year: '2026',
    id: 'pub-voter-trajectories-2026',
    tags: [
      'Social Simulation',
      'Computational Social Science',
      'LLM Personas',
      'Political Simulation',
    ],
  },
  {
    title:
      'Let Them Speak: Finding Who Policy Leaves Behind via Blind-Spot-Targeted LLM Simulation',
    authors: ['Jaywoong Jeong'],
    category: 'peer-reviewed',
    venue: 'ACM CHI Workshop on LLM Agent Simulation for Policy (PoliSim)',
    year: '2026',
    description:
      'Proposes Let Them Speak, a framework for ex-ante policy auditing that uses blind-spot-targeted LLM simulation to identify and generate the voices of structurally excluded individuals.',
    tags: [
      'Social Simulation',
      'Computational Social Science',
      'LLM Simulation',
      'Policy Auditing',
      'Algorithmic Fairness',
    ],
    link: '/publications/CHI_2026_PoliSim_Let-Them-Speak.pdf',
    id: 'pub-let-them-speak-2026',
    image: '/publications/let-them-speak-cover.png',
    imageAlt: 'Let Them Speak cover',
  },
  {
    title: 'TRAX: Bridging the Gap in Asynchronous Music Collaboration',
    authors: [
      'Jaywoong Jeong',
      'Dongwoo Kim',
      'Jaehong Jung*',
      'Dohyun Ko*',
      'Jiwon Eom*',
      'Sangmin Lim*',
      'Juchan Lee†',
    ],
    category: 'peer-reviewed',
    venue:
      'ACM CHI Workshop on Herding CATs: Making Sense of Creative Activity Traces',
    year: '2026',
    description:
      'Introduces Trax, a web-based environment that visualizes the opaque trajectories of asynchronous music production by coupling Timestamped Pinning with Automated Audio Diff.',
    tags: [
      'HCI',
      'Group Dynamics',
      'Music Collaboration',
      'Creativity Support Tools',
    ],
    link: '/publications/CHI_2026_Herding-CATs_TRAX- Bridging the Gap in Asynchronous Music Collaboration.pdf',
    id: 'pub-trax-2026',
    image: '/publications/trax-cover.png',
    imageAlt: 'TRAX cover',
  },
  {
    title:
      'Towards Socially Intelligent Agents: An LLM-MARL Framework for Social Deduction Games',
    authors: ['Jaywoong Jeong'],
    category: 'peer-reviewed',
    venue:
      'AAAI Workshop on Advancing Artificial Intelligence through Theory of Mind (ToM4AI)',
    year: '2026',
    status:
      'AAAI Workshop Advancing Artificial Intelligence through Theory of Mind, 2026',
    description:
      'We propose a unified MARL framework that formulates diverse, language-based social deduction games within a shared POMDP. A dense, Theory-of-Mind-inspired reward models how agents influence each other\'s beliefs—encouraging persuasion for "honest" roles and deception for "hidden" ones. This early-stage work aims to establish a foundation for training and evaluating transferable social reasoning skills such as bluffing, cooperation, and misdirection across different games.',
    link: '/publications/Towards Socially Intelligent Agents An LLM-MARL Framework for Social Deduction Games.pdf',
    id: 'pub-tom-aaai-2026',
    tags: [
      'Multi-Agent Systems',
      'Social Simulation',
      'Theory of Mind',
      'Social Intelligence',
      'MARL',
    ],
  },
  {
    title:
      'Structuring the Stage: LLM-Assisted Script Adaptation under Production Constraints',
    authors: [
      'Jaywoong Jeong',
      'Jae Young Choi',
      'Seon Gyeom Kim',
      'Tak Yeon Lee',
    ],
    category: 'preprint',
    venue:
      'Preprint · KAIST Undergraduate Research Program Grand Prix (1st Place)',
    year: '2025',
    status:
      "Preprint, 2025 — KAIST Undergraduate Research Program (URP) Grand Prix (President's Award)",
    description:
      "DramaForge is a system that uses LLMs to analyze theatrical scripts' structural dependencies and propose targeted adaptation options that meet user constraints while supporting collaborative workflows and maintaining human creative control. We are currently conducting an in-lab user study to evaluate UX and workflow impacts.",
    link: '/publications/DramaForge_UnderReview.pdf',
    id: 'pub-dramaforge-2025',
    tags: ['HCI', 'LLM', 'Creativity Support'],
    image: '/publications/DramaForge-Cover.png',
    imageAlt: 'DramaForge cover',
  },
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
    category: 'peer-reviewed',
    venue: 'ACM UbiComp/ISWC Poster · Best Poster Award',
    year: '2025',
    status: 'UbiComp Companion, 2025 — Best Poster Award',
    description:
      'Proposes a method for converting eye-tracking signals into visual prompts to enhance multimodal LLM performance, enabling attention-aware interaction and analysis.',
    link: '/publications/Gaze2Prompt_Turning_Eye_Tracking_Data_into_Visual_Prompts_for_Multimodal_LLMs.pdf',
    id: 'pub-gaze2prompt-2025',
    tags: ['HCI', 'Multimodal', 'Eye Tracking', 'LLM', 'Best Poster Award'],
    image: '/publications/Gaze2Prompt Cover.png',
    imageAlt: 'Gaze2Prompt cover',
    selected: true,
    links: [
      { label: 'Project Page', url: '/research/gaze-aware-interaction' },
      { label: 'DOI', url: 'https://doi.org/10.1145/3714394.3754401' },
    ],
  },
  {
    title:
      'Attention Misdirection: The use of entertainment scandals to bury political scandals',
    authors: ['Johan Chu', 'Jaywoong Jeong'],
    venue: 'Work in progress',
    year: '2024-',
    status: 'Work in progress',
    id: 'pub-attention-misdirection-wip',
    description:
      'We empirically test whether entertainment scandals are used to bury political scandals by leveraging a news archive of 112M+ articles spanning 1990–present. The entire corpus is embedded to form a semantic space, and a hybrid BM25 + vector retrieval pipeline surfaces candidate articles. Retrieved items are then classified with an LLM-as-a-Judge into scandal vs. non-scandal and political vs. entertainment to quantify temporal co-movements and burying patterns at scale.',
    image: '/publications/image.png',
    imageAlt: 'Placeholder image',
  },
]

// Research items (content lives in /app/research/*/page.mdx)
export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'research-dramaforge',
    title: 'DramaForge: LLM-based Screenplay Analysis and Adaptation System',
    link: '/research/dramaforge',
    period: 'Jan 2025 – Present',
    affiliation: 'AI Experience Lab (KAIST Industiral Design)',
    collaborators: ['Prof. Tak Yeon Lee'],
    summary:
      'LLM-based system for analyzing and adapting theatrical scripts under practical constraints; transforms text into structured data and generates constraint-aware adaptation options.',
    topics: ['LLM', 'Theatrcial Language Processing', 'Human-AI-Interaction'],
    image: '/research/dramaforge/DramaForge Cover.png',
    programTag: '2025 Spring URP',
  },
  {
    id: 'research-cstl-project',
    title:
      'Collaborative Conversation: Building a Long-term Group Collaboration Dataset for Training and Evaluating AI Agents',
    link: '/research/cstl-project',
    period: '2025 – Present',
    affiliation: 'CSTL (KAIST School of Computing)',
    collaborators: ['Heechan Lee'],
    summary:
      'Building a long-term, multi-party collaboration dataset to study emergent roles, collaboration quality, and long-horizon memory with integrated surveys and artifacts.',
    topics: [
      'Group Collaboration',
      'Dataset',
      'Emergent Roles',
      'LLM Annotation',
    ],
    image: '/research/cstl-project/c2 cover.png',
    programTag: '2025 Summer',
  },
  {
    id: 'research-sloan-project',
    title: 'Durable Dominance in the Korean Film Industry',
    link: '/research/sloan-project',
    period: '2024 – Present',
    affiliation: 'MIT Sloan School of Management',
    collaborators: ['Ella Chen', 'Prof. Johan Chu'],
    summary:
      'Investigating durable dominance post-Netflix by tracking actors and staff careers across Korean cinema and TV; examining newcomers vs. veterans and industry shocks.',
    topics: ['Durable Dominance', 'Film Industry', 'Careers', 'Netflix'],
    image: '/research/sloan-project/durable-dominance.png',
    programTag: '2024 Summer',
  },
]
