import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Frame from "../components/Frame";
import theme from "../constants/theme";

describe("<Frame />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Frame />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
