import { TimelineChart } from "./TimelineChart";
import { TimelineBorders } from "./TimelineBorders";
import { Reveal } from "./Reveal";

import plane from "../assets/Timeline/plane.svg";

import timelineData from "../timeline";

import styled from "styled-components";

const TimelineWrapper = styled.div`
  display: flex;
  margin: 8rem 0;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 25%;
    margin: 16rem auto;
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

    @media (max-width: 769px) {
      display: none;
    }

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
          <Reveal
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <TimelineChart data={item} key={item.id} />
          </Reveal>
        </>
      ))}

      <Reveal
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <img src={plane} alt="" />
      </Reveal>
    </TimelineWrapper>
  );
};
