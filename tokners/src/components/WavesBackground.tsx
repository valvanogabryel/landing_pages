import mainWaves from "../assets/main-waves1.png";
import styled from "styled-components";

export const WavesBackground = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${mainWaves});
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -9999;
`;
