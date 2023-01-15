import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'System-ui', sans-serif;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
