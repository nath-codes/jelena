import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Form from "../../components/Form";
import theme from "../../constants/theme";

jest.mock("../../services/send-email", () => () => Promise.resolve());

describe("<Form />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays meal choices when guest is attending ", () => {
    const wrapper = shallow(<Form />);
    wrapper.setState({ attending: "Yes" });

    expect(wrapper).toMatchSnapshot();
  });

  it("displays success message when form is submitted", () => {
    const wrapper = shallow(<Form />);
    wrapper.setState({ sent: true });

    expect(wrapper).toMatchSnapshot();
  });

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

    it("should submit the form", async () => {
      const wrapper = shallow(<Form />);
      const instance = wrapper.instance();
      const handleResponseMock = jest.fn();
      const mockEvent = {
        preventDefault: () => {}
      };

      instance.handleResponse = handleResponseMock;
      await instance.handleSubmit(mockEvent);
      expect(handleResponseMock).toHaveBeenCalled();
    });

    it("should clear form state on success", () => {
      const wrapper = shallow(<Form />);
      const instance = wrapper.instance();
      const response = { status: 200 };

      wrapper.setState(completedState);
      instance.handleResponse(response);

      expect(wrapper.state()).toEqual(resetState);
    });

    it("should not clear form state on error", () => {
      const wrapper = shallow(<Form />);
      const instance = wrapper.instance();
      const response = { status: 401 };

      wrapper.setState(completedState);
      instance.handleResponse(response);

      expect(wrapper.state()).toEqual(completedState);
    });
  });
});
