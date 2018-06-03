import React from "react";
import styled from "styled-components";
import spacer from "../mixins/spacer";

const StyledNavItem = styled.a`
  color: ${props => props.theme.colors.delftBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${spacer(1)};
  margin-right: ${spacer(1)};
  position: relative;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  &::before {
    background-color: ${props => props.theme.colors.white};
    bottom: -3px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
  }

  &:hover {
    ::before {
      background-color: ${props => props.theme.colors.delftBlue};
      transform: scaleX(1);
    }
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
