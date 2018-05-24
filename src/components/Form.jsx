import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Label from "./Label";
import Input from "./Input";
import Fieldset from "./Fieldset";
import FormHeading from "./FormHeading";
import Button from "./Button";
import { FormList, FormListItem } from "./FormList";

class Form extends Component {
  componentDidMount() {}

  render() {
    return (
      <ReactForm>
        {formApi => (
          <StyledForm onSubmit={formApi.submitForm} id="form1" className="mb-4">
            <Fieldset>
              <Input type="text" placeholder="Enter your name here" />
            </Fieldset>
            <FormHeading>Attending</FormHeading>
            <Fieldset>
              <FormList>
                <FormListItem orphan>
                  <Input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked="checked"
                  />
                  <Label>Yes</Label>
                </FormListItem>
                <FormListItem>
                  <Input type="radio" name="attending" value="no" />
                  <Label>No</Label>
                </FormListItem>
              </FormList>
            </Fieldset>

            <FormHeading>Starter</FormHeading>
            <Fieldset>
              <FormList inline>
                <FormListItem>
                  <Input
                    type="radio"
                    name="starter"
                    value="Grilled pegetable platter (vegan)"
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
                  />
                  <Label>
                    Lemon tart <span>(vegan)</span>
                  </Label>
                </FormListItem>
                <FormListItem>
                  <Input type="radio" name="dessert" value="Brandy tart (gf)" />
                  <Label>
                    Brandy tart <span>(gf)</span>
                  </Label>
                </FormListItem>
              </FormList>
            </Fieldset>

            <Fieldset>
              <Input type="text" placeholder="Any dietary requirements?" />
            </Fieldset>
            {/* <Text field="hello" id="hello" validate={validate} />
            <button type="submit" className="btn btn-primary">
              Submit
            </button> */}
            <Button type="submit">Submit</Button>
          </StyledForm>
        )}
      </ReactForm>
    );
  }
}

export default Form;
