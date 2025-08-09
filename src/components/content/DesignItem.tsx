import React from 'react';
import { ItemCard } from '../ui/Card';
import { ItemTitle, ItemSubtitle, ItemDetails } from '../ui/Typography';
import { Link } from '../ui/Button';
import type { ArtworkData } from '../../types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const DesignYear = styled.div`
  font-size: ${theme.fonts.sizes.xl};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.sm};
`;

const DesignImageContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.sm};
  background-color: ${theme.colors.background};
  border-radius: ${theme.layout.borderRadius};
  overflow: hidden;
`;

const DesignImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: ${theme.layout.borderRadius};
`;

const DesignContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseInfo = styled.div`
  font-size: ${theme.fonts.sizes.sm};
  color: ${theme.colors.tertiary};
  font-style: italic;
  margin-bottom: ${theme.spacing.sm};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.sm};
  flex-wrap: wrap;
`;

interface DesignItemProps {
  artwork: ArtworkData;
}

export const DesignItem: React.FC<DesignItemProps> = ({ artwork }) => {
  const resolveSrc = (p?: string) => p; // base is '/'
  return (
    <ItemCard>
      {artwork.image && (
        <DesignImageContainer>
          <DesignImage 
            src={resolveSrc(artwork.image)} 
            alt={artwork.title}
            loading="lazy"
          />
        </DesignImageContainer>
      )}
      <DesignContent>
        <ItemTitle>{artwork.id}. {artwork.title}</ItemTitle>
        <ItemSubtitle>{artwork.description}</ItemSubtitle>
        <DesignYear>{artwork.year}</DesignYear>
        {artwork.course && <CourseInfo>{artwork.course}</CourseInfo>}
        <ItemDetails>{artwork.details}</ItemDetails>
        
        {(artwork.codeLink || artwork.websiteLink || artwork.demoLink) && (
          <LinksContainer>
            {artwork.codeLink && (
              <Link href={artwork.codeLink} target="_blank">[Code]</Link>
            )}
            {artwork.websiteLink && (
              <Link href={artwork.websiteLink} target="_blank">[Website]</Link>
            )}
            {artwork.demoLink && (
              <Link href={artwork.demoLink} target="_blank">[Demo]</Link>
            )}
          </LinksContainer>
        )}
      </DesignContent>
    </ItemCard>
  );
};
