import React from "react";
import styled from "styled-components";

const placeId = "ChIJW9LhQoWScUgRpUZbE5MC6tY";
const StyledIframe = styled.iframe`
  border: 0;
`;

const src = `https://www.google.com/maps/embed/v1/place?key=${
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY
}&q=place_id:${placeId}`;

const Map = () => (
  <StyledIframe width="100%" height="auto" frameborder="0" src={src} />
);

export default Map;
