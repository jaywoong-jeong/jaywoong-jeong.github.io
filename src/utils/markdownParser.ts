import type { ProjectData, PublicationData, ArtworkData, ProfileData, CVSectionEntry } from '../types';

// 간단한 마크다운 파서 (gray-matter 대신 사용)
function parseMarkdownContent(content: string) {
  // frontmatter가 있다면 제거하고 content만 반환
  let processedContent = content;
  const parts = content.split('---');
  if (parts.length >= 3) {
    processedContent = parts.slice(2).join('---');
  }
  
  // 첫 번째 # 헤더 제거 (예: # Artwork, # Projects 등)
  const lines = processedContent.split('\n');
  const filteredLines = lines.filter(line => !line.trim().match(/^# /));
  
  return filteredLines.join('\n');
}

// 마크다운에서 프로젝트 섹션을 파싱하는 함수
export function parseProjectsMarkdown(content: string): ProjectData[] {
  const markdownContent = parseMarkdownContent(content);
  const sections = markdownContent.split('## ').filter(section => section.trim());
  
  return sections.map((section, index) => {
    const lines = section.split('\n');
    const title = lines[0].trim();
    
    // 메타데이터 추출
    const metadata: Record<string, string> = {};
    let descriptionStart = 1;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('- **') && line.includes('**:')) {
        const key = line.match(/\*\*(.*?)\*\*/)?.[1].toLowerCase();
        const value = line.split('**:')[1]?.trim();
        if (key && value) {
          metadata[key] = value;
        }
      } else if (line && !line.startsWith('- **')) {
        descriptionStart = i;
        break;
      }
    }
    
    const description = lines.slice(descriptionStart).join('\n').trim();
    
    return {
      id: index + 1,
      title,
      type: metadata['type'] || '',
      organization: metadata['organization'] || '',
      duration: metadata['duration'] || '',
      advisor: metadata['advisor'],
      award: metadata['award'],
      imageUrl: metadata['image'] || '',
      moreLink: metadata['more'] || '#',
      description
    };
  });
}

// 마크다운에서 출판물 섹션을 파싱하는 함수
export function parsePublicationsMarkdown(content: string): PublicationData[] {
  const markdownContent = parseMarkdownContent(content);
  const sections = markdownContent.split('## ').filter(section => section.trim());
  
  return sections.map((section, index) => {
    const lines = section.split('\n');
    const title = lines[0].trim();
    
    // 메타데이터 추출
    const metadata: Record<string, string> = {};
    let descriptionStart = 1;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('- **') && line.includes('**:')) {
        const key = line.match(/\*\*(.*?)\*\*/)?.[1].toLowerCase();
        const value = line.split('**:')[1]?.trim();
        if (key && value) {
          metadata[key] = value;
        }
      } else if (line && !line.startsWith('- **')) {
        descriptionStart = i;
        break;
      }
    }
    
    const description = lines.slice(descriptionStart).join('\n').trim();
    
    return {
      id: index + 1,
      title,
      authors: metadata['authors'] || '',
      journal: metadata['journal'] || '',
      year: metadata['year'] || '',
      details: description,
      paperLink: metadata['paper'],
      codeLink: metadata['code']
    };
  });
}

// 마크다운에서 작품 섹션을 파싱하는 함수
export function parseArtworkMarkdown(content: string): ArtworkData[] {
  const markdownContent = parseMarkdownContent(content);
  const sections = markdownContent.split('## ').filter(section => section.trim());
  
  return sections.map((section, index) => {
    const lines = section.split('\n');
    const title = lines[0].trim();
    
    // 메타데이터 추출
    const metadata: Record<string, string> = {};
    let descriptionStart = 1;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('- **') && line.includes('**:')) {
        const key = line.match(/\*\*(.*?)\*\*/)?.[1].toLowerCase();
        const value = line.split('**:')[1]?.trim();
        if (key && value) {
          metadata[key] = value;
        }
      } else if (line && !line.startsWith('- **')) {
        descriptionStart = i;
        break;
      }
    }
    
    const description = lines.slice(descriptionStart).join('\n').trim();
    
    return {
      id: index + 1,
      title,
      description: metadata['description'] || '',
      year: metadata['year'] || '',
      details: description,
      image: metadata['image'],
      thumbnail: metadata['thumbnail'],
      course: metadata['course'],
      codeLink: metadata['code'],
      websiteLink: metadata['website'],
      demoLink: metadata['demo']
    };
  });
}

// 마크다운에서 프로필 섹션을 파싱하는 함수
export function parseProfileMarkdown(content: string): ProfileData {
  const processedContent = parseMarkdownContent(content);
  const sections = processedContent.split('## ');
  
  let name = '';
  const contact = {
    emails: [] as string[],
    linkedin: undefined as string | undefined,
    x: undefined as string | undefined,
    instagram: undefined as string | undefined,
  };
  
  let about = '';
  
  sections.forEach(section => {
    const lines = section.split('\n').filter(line => line.trim());
    const sectionTitle = lines[0]?.trim().toLowerCase();
    
    if (sectionTitle === 'name') {
      name = lines.slice(1).join(' ').trim();
    } else if (sectionTitle === 'contact') {
      lines.slice(1).forEach(line => {
        if (line.includes('**Email**:')) {
          const email = line.split('**Email**:')[1]?.trim();
          if (email) contact.emails.push(email);
        } else if (line.includes('**LinkedIn**:')) {
          contact.linkedin = line.split('**LinkedIn**:')[1]?.trim();
        } else if (line.includes('**X**:')) {
          contact.x = line.split('**X**:')[1]?.trim();
        } else if (line.includes('**Instagram**:')) {
          contact.instagram = line.split('**Instagram**:')[1]?.trim();
        }
      });
    } else if (sectionTitle === 'about') {
      about = lines.slice(1).join(' ').trim();
    }
  });
  
  return { name, contact, about };
}

// 마크다운에서 CV 섹션을 파싱하는 함수
// 형식:
// ## Section Title
// Paragraph line 1
// Paragraph line 2
export function parseCVMarkdown(content: string): CVSectionEntry[] {
  const markdownContent = parseMarkdownContent(content);
  const sections = markdownContent.split('## ').filter(s => s.trim());
  return sections.map(section => {
    const lines = section.split('\n');
    const title = lines[0].trim();
    const paragraphs: string[] = [];
    let current: string[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim() === '') {
        if (current.length) {
          paragraphs.push(current.join('\n'));
          current = [];
        }
      } else {
        current.push(line);
      }
    }
    if (current.length) paragraphs.push(current.join('\n'));
    return { title, paragraphs };
  });
}
