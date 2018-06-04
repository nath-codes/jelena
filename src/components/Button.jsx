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
  font-size: ${spacer(1)};
  line-height: 1;
  padding: ${spacer(0.5)} ${spacer(2)};
  position: relative;
  transition: all ${props => props.theme.transition.duration};

  ${props =>
    props.active &&
    css`
      padding-right: ${spacer(3)};

      &:after {
        background-image: url(${spinner});
        background-size: ${spacer(1)} ${spacer(1)};
        content: " ";
        height: ${spacer(1)};
        position: absolute;
        right: ${spacer(1)};
        top: ${spacer(0.5)};
        width: ${spacer(1)};
      }
    `};
`;

export default Button;
