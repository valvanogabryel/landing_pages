import grayWaves from "../assets/sectionsWaves/grayWave.png";
import styled from "styled-components";

export const GrayWaves = styled.div`
  background-position: left calc(-10rem + (10rem * (-1 * top / 100)));
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${grayWaves});
  height: 1618px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
