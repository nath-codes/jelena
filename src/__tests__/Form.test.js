import React from "react";
import { shallow } from "enzyme";
import Form from "../components/Form";

describe.skip("<Form />", () => {
  describe("updating state", () => {
    it("should set checkbox inputs to state", () => {
      const wrapper = shallow(<Form />);
      const instance = wrapper.instance();
      const checked = "foo";
      const property = "dessert";

      const eventMock = {
        target: {
          type: "checkbox",
          name: property,
          checked
        }
      };

      instance.handleChange(eventMock);

      expect(wrapper.state(property)).toEqual(checked);
    });

    it("should set text inputs to state", () => {
      const wrapper = shallow(<Form />);
      const instance = wrapper.instance();
      const value = "foo";
      const property = "name";

      const eventMock = {
        target: {
          type: "whatever",
          name: property,
          value
        }
      };

      instance.handleChange(eventMock);

      expect(wrapper.state(property)).toEqual(value);
    });
  });

  describe("submissions", () => {
    it("should submit the form", () => {
      const wrapper = shallow(<Form />);
      const instance = wrapper.instance();
      const sendMailMock = jest.fn();
      const handleResponseMock = jest.fn();
      const mockEvent = {
        preventDefault: () => {}
      };
      instance.handleResponse = handleResponseMock;
      instance.handleSubmit(mockEvent);

      expect(handleResponseMock).toBeCalled();
    });

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
});
