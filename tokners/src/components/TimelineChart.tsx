import { MdKeyboardArrowRight as ArrowRight } from "react-icons/md";

import { TimelineItem } from "../timeline";

import styled from "styled-components";

interface Props {
  data: TimelineItem;
}

const TimelineWrapper = styled.div`
  position: relative;
  cursor: default;

  @media (max-width: 768px) {
    width: 25rem;
  }

  @media (max-width: 420px) {
    width: 20rem;
  }
`;

const TimelineHeader = styled.div`
  line-height: 54px;
  position: relative;
  margin: 4rem auto;

  span {
    font-size: 16px;
    font-weight: 700;
    color: var(--light-green);
  }

  h3 {
    font-size: 36px;
    font-weight: 500;
    color: var(--dark);
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 24px;

    div {
      font-size: 18px;
      line-height: 20px;
    }

    span {
      font-size: 12px;
      font-weight: 700;
      color: var(--light-blue);
    }
  }
`;

export const TimelineChart = ({ data }: Props) => {
  return (
    <TimelineWrapper>
      <TimelineHeader>
        <span>{data.id}</span>
        <h3>{data.year}</h3>
        <ArrowRight
          style={{
            position: "absolute",
            right: "45%",
            top: "20px",
            fontSize: "24px",
            opacity: "0.1",
          }}
        />
      </TimelineHeader>

      <div>
        <StyledList>
          {data.listOfThings.map((item) => (
            <li key={item.numberInList}>
              <span>0{item.numberInList}</span>
              <div>{item.content}</div>
            </li>
          ))}
        </StyledList>
      </div>
    </TimelineWrapper>
  );
};
