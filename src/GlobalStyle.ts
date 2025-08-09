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
  }

  * {
    box-sizing: inherit;
  }

  html {
    overscroll-behavior: none;
    font-size: 125%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;

