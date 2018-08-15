import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Button from "../components/Button";
import theme from "../constants/theme";

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders active state", () => {
    const tree = renderer
      .create(<Button theme={theme} active={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
