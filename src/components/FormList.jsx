import styled, { css } from "styled-components";
import spacer from "../mixins/spacer";
import List from "./List";

const FormList = List.extend`
  display: flex;
  flex-direction: column;

  ${props =>
    props.inline &&
    css`
      flex-direction: row;

      li:nth-child(2) {
        margin-left: ${props => spacer(1, props.theme.breakpoint)};
      }
    `};
`;

const FormListItem = styled.li`
  align-items: center;
  display: flex;
  height: ${props => spacer(1, props.theme.breakpoint)};
  margin-bottom: ${props => spacer(1, props.theme.breakpoint)};

  &:last-child {
    margin-bottom: 0;
  }

  ${props =>
    props.orphan &&
    css`
      margin-bottom: 0;
    `};
`;

export { FormList, FormListItem };
