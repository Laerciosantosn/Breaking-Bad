import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #000;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
`;
