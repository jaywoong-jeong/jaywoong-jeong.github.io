import { css } from 'styled-components';
import { theme } from './theme';

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

// 기본 텍스트 스타일
export const textStyles = {
  body: css`
    font-size: ${theme.fonts.sizes.lg};
    line-height: 1.6;
    color: ${theme.colors.secondary};
  `,
  small: css`
    font-size: ${theme.fonts.sizes.md};
    line-height: 1.4;
    color: ${theme.colors.light};
  `,
  tiny: css`
    font-size: ${theme.fonts.sizes.xs};
    color: ${theme.colors.accent};
  `
};

// 구분선 스타일
export const dividerStyles = css`
  border: 0;
  height: 1px;
  background-color: ${theme.colors.border};
  margin: ${theme.spacing.xl} 0;
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
`;
