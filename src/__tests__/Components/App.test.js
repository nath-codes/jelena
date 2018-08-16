import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import App from "../../App";

const matchMediaMock = () => {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

window.matchMedia = window.matchMedia || matchMediaMock;

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
