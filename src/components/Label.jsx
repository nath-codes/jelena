import styled from "styled-components";
import spacer from "../mixins/spacer";

const Label = styled.label`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${spacer(1)};
  margin: 0 ${spacer(1)} 0 ${spacer(0.5)};

  > span {
    font-size: 16px;
  }
`;

export default Label;
