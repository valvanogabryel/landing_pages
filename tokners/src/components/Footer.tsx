import logo from "../assets/unnamed_logo.svg";

import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0;
  background-color: black;
  height: 726px;
  z-index: -2;
  margin-top: 10rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 80%;

    span {
      font-size: 36px;
      font-weight: 700;
      color: white;
      opacity: 0.8;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <img src={logo} alt="" />
        <span>Tokners</span>
      </div>
    </StyledFooter>
  );
};
