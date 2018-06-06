import styled from "styled-components";
import spacer from "../mixins/spacer";
import { small } from "../constants/breakpoints";

const Label = styled.label`
  align-items: center;
  display: flex;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => spacer(1, props.theme.breakpoint)};
  width: 100%;

  > span {
    font-size: 16px;
    margin-left: auto;
    padding-left: 6px;

    @media (min-width: ${small}) {
      margin-left: 0;
    }
  }
`;

export default Label;
