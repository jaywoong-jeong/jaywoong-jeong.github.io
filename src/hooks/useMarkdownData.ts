import { useState, useEffect } from 'react';
import { 
  parseProjectsMarkdown, 
  parsePublicationsMarkdown, 
  parseArtworkMarkdown,
  parseProfileMarkdown,
  parseCVMarkdown
} from '../utils/markdownParser';
import type { ProjectData, PublicationData, ArtworkData, ProfileData, CVSectionEntry } from '../types';

// 마크다운 파일을 불러오는 훅
export function useMarkdownData() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [publications, setPublications] = useState<PublicationData[]>([]);
  const [artwork, setArtwork] = useState<ArtworkData[]>([]);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [cv, setCv] = useState<CVSectionEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // 동적 import를 사용하여 마크다운 파일들을 불러옵니다
        const [projectsModule, publicationsModule, designModule, profileModule, cvModule] = await Promise.all([
          import('../data/projects.md?raw'),
          import('../data/publications.md?raw'),
          import('../data/design.md?raw'),
          import('../data/profile.md?raw'),
          import('../data/cv.md?raw')
        ]);

        const projectsResponse = projectsModule.default;
        const publicationsResponse = publicationsModule.default;
        const designResponse = designModule.default;
        const profileResponse = profileModule.default;
        const cvResponse = cvModule.default;

        const parsedProjects = parseProjectsMarkdown(projectsResponse);
        const parsedPublications = parsePublicationsMarkdown(publicationsResponse);
        const parsedArtwork = parseArtworkMarkdown(designResponse);
        const parsedProfile = parseProfileMarkdown(profileResponse);
        const parsedCv = parseCVMarkdown(cvResponse);

        setProjects(parsedProjects);
        setPublications(parsedPublications);
        setArtwork(parsedArtwork);
        setProfile(parsedProfile);
        setCv(parsedCv);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { projects, publications, artwork, profile, cv, loading, error };
}
