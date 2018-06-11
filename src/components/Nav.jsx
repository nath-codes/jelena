import React from "react";
import styled from "styled-components";
import Link from "./Link";
import spacer from "../mixins/spacer";

const StyledNavItem = Link.extend`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => spacer(1, props.theme.breakpoint)};
  margin-right: ${props => spacer(1, props.theme.breakpoint)};

  &:last-child {
    margin-right: 0;
  }
`;

const StyledNav = styled.nav``;

const Nav = () => (
  <StyledNav>
    <StyledNavItem href="#rsvp">RSVP</StyledNavItem>
    <StyledNavItem href="#location">Location</StyledNavItem>
    <StyledNavItem href="#timetable">Timetable</StyledNavItem>
    <StyledNavItem href="#gifts">Gifts</StyledNavItem>
  </StyledNav>
);

export default Nav;
