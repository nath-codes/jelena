import styled from "styled-components";
import { modularScale } from "polished";

const StyledHeading = styled.h2`
  color: ${props => props.theme.colors.delftBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${modularScale(5)};
  font-weight: 400;
  line-height: 1;
`;

export default StyledHeading;
