import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Map from "../../components/Map";
import theme from "../../constants/theme";

describe("<Map />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Map theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders active state", () => {
    const tree = renderer.create(<Map theme={theme} active={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
