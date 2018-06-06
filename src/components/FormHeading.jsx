import styled from "styled-components";
import spacer from "../mixins/spacer";

const FormHeading = styled.h3`
  color: ${props => props.theme.colors.delftBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => spacer(1.5, props.theme.breakpoints)};
  line-height: ${props => spacer(2, props.theme.breakpoints)};
  margin: 0 0 ${props => spacer(1, props.theme.breakpoints)};
`;

export default FormHeading;
