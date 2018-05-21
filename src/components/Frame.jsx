import styled, { css } from "styled-components";
import tile from "../assets/img/tile.png";

const StyledFrame = styled.div`
  background: url(${tile}) no-repeat;
  background-size: contain;
  height: 250px;
  position: fixed;
  width: 250px;

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
