import styled from "styled-components";
import timelineData from "../timeline";
import { TimelineChart } from "./TimelineChart";

const TimelineWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin: 8rem 0;
`;

export const Timeline = () => {
  return (
    <TimelineWrapper>
      {timelineData.map((item) => (
        <TimelineChart data={item} />
      ))}
    </TimelineWrapper>
  );
};
