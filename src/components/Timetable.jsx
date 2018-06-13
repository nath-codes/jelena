import React from "react";
import styled from "styled-components";
import spacer from "../mixins/spacer";
import Heading from "./Heading";
import Section from "./Section";
import List from "./List";
import timetable from "../constants/timetable";
import { medium } from "../constants/breakpoints";

const TimetableList = List.extend`
  @media (min-width: ${medium}) {
    margin-left: ${props => spacer(6.5, props.theme.breakpoint)};
  }
`;

const TimetableSection = Section.extend`
  padding-bottom: 0;
`;

const TimetableItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: ${props => spacer(0.75, props.theme.breakpoint)};
  margin-bottom: ${props => spacer(2, props.theme.breakpoint)};
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }

  .time {
    color: ${props => props.theme.colors.delftBlue};
    margin-bottom: ${props => spacer(1, props.theme.breakpoint)};
    min-width: ${props => spacer(4.5, props.theme.breakpoint)};
    white-space: nowrap;
  }

  @media (min-width: ${medium}) {
    flex-direction: row;
    margin-bottom: ${props => spacer(1.5, props.theme.breakpoint)};
    text-align: left;

    .time {
      margin-bottom: 0;
      white-space: nowrap;
    }
  }
`;

const TimeTable = () => (
  <TimetableSection id="timetable" tight>
    <Heading>Timetable</Heading>
    <TimetableList>
      {timetable.map(item => (
        <TimetableItem key={item.time}>
          <div className="time">{item.time}</div>
          <div className="title">{item.title}</div>
        </TimetableItem>
      ))}
    </TimetableList>
  </TimetableSection>
);

export default TimeTable;
