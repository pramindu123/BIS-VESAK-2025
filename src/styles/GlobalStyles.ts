import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
    font-family: sans-serif;
    background: black;
  }

  @keyframes fadeIn {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export default GlobalStyles; 