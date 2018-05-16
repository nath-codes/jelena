import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import theme from "./constants/theme";
import Hero from "./components/Hero";
import Rsvp from "./components/Rsvp";
import Timetable from "./components/Timetable";
import Directions from "./components/Directions";
import Gifts from "./components/Gifts";

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
          <Rsvp />
          <Timetable />
          <Directions />
          <Gifts />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
