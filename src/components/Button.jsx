import spacer from "../mixins/spacer";
import styled from "styled-components";

const Button = styled.button`
  align-self: center;
  background: ${props => props.theme.colors.delftBlue};
  border: 0;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${spacer(1)};
  line-height: 1;
  padding: ${spacer(0.5)} ${spacer(2)};
  transition: all ${props => props.theme.transition.duration};

  &:hover {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
`;

export default Button;
