import { normalize } from "polished";
import { injectGlobal } from "styled-components";

export default injectGlobal`
  ${normalize()}
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: '#333';
    font-family: 'montserrat';
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  img {
    height: auto;
    max-width: 100%;
  }
`;
