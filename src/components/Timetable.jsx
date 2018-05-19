import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";
import Heading from "./Heading";
import Section from "./Section";
import List from "./List";
import timetable from "../constants/timetable";

const TimetableItem = styled.li`
  align-items: center;
  display: flex;
  font-size: ${modularScale(1, "1em", "perfectFifth")};
  margin-bottom: 24px;

  .time {
    margin-right: 24px;
  }

  .title {
    text-align: left;
  }
`;

const TimeTable = () => (
  <Section>
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
