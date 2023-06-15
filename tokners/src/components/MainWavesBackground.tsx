import mainWaves from "../assets/main-waves1.png";
import styled from "styled-components";

export const MainWavesBackground = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${mainWaves});
  height: 200%;
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -9999;

  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
  }
`;
