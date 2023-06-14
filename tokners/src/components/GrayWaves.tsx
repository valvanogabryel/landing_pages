import grayWaves from "../assets/sectionsWaves/grayWave.png";
import styled from "styled-components";

export const GrayWaves = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${grayWaves});
  height: 180%;
  width: 118.8%;
  position: absolute;
  top: 0;
  right: 0;
  left: -10%;
  bottom: 0;
  z-index: -9999;
`;
