import styled from "styled-components";
import spacer from "../mixins/spacer";
import { medium, large } from "../constants/breakpoints";

const Text = styled.div`
  align-self: center;
  font-size: ${props => spacer(0.75, props.theme.breakpoint)};
  line-height: 1.3;
  max-width: ${props => spacer(28, props.theme.breakpoint)};

  @media (min-width: ${medium}) {
    line-height: 1.4;
  }

  @media (min-width: ${large}) {
    line-height: 1.5;
  }
`;

export default Text;
