import sendEmail from "../../services/send-email";
import axios from "axios";

jest.mock("axios");

describe.only("send-email service", () => {
  const fields = {
    attending: "No",
    dessert: "foo",
    dietaryRequirements: "foo",
    fullName: "foo",
    main: "foo",
    starter: "foo"
  };

  it("should post email via Axios", () => {
    sendEmail(fields);
    expect(axios).toBeCalled();
  });
});
