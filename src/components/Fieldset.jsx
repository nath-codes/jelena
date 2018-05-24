import styled from "styled-components";
import { clearFix } from "polished";
import spacer from "../mixins/spacer";

const Fieldset = styled.div`
  ${clearFix};
  border: none;
  display: flex;
  height: auto;
  margin: 0 0 ${spacer(2)};
  padding: 0;
`;

export default Fieldset;
