import React from "react";
import styled from "styled-components";
import spacer from "../mixins/spacer";

const placeId = "ChIJW9LhQoWScUgRpUZbE5MC6tY";
const StyledIframe = styled.iframe`
  border: 0;
  filter: grayscale(1);
  height: ${props => spacer(12, props.theme.breakpoint)};
  margin-bottom: ${props => spacer(2, props.theme.breakpoint)};
  width: 100%;
`;

const src = `https://www.google.com/maps/embed/v1/place?key=${
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY
}&q=place_id:${placeId}`;

const Map = () => <StyledIframe frameborder="0" src={src} />;

export default Map;
