import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
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
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: ${theme.layout.borderRadius};
`;

const ProjectNumber = styled.div`
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.primary};
`;

const Details = styled.div`
  color: ${theme.colors.secondary};
`;

function ProjectItem({ imageUrl, imageAlt, projectNumber, details, moreLink }: ProjectItemProps) {
  return (
    <Card>
      <a href={moreLink}>
        <ProjectImageContainer>
          <ProjectImage src={imageUrl} alt={imageAlt} />
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
    </Card>
  );
}

export default ProjectItem;

