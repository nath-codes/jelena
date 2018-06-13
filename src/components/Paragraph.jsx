import styled from "styled-components";
import spacer from "../mixins/spacer";

const Paragraph = styled.p`
  margin: 0 0 ${props => spacer(1, props.theme.breakpoint)};

  &:last-child {
    margin-bottom: 0;
  }
`;
export default Paragraph;
