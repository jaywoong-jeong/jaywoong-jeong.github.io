import React from 'react';
import styled from 'styled-components';
import { ProfileSection as StyledProfileSection } from '../layout/Section';
import { theme } from '../../styles/theme';
import type { ProfileData } from '../../types';

const ProfileTitle = styled.div`
  font-size: calc(${theme.fonts.sizes.sm} * 1.5);
  font-weight: ${theme.fonts.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ProfileDescription = styled.div`
  font-size: ${theme.fonts.sizes.xs};
  line-height: 1.6;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.lg};
`;

const ContactTitle = styled.div`
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ContactLink = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  font-size: ${theme.fonts.sizes.xs};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const ContactText = styled.span`
  color: ${theme.colors.secondary};
  font-size: ${theme.fonts.sizes.xs};
`;

// CV 섹션과 동일한 스타일의 섹션 구분
const ProfileSectionDiv = styled.div`
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

const LinksTitle = styled.div`
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
`;

// 기존 링크들 (작은 사이즈)
const SmallContactLink = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  font-size: ${theme.fonts.sizes.xs};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

// 큰 링크들 (블로그, 뉴스레터, 디지털 가든)
const LargeLink = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  font-size: ${theme.fonts.sizes.md};
  font-weight: ${theme.fonts.weights.medium};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

interface ProfileSectionProps {
  data: ProfileData | null;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => {
  if (!data) {
    return (
      <StyledProfileSection>
        <ProfileDescription>Loading profile...</ProfileDescription>
      </StyledProfileSection>
    );
  }

  const { name, contact, about } = data;
  
  return (
    <StyledProfileSection>
      <div>
        <ProfileTitle>{name.toUpperCase()}</ProfileTitle>
        <ProfileDescription>
          {about}
        </ProfileDescription>
        
        {/* 기존 링크들을 About 바로 밑에 */}
        <div style={{ marginTop: theme.spacing.md }}>
          {/* 이메일들 */}
          {contact.emails.map((email, index) => (
            <React.Fragment key={index}>
              <SmallContactLink href={`mailto:${email}`}>{email}</SmallContactLink><br />
            </React.Fragment>
          ))}
          
          {/* 소셜 링크들 */}
          {contact.linkedin && (
            <>
              <SmallContactLink href={contact.linkedin} target="_blank">LinkedIn</SmallContactLink><br />
            </>
          )}
          {contact.instagram && (
            <>
              <SmallContactLink href={`https://instagram.com/${contact.instagram}`} target="_blank">Instagram</SmallContactLink><br />
            </>
          )}
          {contact.x && (
            <>
              <SmallContactLink href={contact.x} target="_blank">X</SmallContactLink><br />
            </>
          )}
        </div>
        
        <LinksTitle>EXTERNAL</LinksTitle>
        
        {/* 큰 링크들 */}
        <LargeLink href="https://blog.example.com" target="_blank">Blog</LargeLink><br />
        <LargeLink href="https://newsletter.example.com" target="_blank">Newsletter</LargeLink><br />
        <LargeLink href="https://garden.example.com" target="_blank">Digital Garden</LargeLink><br />
      </div>
    </StyledProfileSection>
  );
};
