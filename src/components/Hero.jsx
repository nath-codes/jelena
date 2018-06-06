import React from "react";
import styled from "styled-components";
import { hideVisually } from "polished";
import Section from "./Section";
import rings from "../assets/img/rings.png";
import spacer from "../mixins/spacer";

const HeroText = styled.div`
  color: ${props => props.theme.colors.delftBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props =>
    props.size === "large"
      ? spacer(3, props.theme.breakpoint)
      : spacer(2, props.theme.breakpoint)};
  font-weight: 400;
  line-height: 1;
  margin-bottom: ${props => spacer(1, props.theme.breakpoint)};
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledH1 = styled.h1`
  ${hideVisually()};
`;

const StyledHero = Section.extend``;

const ImageWrapper = styled.div`
  height: ${props => spacer(4, props.theme.breakpoint)};
  margin-bottom: ${props => spacer(1, props.theme.breakpoint)};
`;

const Hero = () => (
  <StyledHero>
    <StyledH1>Jelena wedding information</StyledH1>
    <HeroText>The wedding of</HeroText>

    <HeroText size="large">
      Joseph David<br />Goldsworthy
    </HeroText>
    <HeroText>&amp;</HeroText>
    <HeroText size="large">
      Helena Maria<br />Malkowska Zaba
    </HeroText>

    <ImageWrapper>
      <img src={rings} alt="" />
    </ImageWrapper>
  </StyledHero>
);

export default Hero;
