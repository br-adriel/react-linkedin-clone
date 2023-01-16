import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'System-ui', sans-serif;
  }
  
  body {
    background: #F3F2EF;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
  }
  
  a {
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
  }
  `;

export default GlobalStyle;
