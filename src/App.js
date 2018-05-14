import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { injectGlobal } from "styled-components";
import theme from "./constants/theme";
import Heading from "./components/Heading";

injectGlobal`
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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App" />
      </ThemeProvider>
    );
  }
}

export default App;
