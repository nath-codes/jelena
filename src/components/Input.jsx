import styled, { css } from "styled-components";
import spacer from "../mixins/spacer";

const textInputStyles = css`
  border: solid 3px ${props => props.theme.colors.delftBlue};
  border-radius: 3px;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${spacer(1)};
  padding: ${spacer(0.5)};
  width: 100%;
`;

const StyledInput = styled.input`
  ${props => props.type === "text" && textInputStyles};

  /* ${props =>
    props.type === "radio" &&
    css`
      padding: ${spacer(1)};
    `}; */
`;

export default StyledInput;
