import blackWaves from "../assets/cardsFor/waves_background.png";
import styled from "styled-components";

export const BlackWaves = styled.div`
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${blackWaves});
  height: 1212px;
  width: 100%;
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  z-index: -9999;
`;
