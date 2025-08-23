import { createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.system};
    background-color: ${theme.colors.backgroundLight};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.primary};
    overflow: hidden;
    overscroll-behavior: none;
    
    /* 모바일 최적화 */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  * {
    box-sizing: inherit;
  }

  html {
    overscroll-behavior: none;
    font-size: 125%;
    
    /* 모바일에서 폰트 크기 자동 조정 방지 */
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  /* 모바일 터치 최적화 */
  button, input, textarea {
    -webkit-appearance: none;
    border-radius: 0;
  }
  
  /* 모바일에서 스크롤바 숨김 */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* 모바일에서 선택 텍스트 스타일 */
  ::selection {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.background};
  }
`;

export default GlobalStyle;



