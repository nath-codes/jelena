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
  background-size: contain;
  background: url(${tileExtraSmall}) no-repeat;
  height: 125px;
  position: fixed;
  width: 125px;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){
    background: url(${tileExtraSmall2x}) no-repeat;
  }

  @media(min-width: ${small}) {
    background: url(${tileSmall}) no-repeat;
    height: 150px;
    width: 150px;
  }

  @media(min-width: ${small}) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){
    background: url(${tileSmall2x}) no-repeat;
  }

  @media(min-width: ${medium}) {
    background: url(${tileMedium}) no-repeat;
    height: 200px;
    width: 200px;
  }

  @media(min-width: ${medium}) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){
    background: url(${tileMedium2x}) no-repeat;
  }

  @media(min-width: ${large}) {
    background: url(${tileLarge}) no-repeat;
    height: 250px;
    width: 250px;
  }

  @media(min-width: ${large}) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){
    background: url(${tileLarge2x}) no-repeat;
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
