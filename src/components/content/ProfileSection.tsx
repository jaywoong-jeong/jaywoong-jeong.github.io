import React from 'react';
import styled from 'styled-components';
import { ProfileSection as StyledProfileSection } from '../layout/Section';
import { theme } from '../../styles/theme';
import { media, mobileCardStyles } from '../../styles/mixins';
import type { ProfileData } from '../../types';

const ProfileTitle = styled.div`
  font-size: calc(${theme.fonts.sizes.sm} * 1.5);
  font-weight: ${theme.fonts.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.xl};
    margin-bottom: ${theme.mobile.spacing.md};
  }
`;

const ProfileDescription = styled.div`
  font-size: ${theme.fonts.sizes.xs};
  line-height: 1.6;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.lg};
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.md};
    line-height: 1.5;
    margin-bottom: ${theme.mobile.spacing.xl};
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
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.md};
    margin-bottom: ${theme.mobile.spacing.md};
    margin-top: ${theme.mobile.spacing.xl};
  }
`;

// 기존 링크들 (작은 사이즈)
const SmallContactLink = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  font-size: ${theme.fonts.sizes.xs};
  
  &:hover {
    color: ${theme.colors.primary};
  }
  
  /* 모바일: 폰트 크기와 터치 최적화 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.sm};
    padding: ${theme.mobile.spacing.xs} 0;
    display: inline-block;
    min-height: 44px;
    line-height: 44px;
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
  
  /* 모바일: 폰트 크기와 터치 최적화 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.lg};
    padding: ${theme.mobile.spacing.sm} 0;
    display: inline-block;
    min-height: 44px;
    line-height: 44px;
  }
`;

const ContactSection = styled.div`
  margin-top: ${theme.spacing.md};
  
  /* 모바일: 여백 조정 */
  ${media.mobile} {
    margin-top: ${theme.mobile.spacing.md};
  }
`;

const ExternalLinksSection = styled.div`
  /* 모바일: 카드 스타일 적용 */
  ${mobileCardStyles}
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
        <ContactSection>
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
        </ContactSection>
        
        <LinksTitle>EXTERNAL</LinksTitle>
        
        {/* 큰 링크들 */}
        <ExternalLinksSection>
          <LargeLink href="https://blog.example.com" target="_blank">Blog</LargeLink><br />
          <LargeLink href="https://newsletter.example.com" target="_blank">Newsletter</LargeLink><br />
          <LargeLink href="https://jaywoong-jeong.github.io/digital-garden/" target="_blank">Digital Garden</LargeLink><br />
        </ExternalLinksSection>
      </div>
    </StyledProfileSection>
  );
};
