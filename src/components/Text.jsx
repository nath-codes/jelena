import styled from "styled-components";
import spacer from "../mixins/spacer";
import { modularScale } from "polished";

const Text = styled.div`
  align-self: center;
  font-size: ${props =>
    props.size === "large" ? modularScale(1) : modularScale(0)};
  line-height: 1.5;
  max-width: ${spacer(22)};
`;

export default Text;
