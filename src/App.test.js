import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const matchMediaMock = () => {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

window.matchMedia = window.matchMedia || matchMediaMock;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
