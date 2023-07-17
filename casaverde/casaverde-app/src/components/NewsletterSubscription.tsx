"use client";
import Image from "next/image";
import newsletterPlant from "public/images/newsletter-plant.png";

import { Title } from "./Title";
import styled from "styled-components";
import { Form } from "./Form";

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  user-select: none;
  margin-top: -4rem;
`;

const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.375rem;
    opacity: 0.5;
    margin-bottom: 0.75rem;
    overflow: hidden;
  }

  p {
    flex-shrink: 0;
    line-height: 1.625rem;
    width: 481px;
    height: 99px;
    opacity: 0.5;
    margin-bottom: 2.31rem;
  }
`;

const PlantImage = styled.div`
  z-index: -1;
  img {
    position: relative;
    right: 30%;
    z-index: -1;
  }
`;


export function NewsletterSubscription() {
  return (
    <StyledContainer>
      <div>
        <TextsWrapper>
          <h3>Sua casa com as</h3>
          <div>
            <Title
              heading="h1"
              styles="font-size:5.125rem; 
            margin-bottom: 1.5rem"
            >
              melhores plantas
            </Title>
          </div>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </TextsWrapper>
        <div>
          <Form />
        </div>
      </div>

      <PlantImage>
        <Image src={newsletterPlant} alt="imagem de uma planta" />
      </PlantImage>
    </StyledContainer>
  );
}
