import styled from "styled-components";
import spacer from "../mixins/spacer";

const Label = styled.label`
  align-items: center;
  display: flex;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${spacer(1)};

  > span {
    font-size: 16px;
    padding-left: 6px;
  }
`;

export default Label;
