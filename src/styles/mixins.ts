import { css } from 'styled-components';
import { theme } from './theme';

// 반응형 미디어 쿼리 유틸리티
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  mobileAndTablet: `@media (max-width: ${theme.breakpoints.tablet})`
};

// 공통 스크롤 스타일
export const scrollStyles = css`
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

// 모바일 최적화된 스크롤 스타일
export const mobileScrollStyles = css`
  ${scrollStyles}
  -webkit-overflow-scrolling: touch; // iOS 부드러운 스크롤
  scroll-behavior: smooth;
`;

// 기본 텍스트 스타일
export const textStyles = {
  body: css`
    font-size: ${theme.fonts.sizes.lg};
    line-height: 1.6;
    color: ${theme.colors.secondary};
    
    ${media.mobile} {
      font-size: ${theme.mobile.fonts.sizes.md};
      line-height: 1.5;
    }
  `,
  small: css`
    font-size: ${theme.fonts.sizes.md};
    line-height: 1.4;
    color: ${theme.colors.light};
    
    ${media.mobile} {
      font-size: ${theme.mobile.fonts.sizes.sm};
    }
  `,
  tiny: css`
    font-size: ${theme.fonts.sizes.xs};
    color: ${theme.colors.accent};
    
    ${media.mobile} {
      font-size: ${theme.mobile.fonts.sizes.xs};
    }
  `
};

// 구분선 스타일
export const dividerStyles = css`
  border: 0;
  height: 1px;
  background-color: ${theme.colors.border};
  margin: ${theme.spacing.xl} 0;
  
  ${media.mobile} {
    margin: ${theme.mobile.spacing.lg} 0;
  }
`;

// 섹션 제목 스타일
export const sectionTitleStyles = css`
  font-size: ${theme.fonts.sizes.sm};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.fonts.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.accent};
  padding-bottom: ${theme.spacing.sm};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - ${theme.spacing.xxxl});
    height: 1px;
    background-color: ${theme.colors.border};
  }
  
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.md};
    margin-bottom: ${theme.mobile.spacing.md};
    padding-bottom: ${theme.mobile.spacing.sm};
    
    &::after {
      width: calc(100% - ${theme.mobile.spacing.xxxl});
    }
  }
`;

// 아이템 구분선 스타일
export const itemDividerStyles = css`
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - ${theme.spacing.xxxl});
    height: 1px;
    background-color: ${theme.colors.border};
  }
  
  ${media.mobile} {
    &:not(:last-child)::after {
      width: calc(100% - ${theme.mobile.spacing.xxxl});
    }
  }
`;

// 모바일 터치 최적화 스타일
export const touchOptimized = css`
  ${media.mobile} {
    min-height: 44px; // 터치 최소 영역
    min-width: 44px;
    cursor: pointer;
    
    &:active {
      opacity: 0.7;
      transform: scale(0.98);
    }
  }
`;

// 모바일 카드 스타일
export const mobileCardStyles = css`
  ${media.mobile} {
    background: ${theme.colors.backgroundCard};
    border-radius: ${theme.layout.borderRadiusLarge};
    padding: ${theme.mobile.spacing.md};
    margin-bottom: ${theme.mobile.spacing.md};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;
