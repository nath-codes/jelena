import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Rsvp from "../components/Rsvp";
import theme from "../constants/theme";

describe("<Rsvp />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Rsvp />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
