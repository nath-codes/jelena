import styled, { css } from "styled-components";
import tileExtraSmall from "../assets/img/tile/tile-xs.png";
import tileExtraSmall2x from "../assets/img/tile/tile-xs@2x.png";
import tileSmall from "../assets/img/tile/tile-s.png";
import tileSmall2x from "../assets/img/tile/tile-s@2x.png";
import tileMedium from "../assets/img/tile/tile-m.png";
import tileMedium2x from "../assets/img/tile/tile-m@2x.png";
import tileLarge from "../assets/img/tile/tile-l.png";
import tileLarge2x from "../assets/img/tile/tile-l@2x.png";
import { small, medium, large } from "../constants/breakpoints";

const StyledFrame = styled.div`
  background-image: url(${tileExtraSmall});
  background-repeat: no-repeat;
  background-size: contain;
  height: 125px;
  position: fixed;
  width: 125px;

  @media (-webkit-min-device-pixel-ratio: 2){
    background-image: url(${tileExtraSmall2x});
  }

  @media(min-width: ${small}) {
    background-image: url(${tileSmall});
    height: 150px;
    width: 150px;
  }

  @media(min-width: ${small}) and (-webkit-min-device-pixel-ratio: 2){
    background-image: url(${tileSmall2x});
  }

  @media(min-width: ${medium}) {
    background-image: url(${tileMedium});
    height: 200px;
    width: 200px;
  }

  @media(min-width: ${medium}) and (-webkit-min-device-pixel-ratio: 2){
    background-image: url(${tileMedium2x});
  }

  @media(min-width: ${large}) {
    background-image: url(${tileLarge});
    height: 250px;
    width: 250px;
  }

  @media(min-width: ${large}) and (-webkit-min-device-pixel-ratio: 2){
    background-image: url(${tileLarge2x});
  }

  ${props =>
    props.position === "bottom-left" &&
    css`
      bottom: 0;
      left: 0;
      transform: rotate(270deg);
    `}

  ${props =>
    props.position === "bottom-right" &&
    css`
      bottom: 0;
      right: 0;
      transform: rotate(180deg);
    `}

  ${props =>
    props.position === "top-left" &&
    css`
      left: 0;
      top: 0;
    `}

  ${props =>
    props.position === "top-right" &&
    css`
      right: 0;
      top: 0;
      transform: rotate(90deg);
    `}

`;

export default StyledFrame;
