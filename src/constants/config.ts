export const APP_CONFIG = {
  defaultMenu: 'publications',
  menus: ['projects', 'publications', 'design'] as const,
  contact: {
    address: '291 Daehak-ro, Yuseong-gu',
    city: 'Daejeon, Republic of Korea',
    phone: '010-8998-7360',
    email: 'jaywoong.jeong@gmail.com',
    emailKaist: 'jaywoong.jeong@kaist.ac.kr',
    website: 'hello@example.com',
    instagram: 'Instagram'
  },
  profile: {
    description: `Industrial and Systems Engineering student at KAIST with a focus on AI and machine learning. 
    Currently conducting research on AI Persona and Social Simulacra at the AI Experience Lab, 
    while also working on NLP analysis at MIT Sloan. Passionate about developing innovative 
    solutions that bridge technology and human experience.`
  }
} as const;

export type MenuType = typeof APP_CONFIG.menus[number];
