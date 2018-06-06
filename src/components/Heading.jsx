import styled from "styled-components";
import spacer from "../mixins/spacer";

const StyledHeading = styled.h2`
  color: ${props => props.theme.colors.delftBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => spacer(3, props.theme.breakpoint)};
  font-weight: 400;
  line-height: ${props => spacer(3, props.theme.breakpoint)};
  margin: 0 0 ${props => spacer(2, props.theme.breakpoint)};
  text-align: center;
`;

export default StyledHeading;
