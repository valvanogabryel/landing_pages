import styled from "styled-components";
import timelineData from "../timeline";
import { TimelineChart } from "./TimelineChart";
import { TimelineBorders } from "./TimelineBorders";

import { MdKeyboardArrowRight as ArrowRight } from "react-icons/md";

const TimelineWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin: 8rem 0;
`;

export const Timeline = () => {
  return (
    <TimelineWrapper>
      <TimelineBorders />
      {timelineData.map((item) => (
        <>
          <TimelineChart data={item} />
          <ArrowRight />
        </>
      ))}
    </TimelineWrapper>
  );
};
