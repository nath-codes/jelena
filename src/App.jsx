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
import debounce from "lodash/debounce";
import { small, medium, large } from "./constants/breakpoints";

import "./constants/inject-global";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakpoint: "small",
      ...theme
    };

    this.setBreakpoint = this.setBreakpoint.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", debounce(this.setBreakpoint, 150));
    this.setBreakpoint();
  }

  setBreakpoint() {
    if (window.matchMedia(`(min-width: ${large})`).matches) {
      this.setState({ breakpoint: "large" });
    } else if (window.matchMedia(`(min-width: ${medium})`).matches) {
      this.setState({ breakpoint: "medium" });
    } else if (window.matchMedia(`(min-width: ${small})`).matches) {
      this.setState({ breakpoint: "small" });
    } else {
      this.setState({ breakpoint: "extra-small" });
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.state}>
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
