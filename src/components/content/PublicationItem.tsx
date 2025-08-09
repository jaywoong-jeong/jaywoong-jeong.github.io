import React from 'react';
import { ItemCard } from '../ui/Card';
import { ItemTitle, ItemSubtitle, ItemDetails } from '../ui/Typography';
import { Link } from '../ui/Button';
import type { PublicationData } from '../../types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const PublicationJournal = styled.div`
  font-size: ${theme.fonts.sizes.xl};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.sm};
`;

const PublicationContainer = styled.div`
  font-size: 0.67em;
`;

const Links = styled.div`
  margin-top: ${theme.spacing.sm};
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
`;

interface PublicationItemProps {
  publication: PublicationData;
}

export const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  const renderAuthorsBold = (authors: string) => {
    const NAME = 'Jaywoong Jeong';
    const parts = authors.split(new RegExp(`(${NAME})`, 'g'));
    return (
      <>
        {parts.map((part, idx) =>
          part === NAME ? <strong key={idx}>{part}</strong> : <span key={idx}>{part}</span>
        )}
      </>
    );
  };

  return (
    <PublicationContainer>
      <ItemCard>
        <ItemTitle>{publication.id}. {publication.title}</ItemTitle>
        <ItemSubtitle>{renderAuthorsBold(publication.authors)}</ItemSubtitle>
        <PublicationJournal>{publication.journal}, {publication.year}</PublicationJournal>
        <ItemDetails>{publication.details}</ItemDetails>
        {(publication.paperLink || publication.codeLink) && (
          <Links>
            {publication.paperLink && (
              <Link href={publication.paperLink} target="_blank">[Paper]</Link>
            )}
            {publication.codeLink && (
              <Link href={publication.codeLink} target="_blank">[Code]</Link>
            )}
          </Links>
        )}
      </ItemCard>
    </PublicationContainer>
  );
};
