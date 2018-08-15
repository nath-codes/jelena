import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Button from "../components/Button";
import theme from "../constants/theme";

it("renders correctly", () => {
  const tree = renderer.create(<Button theme={theme} />).toJSON();
});

it("renders active state", () => {
  const tree = renderer.create(<Button theme={theme} active={true} />).toJSON();
});
