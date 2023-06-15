import { CardDetail } from "./CardDetails";
import person from "../assets/presaleDetails/person.png";
import people from "../assets/presaleDetails/people.png";

import styled from "styled-components";
import { Reveal } from "./Reveal";

const DetailsWrapper = styled.div`
  color: var(--dark);
  position: relative;

  h4,
  a {
    color: var(--background-color);
    font-size: 48px;
    font-weight: 700;
    text-align: center;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    position: absolute;
    bottom: -20rem;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s;

    @media (max-width: 1700px) {
      display: none;
    }

    @media (max-width: 1630px) {
      bottom: -15rem;
    }

    &:after {
      content: "";
      display: block;
      background-color: white;
      width: 0;
      height: 3px;
      transition: 0.1s linear;
      position: absolute;
    }

    &:hover {
      opacity: 0.8;

      &:after {
        width: 100%;
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 998px) {
      flex-wrap: wrap;
    }

    &:nth-child(2) {
      transform: translateY(4rem);
    }

    @media (max-width: 425px) {
      &:nth-child(3) {
        margin-top: 8rem;
        margin-left: 0 !important;
      }
    }

    @media (max-width: 998px) {
      &:nth-child(3) {
        margin-left: 1rem;
        margin-top: 8rem;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    position: absolute;
  }

  .person {
    left: 22%;
    top: 40%;

    @media (max-width: 1680px) {
      left: 20%;
    }

    @media (max-width: 1320px) {
      display: none;
    }
  }

  .people {
    right: 25%;
    top: 40%;

    @media (max-width: 1680px) {
      right: 24%;
    }
    @media (max-width: 1530px) {
      right: 23%;
    }

    @media (max-width: 1320px) {
      display: none;
    }
  }
`;

export const PresaleDetails = () => {
  return (
    <DetailsWrapper>
      <h4>Detalhes de pré-venda</h4>
      <div>
        <Reveal
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <CardDetail img="number01" phase="Um" />
        </Reveal>

        <Reveal
          variants={{
            hidden: { opacity: 0, scale: 0, y: 140 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
        >
          <CardDetail img="number02" phase="Dois" />
        </Reveal>

        <Reveal
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <CardDetail img="number03" phase="Três" />
        </Reveal>

        <ImageWrapper>
          <img src={person} alt="" className="person" />
          <img src={people} alt="" className="people" />
        </ImageWrapper>
      </div>
      <a href="">Como comprar</a>
    </DetailsWrapper>
  );
};
