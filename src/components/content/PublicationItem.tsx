import React from 'react';
import { ItemCard } from '../ui/Card';
import { ItemTitle, ItemSubtitle, ItemDetails } from '../ui/Typography';
import { Link } from '../ui/Button';
import type { PublicationData } from '../../types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { media, mobileCardStyles } from '../../styles/mixins';

const PublicationJournal = styled.div`
  font-size: ${theme.fonts.sizes.xl};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.sm};
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.lg};
    margin-bottom: ${theme.mobile.spacing.md};
  }
`;

const PublicationContainer = styled.div`
  font-size: 0.67em;
  
  /* 모바일: 폰트 크기 조정 */
  ${media.mobile} {
    font-size: 1em;
  }
`;

const Links = styled.div`
  margin-top: ${theme.spacing.sm};
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  
  /* 모바일: 여백과 간격 조정 */
  ${media.mobile} {
    margin-top: ${theme.mobile.spacing.md};
    gap: ${theme.mobile.spacing.md};
  }
`;

const PublicationCard = styled(ItemCard)`
  /* 모바일: 카드 스타일 적용 */
  ${mobileCardStyles}
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
      <PublicationCard>
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
      </PublicationCard>
    </PublicationContainer>
  );
};
