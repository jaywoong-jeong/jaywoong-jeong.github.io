import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { media } from '../../styles/mixins';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: ${theme.layout.gridColumns};
  height: 100vh;
  background-color: ${theme.colors.background};
  overflow: hidden;
  
  /* Safari/Firefox zoom 대안: 루트 스케일 적용 방지 */
  transform: none;
  
  /* 모바일: 세로 스택 레이아웃 */
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    grid-template-columns: none;
    overflow: auto;
    height: auto;
    min-height: 100vh;
    
    /* 모바일에서 별도 CV 컬럼 숨기기 (중앙 컬럼에서 CV 표시) */
    .cv-column {
      display: none;
    }
  }
  
  /* 태블릿: 2열 레이아웃 (Profile + Content) */
  ${media.tablet} {
    grid-template-columns: 0.618fr 1.382fr;
    height: 100vh;
    overflow: hidden;
    
    /* 태블릿에서 CV 컬럼 숨기기 */
    .cv-column {
      display: none;
    }
  }
`;
