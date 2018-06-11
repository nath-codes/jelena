import React from "react";
import styled from "styled-components";
import spacer from "../mixins/spacer";
import Heading from "./Heading";
import Section from "./Section";
import List from "./List";
import timetable from "../constants/timetable";
import { medium } from "../constants/breakpoints";

const TimetableItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: ${props => spacer(1, props.theme.breakpoint)};
  margin-bottom: ${props => spacer(2, props.theme.breakpoint)};
  text-align: center;

  .time {
    margin-bottom: ${props => spacer(1, props.theme.breakpoint)};
    min-width: ${props => spacer(5, props.theme.breakpoint)};
    white-space: nowrap;
  }

  @media (min-width: ${medium}) {
    flex-direction: row;
    margin-bottom: ${props => spacer(1, props.theme.breakpoint)};

    .time {
      margin: 0 ${props => spacer(1, props.theme.breakpoint)} 0 0;
      white-space: nowrap;
    }

    .title {
      text-align: left;
    }
  }
`;

const TimeTable = () => (
  <Section id="timetable">
    <Heading>Timetable</Heading>
    <List>
      {timetable.map(item => (
        <TimetableItem key={item.time}>
          <div className="time">{item.time}</div>
          <div className="title">{item.title}</div>
        </TimetableItem>
      ))}
    </List>
  </Section>
);

export default TimeTable;
