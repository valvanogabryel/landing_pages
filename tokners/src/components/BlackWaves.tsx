import blackWaves from "../assets/cardsFor/waves_background.png";
import styled from "styled-components";

export const BlackWaves = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${blackWaves});
  height: 120%;
  width: 117.8%;
  position: absolute;
  top: 50%;
  right: 0;
  left: -9%;
  bottom: 0;
  z-index: -9999;
`;
