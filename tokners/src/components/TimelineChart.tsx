import styled from "styled-components";
import { TimelineItem } from "../timeline";

interface Props {
  data: TimelineItem;
}

const TimelineWrapper = styled.div`
  display: flex;
`;

export const TimelineChart = ({ data }: Props) => {
  return (
    <div>
      <div>
        <span>{data.id}</span>
        <h4>{data.year}</h4>
      </div>

      <div>
        <ul>
          {data.listOfThings.map((item) => (
            <li key={item.numberInList}>
              <div>0{item.numberInList}</div>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
