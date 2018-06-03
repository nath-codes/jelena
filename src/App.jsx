import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import Frame from "./components/Frame";
import Hero from "./components/Hero";
import Rsvp from "./components/Rsvp";
import Timetable from "./components/Timetable";
import Location from "./components/Location";
import Gifts from "./components/Gifts";
import Header from "./components/Header";
import "./constants/inject-global";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Frame position="top-left" />
          <Frame position="top-right" />
          <Frame position="bottom-left" />
          <Frame position="bottom-right" />
          <Hero />
          <Rsvp />
          <Location />
          <Timetable />
          <Gifts />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
