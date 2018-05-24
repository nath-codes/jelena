import styled, { css } from "styled-components";
import spacer from "../mixins/spacer";
import List from "./List";

const FormList = List.extend`
  display: flex;

  ${props =>
    props.inline &&
    css`
      flex-direction: column;
    `};
`;

const FormListItem = styled.li`
  align-items: center;
  display: flex;
  height: ${spacer(1)};
  margin-bottom: ${spacer(0.5)};

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
