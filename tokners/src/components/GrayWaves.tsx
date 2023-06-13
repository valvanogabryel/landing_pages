import grayWaves from "../assets/sectionsWaves/grayWave.png";
import styled from "styled-components";

export const GrayWaves = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${grayWaves});
  height: 120%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -9999;
`;
