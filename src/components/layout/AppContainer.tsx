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
`;
