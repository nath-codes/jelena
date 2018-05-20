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
    color: #333;
    font-family: 'montserrat';
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  img {
    height: 100%;
    width: auto;
  }
`;
