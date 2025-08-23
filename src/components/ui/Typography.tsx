import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { textStyles, media } from '../../styles/mixins';

export const Title = styled.div`
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.primary};
  margin-top: 0;
  text-align: left;
  
  /* 모바일: 폰트 크기 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.lg};
  }
`;

export const SectionTitle = styled.h3`
  font-size: ${theme.fonts.sizes.lg};
  margin-bottom: ${theme.spacing.md};
  margin-top: 0;
  font-weight: ${theme.fonts.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.primary};
  padding-bottom: ${theme.spacing.sm};
  position: relative;
  text-align: left;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${theme.colors.border};
  }
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.lg};
    margin-bottom: ${theme.mobile.spacing.md};
    padding-bottom: ${theme.mobile.spacing.sm};
  }
`;

export const ItemTitle = styled.div`
  font-weight: ${theme.fonts.weights.semibold};
  margin-bottom: 0.3rem;
  color: ${theme.colors.primary};
  
  /* 모바일: 폰트 크기 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.md};
    margin-bottom: ${theme.mobile.spacing.xs};
  }
`;

export const ItemSubtitle = styled.div`
  font-style: normal;
  margin-bottom: 0.3rem;
  color: ${theme.colors.tertiary};
  b, strong {
    font-weight: ${theme.fonts.weights.semibold};
  }
  
  /* 모바일: 폰트 크기와 여백 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.sm};
    margin-bottom: ${theme.mobile.spacing.xs};
  }
`;

export const ItemDate = styled.div`
  font-size: ${theme.fonts.sizes.xs};
  color: ${theme.colors.accent};
  
  /* 모바일: 폰트 크기 조정 */
  ${media.mobile} {
    font-size: ${theme.mobile.fonts.sizes.xs};
  }
`;

export const ItemDetails = styled.div`
  ${textStyles.small}
`;

export const BodyText = styled.div`
  ${textStyles.body}
`;

export const SmallText = styled.div`
  ${textStyles.small}
`;

export const TinyText = styled.div`
  ${textStyles.tiny}
`;
