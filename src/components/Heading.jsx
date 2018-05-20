import styled from "styled-components";
import spacer from "../mixins/spacer";

const StyledHeading = styled.h2`
  color: ${props => props.theme.colors.delftBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${spacer(3)};
  font-weight: 400;
  line-height: ${spacer(3)};
  margin: 0 0 ${spacer(2)};
  text-align: center;
`;

export default StyledHeading;
