import styled from "styled-components";
import spacer from "../mixins/spacer";

const Text = styled.div`
  align-self: center;
  font-size: ${props => spacer(1, props.theme.breakpoint)};
  line-height: 1.5;
  max-width: ${props => spacer(28, props.theme.breakpoint)};
`;

export default Text;
