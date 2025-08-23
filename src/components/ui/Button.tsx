import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { media, touchOptimized } from '../../styles/mixins';

export const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-top: 0;
  position: relative;
  
  /* 모바일: 터치 최적화 */
  ${media.mobile} {
    ${touchOptimized}
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${theme.colors.accent};
  font-size: ${theme.fonts.sizes.xs};
  cursor: pointer;
  
  &:hover {
    color: ${theme.colors.light};
  }
  
  /* 모바일: 폰트 크기와 터치 최적화 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.sm};
    ${touchOptimized}
    padding: ${theme.mobile.spacing.xs} 0;
  }
`;

export const SkillTag = styled.span`
  background-color: ${theme.colors.backgroundCard};
  padding: 0.15rem 0.4rem;
  border-radius: ${theme.layout.borderRadius};
  font-size: ${theme.fonts.sizes.xs};
  color: ${theme.colors.light};
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.xs};
    padding: ${theme.mobile.spacing.xs} ${theme.mobile.spacing.sm};
    border-radius: ${theme.layout.borderRadiusLarge};
  }
`;
