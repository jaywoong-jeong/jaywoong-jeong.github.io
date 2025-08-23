import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { scrollStyles, mobileScrollStyles, media } from '../../styles/mixins';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  
  &:not(:last-child) {
    border-right: 1px solid ${theme.colors.border};
  }
  
  /* 모바일: 전체 너비, 세로 스택 */
  ${media.mobile} {
    height: auto;
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.border};
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  /* 태블릿: 기존 스타일 유지 */
  ${media.tablet} {
    height: 100vh;
    overflow: hidden;
    
    &:not(:last-child) {
      border-right: 1px solid ${theme.colors.border};
      border-bottom: none;
    }
  }
`;

export const ColumnContent = styled.div`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.xxxl} ${theme.spacing.md};
  ${scrollStyles}
  
  /* 모바일: 여백과 스크롤 최적화 */
  ${media.mobile} {
    padding: ${theme.spacing.md};
    padding-bottom: calc(${theme.spacing.md} + 80px); /* 하단 네비게이션 여백 */
    ${mobileScrollStyles}
  }
`;

export const ColumnFooter = styled.div`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: ${theme.fonts.sizes.xs};
  color: ${theme.colors.accent};
  
  /* 모바일: 여백 조정 */
  ${media.mobile} {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.mobile.fonts.sizes.xs};
  }
`;
