import styled from "styled-components";
import { clearFix } from "polished";
import spacer from "../mixins/spacer";

const Fieldset = styled.div`
  ${clearFix};
  border: none;
  display: flex;
  height: auto;
  margin: 0 0 ${props => spacer(2, props.theme.background)};
  padding: 0;
`;

export default Fieldset;
