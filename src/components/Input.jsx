import styled, { css } from "styled-components";
import spacer from "../mixins/spacer";

const textInputStyles = css`
  border: solid 3px ${props => props.theme.colors.delftBlue};
  border-radius: 3px;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => spacer(1, props.theme.breakpoint)};
  height: ${props => spacer(2, props.theme.breakpoint)};
  padding: 0 ${props => spacer(0.5, props.theme.breakpoint)};
  width: 100%;
`;

const StyledInput = styled.input`
  ${props => props.type === "text" && textInputStyles};

  ${props =>
    props.type === "radio" &&
    css`
      margin-right: ${props => spacer(0.5, props.theme.breakpoint)};
    `};
`;

export default StyledInput;
