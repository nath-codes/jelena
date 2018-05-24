import styled from "styled-components";
import spacer from "../mixins/spacer";

const FormHeading = styled.h3`
  color: ${props => props.theme.colors.delftBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${spacer(1.5)};
  margin: 0 0 ${spacer(1)};
`;

export default FormHeading;
