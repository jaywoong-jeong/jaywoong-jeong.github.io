import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ProfileSection as StyledProfileSection } from '../layout/Section';
import { SectionCard } from '../ui/Card';

// CV 좌우 배치 스타일 컴포넌트들
const CVSection = styled.div`
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${theme.colors.border};
  }
  
  &:last-child::after {
    display: none;
  }
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing.sm};
  align-items: flex-start;
`;

const SectionTitle = styled.div`
  font-family: ${theme.fonts.system};
  font-size: ${theme.fonts.sizes.sm};
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.medium};
`;

const SectionContent = styled.div`
  font-family: ${theme.fonts.system};
  font-size: ${theme.fonts.sizes.xs};
  line-height: 1.45;
  white-space: pre-line;
  color: ${theme.colors.secondary};
  
  p {
    margin: 0 0 1rem 0;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;



import { useMarkdownData } from '../../hooks/useMarkdownData';

export const CVSectionComponent: React.FC = () => {
  const { cv } = useMarkdownData();
  return (
    <StyledProfileSection>
      {cv.map((sec, idx) => (
        <CVSection key={idx}>
          <SectionGrid>
            <SectionTitle>{sec.title}</SectionTitle>
            <SectionContent>
              {sec.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </SectionContent>
          </SectionGrid>
        </CVSection>
      ))}
    </StyledProfileSection>
  );
};
