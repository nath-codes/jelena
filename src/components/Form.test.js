import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe.only("<Form />", () => {
  const completedState = {
    attending: "No",
    dessert: "foo",
    dietaryRequirements: "foo",
    fullName: "foo",
    main: "foo",
    sending: false,
    sent: true,
    starter: "foo"
  };

  const resetState = {
    attending: "No",
    dessert: "",
    dietaryRequirements: "",
    fullName: "",
    main: "",
    sending: false,
    sent: true,
    starter: ""
  };

  const wrapper = shallow(<Form />);
  const instance = wrapper.instance();

  it("should clear form state on success", () => {
    const response = { status: 200 };

    wrapper.setState(completedState);
    instance.handleResponse(response);

    expect(wrapper.state()).toEqual(resetState);
  });

  it("should not clear form state on error", () => {
    const response = { status: 401 };

    wrapper.setState(completedState);
    instance.handleResponse(response);

    expect(wrapper.state()).toEqual(completedState);
  });
});
