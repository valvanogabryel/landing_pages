import cloud from "../assets/toknersExplain/cloud.png";
import rocket from "../assets/toknersExplain/rocket.png";

import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  } 50% {
    transform: translateY(-1rem);
  }
`;

const FiguresWrapper = styled.div`
  position: relative;
  background: #f7f5f9;
  border-radius: 25px;
  margin-left: auto;
  height: 900px;
  width: 777px;
  top: 22rem;

  img {
    position: absolute;
  }
  .cloud-1 {
    top: 10%;
    left: 10%;
    animation: ${float} 5s 1s ease-in-out infinite;
  }

  .rocket {
    top: 15%;
    left: -30%;
    animation: ${float} 3s ease-in-out infinite;
  }

  .cloud-2 {
    right: 5%;
    bottom: 20%;
    transform: scale(1.5);
    animation: ${float} 5s ease-in-out infinite;
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