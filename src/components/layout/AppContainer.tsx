import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: ${theme.layout.gridColumns};
  height: 100vh;
  background-color: ${theme.colors.background};
  overflow: hidden;
  
  /* Safari/Firefox zoom 대안: 루트 스케일 적용 방지 */
  transform: none;
  position: relative;
  padding-bottom: 32px; /* footer 공간 확보 */
`;

export const Footer = styled.div`
  position: absolute;
  left: ${theme.spacing.md};
  bottom: ${theme.spacing.xs};
  font-size: ${theme.fonts.sizes.xs};
  color: ${theme.colors.accent};
`;
