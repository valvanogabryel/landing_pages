import cloud from "../assets/toknersExplain/cloud.png";
import rocket from "../assets/toknersExplain/rocket.png";

import styled from "styled-components";

const FiguresWrapper = styled.div`
  position: relative;
  background: #f7f5f9;
  border-radius: 25px;
  height: 900px;
  width: 777px;

  img {
    position: absolute;
  }
  .cloud-1 {
  }

  .rocket {
    left: -30%;
  }

  .cloud-2 {
    right: 0;
    bottom: 20%;
    transform: scale(1.2);
  }
`;

export const RocketFigure = () => {
  return (
    <FiguresWrapper>
      <img src={cloud} alt="" className="cloud-1" />
      <img src={rocket} alt="" className="rocket" />
      <img src={cloud} alt="" className="cloud-2" />
    </FiguresWrapper>
  );
};
