import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import spacer from "../mixins/spacer";
import { small } from "../constants/breakpoints";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin: ${props => spacer(2, props.breakpoint)} 0 0;

  @media (min-width: ${small}) {
    margin-top: ${props => spacer(1, props.breakpoint)} 0 0;
  }
`;

const Header = () => (
  <StyledHeader>
    <Nav />
  </StyledHeader>
);

export default Header;
