import styled from "styled-components";
import spacer from "../mixins/spacer";

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: ${spacer(2)};
  position: relative;
  width: 80%;
`;

export default StyledSection;
