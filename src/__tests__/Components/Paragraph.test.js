import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Paragraph from "../../components/Paragraph";
import theme from "../../constants/theme";

describe("<Paragraph />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Paragraph theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
