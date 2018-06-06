import spacer from "../mixins/spacer";
import styled, { css } from "styled-components";
import spinner from "../assets/img/spinner.svg";

const Button = styled.button`
  align-self: center;
  background: ${props => props.theme.colors.delftBlue};
  border: 0;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => spacer(1, props.theme.breakpoint)};
  line-height: 1;
  padding-bottom: ${props => spacer(0.5, props.theme.breakpoint)};
  padding-top: ${props => spacer(0.5, props.theme.breakpoint)};
  padding-left: ${props => spacer(2, props.theme.breakpoint)};
  padding-right: ${props => spacer(2, props.theme.breakpoint)};
  position: relative;
  transition: all ${props => props.theme.transition.duration};

  ${props =>
    props.active &&
    css`
      padding-right: ${props => spacer(3, props.theme.breakpoint)};

      &:after {
        background-image: url(${spinner});
        background-size: ${props => spacer(1, props.theme.breakpoint)}
          ${props => spacer(1, props.theme.breakpoint)};
        content: " ";
        height: ${props => spacer(1, props.theme.breakpoint)};
        position: absolute;
        right: ${props => spacer(1, props.theme.breakpoint)};
        top: ${props => spacer(0.5, props.theme.breakpoint)};
        width: ${props => spacer(1, props.theme.breakpoint)};
      }
    `};
`;

export default Button;
