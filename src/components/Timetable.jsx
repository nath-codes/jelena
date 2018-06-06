import React from "react";
import styled from "styled-components";
import spacer from "../mixins/spacer";
import Heading from "./Heading";
import Section from "./Section";
import List from "./List";
import timetable from "../constants/timetable";

const TimetableItem = styled.li`
  align-items: center;
  display: flex;
  font-size: ${props => spacer(1, props.theme.breakpoint)};
  margin-bottom: ${props => spacer(1, props.theme.breakpoint)};

  .time {
    margin-right: ${props => spacer(1, props.theme.breakpoint)};
    white-space: nowrap;
  }

  .title {
    text-align: left;
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
