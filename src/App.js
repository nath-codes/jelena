import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import theme from "./constants/theme";
import Hero from "./components/Hero";

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
        <div className="App">
          <Hero />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
