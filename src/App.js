import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";

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
