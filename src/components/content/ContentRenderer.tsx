import React from 'react';
import ProjectItem from '../ProjectItem';
import { PublicationItem } from './PublicationItem';
import { DesignItem } from './DesignItem';
import { Hr } from '../ui/Divider';
import { Loading } from '../common/Loading';
import { ErrorMessage } from '../common/ErrorMessage';
import type { ProjectData, PublicationData, ArtworkData } from '../../types';
import type { MenuType } from '../../constants/config';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ModernBody = styled.div`
  font-family: ${theme.fonts.modern};
`;

interface ContentRendererProps {
  activeMenu: MenuType;
  projects: ProjectData[];
  publications: PublicationData[];
  artwork: ArtworkData[];
  loading: boolean;
  error: string | null;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({
  activeMenu,
  projects,
  publications,
  artwork,
  loading,
  error
}) => {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  // 프로젝트 데이터를 ProjectItem 컴포넌트에 맞는 형태로 변환
  const transformProjectData = (project: ProjectData) => ({
    imageUrl: project.imageUrl,
    imageAlt: project.title,
    projectNumber: `${project.id}. ${project.title}`,
    details: (
      <>
        <i>{project.type}</i><br />
        <i>{project.organization}</i><br />
        ({project.duration})<br />
        {project.advisor && <>{project.advisor}<br /></>}
        {project.award && <>{project.award}<br /></>}
        <br />
        {project.description}
      </>
    ),
    moreLink: project.moreLink
  });

  switch (activeMenu) {
    case 'projects':
      return (
        <ModernBody>
          {projects.map((project, index) => {
            const transformedProject = transformProjectData(project);
            return (
              <React.Fragment key={project.id}>
                <ProjectItem
                  imageUrl={transformedProject.imageUrl}
                  imageAlt={transformedProject.imageAlt}
                  projectNumber={transformedProject.projectNumber}
                  details={transformedProject.details}
                  moreLink={transformedProject.moreLink}
                />
                {index < projects.length - 1 && <Hr />}
              </React.Fragment>
            );
          })}
        </ModernBody>
      );
    case 'publications':
      return (
        <ModernBody>
          {publications.map((pub) => (
            <PublicationItem key={pub.id} publication={pub} />
          ))}
        </ModernBody>
      );
    case 'design':
      return (
        <ModernBody>
          {artwork.map((art, index) => (
            <React.Fragment key={art.id}>
              <DesignItem artwork={art} />
              {index < artwork.length - 1 && <Hr />}
            </React.Fragment>
          ))}
        </ModernBody>
      );
    case 'digitalGarden':
      return (
        <ModernBody>
          <div style={{ fontSize: theme.fonts.sizes.sm, color: theme.colors.secondary }}>
            Digital Garden is coming soon. This view stays in the current page without navigation.
          </div>
        </ModernBody>
      );
    default:
      return null;
  }
};
