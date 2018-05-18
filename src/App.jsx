import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import Border from "./components/Border";
import Hero from "./components/Hero";
import Rsvp from "./components/Rsvp";
import Timetable from "./components/Timetable";
import Directions from "./components/Directions";
import Gifts from "./components/Gifts";
import "./constants/inject-global";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Border />
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
