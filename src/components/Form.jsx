import React, { Component } from "react";
import styled from "styled-components";
import Label from "./Label";
import Input from "./Input";
import Fieldset from "./Fieldset";
import FormHeading from "./FormHeading";
import Button from "./Button";
import { FormList, FormListItem } from "./FormList";
import sendMail from "../services/send-email";
import Text from "./Text";
import spacer from "../mixins/spacer";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 50vw;

  .message {
    margin: ${spacer(1)} 0;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attending: "Yes",
      dessert: "",
      dietaryRequirements: "",
      fullName: "",
      main: "",
      sending: false,
      sent: false,
      starter: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ sending: true });

    const response = await sendMail(this.state);
    this.handleResponse(response);
  }

  handleResponse(response) {
    const { status } = response;

    if (status === 200) {
      this.setState({
        dessert: "",
        dietaryRequirements: "",
        fullName: "",
        main: "",
        sending: false,
        sent: true,
        starter: ""
      });
    }
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Fieldset>
          <Input
            name="fullName"
            placeholder="Enter your name here"
            type="text"
            required="required"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
        </Fieldset>

        <FormHeading>Attending</FormHeading>

        <Fieldset>
          <FormList inline>
            <FormListItem orphan>
              <Label>
                <Input
                  name="attending"
                  type="radio"
                  value="Yes"
                  onChange={this.handleChange}
                  defaultChecked
                />Yes
              </Label>
            </FormListItem>
            <FormListItem>
              <Label>
                <Input
                  name="attending"
                  type="radio"
                  value="No"
                  onChange={this.handleChange}
                />
                No
              </Label>
            </FormListItem>
          </FormList>
        </Fieldset>

        {this.state.attending === "Yes" && (
          <div>
            <FormHeading>Starter</FormHeading>
            <Fieldset>
              <FormList>
                <FormListItem>
                  <Label>
                    <Input
                      type="radio"
                      name="starter"
                      value="Grilled pegetable platter (vegan)"
                      onChange={this.handleChange}
                    />
                    Grilled vegetable platter <span>(vegan)</span>
                  </Label>
                </FormListItem>
                <FormListItem>
                  <Label>
                    <Input
                      type="radio"
                      name="starter"
                      value="Ham hock terrine (gf)"
                      onChange={this.handleChange}
                    />
                    Ham hock terrine <span>(gf)</span>
                  </Label>
                </FormListItem>
              </FormList>
            </Fieldset>

            <FormHeading>Main</FormHeading>
            <Fieldset>
              <FormList>
                <FormListItem>
                  <Label>
                    <Input
                      type="radio"
                      name="main"
                      value="Roast lamb with dauphinoise potatoes (gf)"
                      onChange={this.handleChange}
                    />
                    Roast lamb with dauphinoise potatoes <span>(gf)</span>
                  </Label>
                </FormListItem>
                <FormListItem>
                  <Label>
                    <Input
                      type="radio"
                      name="main"
                      value="Vegetable tagine (vegan)"
                      onChange={this.handleChange}
                    />
                    Vegetable tagine <span>(vegan)</span>
                  </Label>
                </FormListItem>
              </FormList>
            </Fieldset>

            <FormHeading>Desserts</FormHeading>
            <Fieldset>
              <FormList>
                <FormListItem>
                  <Label>
                    <Input
                      type="radio"
                      name="dessert"
                      value="Lemon tart (vegan)"
                      onChange={this.handleChange}
                    />
                    Lemon tart <span>(vegan)</span>
                  </Label>
                </FormListItem>
                <FormListItem>
                  <Label>
                    <Input
                      type="radio"
                      name="dessert"
                      value="Brandy tart (gf)"
                      onChange={this.handleChange}
                    />
                    Brandy tart <span>(gf)</span>
                  </Label>
                </FormListItem>
              </FormList>
            </Fieldset>

            <Fieldset>
              <Input
                type="text"
                name="dietaryRequirements"
                placeholder="Any dietary requirements?"
                value={this.state.dietaryRequirements}
                onChange={this.handleChange}
              />
            </Fieldset>
          </div>
        )}

        <Button active={this.state.sending} type="submit">
          Submit
        </Button>

        {this.state.sent && (
          <Text className="message">Your RSVP has been recieved.</Text>
        )}
      </StyledForm>
    );
  }
}

export default Form;
