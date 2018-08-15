import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../../App";
import { small, medium, large } from "../../constants/breakpoints";

const matchMediaMock = () => {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

window.matchMedia = window.matchMedia || matchMediaMock;

describe.skip("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  //   it.only("should set 'extra-small' breakpoint by default", () => {
  //     window.matchMedia = breakpoint => {
  //       matches() {

  //       }
  //       ;
  //     };
  //     const wrapper = shallow(<App />);
  //     const foo = "extra-small";
  //     expect(wrapper.state().breakpoint).toEqual(foo);
  //   });
});
