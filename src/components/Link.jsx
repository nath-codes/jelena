import styled from "styled-components";

const Link = styled.a`
  color: ${props => props.theme.colors.delftBlue};
  position: relative;
  text-decoration: none;

  &::before {
    background-color: ${props => props.theme.colors.white};
    bottom: -3px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
  }

  &:hover {
    ::before {
      background-color: ${props => props.theme.colors.delftBlue};
      transform: scaleX(1);
    }
  }
`;

export default Link;
