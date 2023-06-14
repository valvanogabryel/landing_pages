import styled from "styled-components";
import timelineData from "../timeline";
import { TimelineChart } from "./TimelineChart";
import { TimelineBorders } from "./TimelineBorders";

import plane from "../assets/Timeline/plane.svg";

const TimelineWrapper = styled.div`
  display: flex;
  margin: 8rem 0;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 25%;
    margin: 8rem auto;
  }

  @media (max-width: 1340px) {
    flex-direction: column;
    max-width: 30%;
  }

  img {
    position: absolute;
    right: -100px;
    top: -100px;
    transform: rotate(-2deg);
    object-fit: cover;

    @media (max-width: 1600px) {
      right: -30px;
    }

    @media (max-width: 1340px) {
      top: 0;
      right: 10%;
    }
  }
`;

export const Timeline = () => {
  return (
    <TimelineWrapper>
      <TimelineBorders />
      {timelineData.map((item) => (
        <>
          <TimelineChart data={item} key={item.id} />
        </>
      ))}
      <img src={plane} alt="" />
    </TimelineWrapper>
  );
};
