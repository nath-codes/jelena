import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Label from "./Label";
import Input from "./Input";
import Fieldset from "./Fieldset";
import FormHeading from "./FormHeading";
import Button from "./Button";
import { FormList, FormListItem } from "./FormList";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 50vw;

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
  }
  componentDidMount() {
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <StyledForm>
        <Fieldset>
          <Input
            name="fullName"
            placeholder="Enter your name here"
            type="text"
            required="required"
            autoFocus="autoFocus"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
        </Fieldset>

        <FormHeading>Attending</FormHeading>

        <Fieldset>
          <FormList>
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
              <Input
                name="attending"
                type="radio"
                value="No"
                onChange={this.handleChange}
              />
              <Label>No</Label>
            </FormListItem>
          </FormList>
        </Fieldset>

        {this.state.attending === "Yes" && (
          <div>
            <FormHeading>Starter</FormHeading>
            <Fieldset>
              <FormList inline>
                <FormListItem>
                  <Input
                    type="radio"
                    name="starter"
                    value="Grilled pegetable platter (vegan)"
                    onChange={this.handleChange}
                  />
                  <Label>
                    Grilled vegetable platter <span>(vegan)</span>
                  </Label>
                </FormListItem>
                <FormListItem>
                  <Input
                    type="radio"
                    name="starter"
                    value="Ham hock terrine (gf)"
                    onChange={this.handleChange}
                  />
                  <Label>
                    Ham hock terrine <span>(gf)</span>
                  </Label>
                </FormListItem>
              </FormList>
            </Fieldset>

            <FormHeading>Main</FormHeading>
            <Fieldset>
              <FormList inline>
                <FormListItem>
                  <Input
                    type="radio"
                    name="main"
                    value="Roast lamb with dauphinoise potatoes (gf)"
                    onChange={this.handleChange}
                  />
                  <Label>
                    Roast lamb with dauphinoise potatoes <span>(gf)</span>
                  </Label>
                </FormListItem>
                <FormListItem>
                  <Input
                    type="radio"
                    name="main"
                    value="Vegetable tagine (vegan)"
                    onChange={this.handleChange}
                  />
                  <Label>
                    Vegetable tagine <span>(vegan)</span>
                  </Label>
                </FormListItem>
              </FormList>
            </Fieldset>

            <FormHeading>Desserts</FormHeading>
            <Fieldset>
              <FormList inline>
                <FormListItem>
                  <Input
                    type="radio"
                    name="dessert"
                    value="Lemon tart (vegan)"
                    onChange={this.handleChange}
                  />
                  <Label>
                    Lemon tart <span>(vegan)</span>
                  </Label>
                </FormListItem>
                <FormListItem>
                  <Input
                    type="radio"
                    name="dessert"
                    value="Brandy tart (gf)"
                    onChange={this.handleChange}
                  />
                  <Label>
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
        <Button type="submit">Submit</Button>
      </StyledForm>
    );
  }
}

export default Form;
