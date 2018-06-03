import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import spacer from "../mixins/spacer";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin: ${spacer(1)} 0 0;
`;

const Header = () => (
  <StyledHeader>
    <Nav />
  </StyledHeader>
);

export default Header;
