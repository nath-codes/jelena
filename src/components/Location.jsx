import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Map from "./Map";
import Text from "./Text";

const StyledLocation = Section.extend`
  .address {
    text-align: center;
  }
`;

const Location = () => (
  <StyledLocation id="location">
    <Heading>Location</Heading>
    <Map />
    <Text className="address">
      Kings Weston House<br />Kings Weston Lane<br />Bristol<br />BS11 0UR
    </Text>
  </StyledLocation>
);

export default Location;
