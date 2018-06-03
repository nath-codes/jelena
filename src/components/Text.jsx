import styled from "styled-components";
import spacer from "../mixins/spacer";

const Text = styled.div`
  align-self: center;
  font-size: ${spacer(1)};
  line-height: 1.5;
  max-width: ${spacer(28)};
`;

export default Text;
