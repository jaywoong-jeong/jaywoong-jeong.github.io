// 데이터 타입 정의를 별도 파일로 분리
export interface ProjectData {
  id: number;
  title: string;
  type: string;
  organization: string;
  duration: string;
  advisor?: string;
  award?: string;
  imageUrl: string;
  moreLink: string;
  description: string;
}

export interface PublicationData {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  details: string;
  paperLink?: string;
  codeLink?: string;
}

export interface ArtworkData {
  id: number;
  title: string;
  description: string;
  year: string;
  details: string;
  image?: string;
  thumbnail?: string;
  course?: string;
  codeLink?: string;
  websiteLink?: string;
  demoLink?: string;
}

export interface ProfileData {
  name: string;
  contact: {
    emails: string[];
    linkedin?: string;
    x?: string;
    instagram?: string;
  };
  about: string;
}

export interface CVSectionEntry {
  title: string;
  paragraphs: string[];
}
