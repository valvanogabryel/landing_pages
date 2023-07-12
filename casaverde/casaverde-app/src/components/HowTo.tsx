"use client";

import Image from "next/image";
import { Title } from "./Title";
import plantImage from "public/images/card-plant.png";
import { YellowCircle } from "./YellowCircle";
import styled from "styled-components";

const HowToCard = styled.section`
  display: flex;
  align-items: center;
  background-color: #fff;
  filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.06));
  margin: -5rem auto 0 auto;
  width: 995px;
  height: 440px;
`;

const CardContent = styled.div`
  padding: 1.94rem;
`;

const HowToList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem auto 0 auto;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export function HowTo() {
  return (
    <HowToCard>
      <div>
        <Image src={plantImage} alt="imagem de uma planta" />
      </div>
      <CardContent>
        <span>Como conseguir</span>
        <Title heading="h3" styles="font-size: 2.625rem">
          minha planta
        </Title>

        <HowToList>
          <li>
            <YellowCircle size={3.25} />
            Escolha suas plantas
          </li>
          <li>
            <YellowCircle size={3.25} />
            Faça seu pedido
          </li>
          <li>
            <YellowCircle size={3.25} />
            Aguarde na sua casa
          </li>
        </HowToList>
      </CardContent>
    </HowToCard>
  );
}