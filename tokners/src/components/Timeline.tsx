import styled from "styled-components";
import timelineData from "../timeline";
import { TimelineChart } from "./TimelineChart";
import { TimelineBorders } from "./TimelineBorders";

import plane from "../assets/Timeline/plane.svg";

const TimelineWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin: 8rem 0;

  img {
    position: absolute;
    right: -100px;
    top: -100px;
    transform: rotate(-2deg);
    object-fit: cover;
  }
`;

export const Timeline = () => {
  return (
    <TimelineWrapper>
      <TimelineBorders />
      {timelineData.map((item) => (
        <>
          <TimelineChart data={item} />
        </>
      ))}
      <img src={plane} alt="" />
    </TimelineWrapper>
  );
};
