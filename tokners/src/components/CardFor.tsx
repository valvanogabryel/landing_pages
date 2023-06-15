import { ReactNode } from "react";

import peopleCreator from "../assets/cardsFor/people_creator.png";
import peopleHodler from "../assets/cardsFor/people_hodler.png";
import styled from "styled-components";

interface Props {
  role: "Criadores" | "Hodlers";
  children: ReactNode;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: var(--opacity-lighter-gray);
  padding: 1rem;
  margin-top: 8rem;
  border-radius: 25px;
  width: 45%;
  height: 930px;
  min-width: 500px;
  position: relative;
  color: var(--dark);

  > span {
    font-size: 12px;
    font-weight: 700;
    opacity: 0.3;
    margin: 3rem auto 4rem auto;
  }

  @media (max-width: 320px) {
    min-width: 265px;
  }

  @media (min-width: 321px) and (max-width: 700px) {
    width: 100px;
    height: 800px;
    min-width: 300px;
  }

  @media (min-width: 701px) and (max-width: 920px) {
    min-width: 420px;
    height: 800px;
  }
`;

const CardTitle = styled.h3<Props>`
  font-size: 36px;
  font-weight: 600;

  span {
    color: ${({ role }) =>
      role === "Criadores" ? `var(--light-green)` : `var(--light-blue)`};
    width: 50%;

    &:after {
      content: "";
      display: block;
      margin-left: auto;
      width: ${({ role }) => (role === "Criadores" ? `65%` : `60%`)};
      height: 2px;
      background: ${({ role }) =>
        role === "Criadores" ? `var(--light-green)` : `var(--light-blue)`};
      margin-top: 0.1rem;
    }
  }
`;

const TextContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.6;
  line-height: 24px;
  max-width: 90%;
  margin: 2.4rem auto 3rem auto;
`;

const PeopleImage = styled.div<Props>`
  width: 100%;
  height: 100%;
  margin: auto;

  img {
    position: absolute;
    bottom: 0;
    right: ${({ role }) => (role === "Criadores" ? `45%` : `35%`)};
    transform: translateX(50%);
    height: fit-content;
    width: fit-content;
    object-fit: cover;

    @media (max-width: 425px) {
      width: 65% !important;
    }

    @media (max-width: 1340px) {
      width: 70%;
    }
  }
`;

export const CardFor = ({ role, children }: Props) => {
  const peopleImage = role === "Criadores" ? peopleCreator : peopleHodler;

  return (
    <StyledCard>
      <span>{role.match("Criadores") ? "01" : "02"}</span>
      <CardTitle role={role}>
        Para <span>{role}</span>
      </CardTitle>
      <div>
        <TextContent>{children}</TextContent>
      </div>
      <PeopleImage role={role}>
        <img src={peopleImage} alt="" />
      </PeopleImage>
    </StyledCard>
  );
};
