import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { media, mobileCardStyles, touchOptimized } from '../styles/mixins';
import { Card, InfoGrid } from './ui/Card';
import { Link } from './ui/Button';

interface ProjectItemProps {
  imageUrl: string;
  imageAlt: string;
  projectNumber: string;
  details: React.ReactNode;
  moreLink: string;
}

const ProjectImageContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.md};
  background-color: ${theme.colors.background};
  border-radius: ${theme.layout.borderRadius};
  overflow: hidden;
  
  /* 모바일: 이미지 높이와 여백 조정 */
  ${media.mobile} {
    height: 200px;
    margin-bottom: ${theme.mobile.spacing.md};
    border-radius: ${theme.layout.borderRadiusLarge};
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: ${theme.layout.borderRadius};
  
  /* 모바일: 이미지 최적화 */
  ${media.mobile} {
    border-radius: ${theme.layout.borderRadiusLarge};
  }
`;

const ProjectNumber = styled.div`
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.primary};
  
  /* 모바일: 폰트 크기 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.md};
    margin-bottom: ${theme.mobile.spacing.sm};
  }
`;

const Details = styled.div`
  color: ${theme.colors.secondary};
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.sm};
    line-height: 1.5;
  }
`;

const ProjectCard = styled(Card)`
  /* 모바일: 카드 스타일 적용 */
  ${mobileCardStyles}
`;

function ProjectItem({ imageUrl, imageAlt, projectNumber, details, moreLink }: ProjectItemProps) {
  const resolveSrc = (p: string) => p; // base is '/'
  return (
    <ProjectCard>
      <a href={moreLink}>
        <ProjectImageContainer>
          <ProjectImage src={resolveSrc(imageUrl)} alt={imageAlt} />
        </ProjectImageContainer>
      </a>
      <InfoGrid>
        <ProjectNumber>{projectNumber}</ProjectNumber>
        <Details>
          {details}
          <br /><br />
          <Link href={moreLink}>[More..]</Link>
        </Details>
      </InfoGrid>
    </ProjectCard>
  );
}

export default ProjectItem;



