import React from "react";
import styled from "styled-components";
import tile from "../assets/img/tile.png";

const StyledBorder = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;

  .tile {
    background: url(${tile}) no-repeat;
    background-size: contain;
    height: 308px;
    position: absolute;
    width: 300px;

    &--bottom-left {
      bottom: 0;
      left: 0;
      transform: rotate(270deg);
    }

    &--bottom-right {
      bottom: 0;
      right: 0;
      transform: rotate(180deg);
    }

    &--top-left {
      left: 0;
      top: 0;
    }

    &--top-right {
      right: 0;
      top: 0;
      transform: rotate(90deg);
    }
  }
`;

const Border = () => (
  <StyledBorder>
    <span className="tile tile--bottom-left" />
    <span className="tile tile--bottom-right" />
    <span className="tile tile--top-left" />
    <span className="tile tile--top-right" />
  </StyledBorder>
);

export default Border;
