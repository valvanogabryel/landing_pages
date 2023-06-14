import { CardDetail } from "./CardDetails";
import person from "../assets/presaleDetails/person.png";
import people from "../assets/presaleDetails/people.png";

import styled from "styled-components";

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

    &:nth-child(2) {
      transform: translateY(4rem);
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
  }

  .people {
    right: 25%;
    top: 40%;
  }
`;

export const PresaleDetails = () => {
  return (
    <DetailsWrapper>
      <h4>Detalhes de pré-venda</h4>
      <div>
        <CardDetail img="number01" phase="Um" />
        <CardDetail img="number02" phase="Dois" />
        <CardDetail img="number03" phase="Três" />

        <ImageWrapper>
          <img src={person} alt="" className="person" />
          <img src={people} alt="" className="people" />
        </ImageWrapper>
      </div>
      <a href="">Como comprar</a>
    </DetailsWrapper>
  );
};
