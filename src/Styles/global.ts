import { createGlobalStyle } from 'styled-components';

import GithubBackground from '../Assets/1587379725719-attachment.svg';

export default createGlobalStyle`
  :root {
    font-size: 16px;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url(${GithubBackground});
    background-repeat: no-repeat;
    background-position: 70% top;
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-size: 1rem;
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
