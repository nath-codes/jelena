import styled from "styled-components";

const Button = styled.button`
  align-self: center;
  border: solid 3px ${props => props.theme.colors.delftBlue};
  background: none;
  color: ${props => props.theme.colors.delftBlue};
  cursor: pointer;
  padding: 15px 45px;
  transition: all ${props => props.theme.transition.duration};

  &:hover {
    background: ${props => props.theme.colors.delftBlue};
    color: ${props => props.theme.colors.white};
  }
`;

export default Button;
