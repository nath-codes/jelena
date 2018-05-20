import React from "react";
import styled, { keyframes } from "styled-components";
import spacer from "../mixins/spacer";

const rotate360 = keyframes`
  50% {
    transform: translate(0, ${spacer(1)});
  },
  100% {
    transform: translate(0, 0);
  },
`;

const StyledArrow = styled.svg`
  animation: ${rotate360} 1s ease-in-out;
  animation-iteration-count: 3;
  fill: ${props => props.theme.colors.delftBlue};
  height: ${spacer(1)};
`;

const Arrow = props => (
  <StyledArrow
    className={props.className}
    viewBox="0 0 256 160"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M225.813.907L128 98.72 30.187.907 0 31.093l128 128 128-128" />
  </StyledArrow>
);

export default Arrow;
