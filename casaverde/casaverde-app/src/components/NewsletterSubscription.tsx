"use client";

import Image from "next/image";
import mailIcon from "public/images/icons/mail.svg";
import newsletterPlant from "public/images/newsletter-plant.png";

import * as palette from "@/variables";
import styled from "styled-components";
import { Title } from "./Title";

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

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 391px 194px;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

  button {
    font-family: var(--font-text);
    background-color: ${palette.COLOR_CASAVERDE_YELLOW};
    color: #fff;
    border: none;
    padding: 1.6875rem 1.4375rem 1.75rem 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: ${palette.COLOR_CASAVERDE_YELLOW_HOVER};
    }

    &:focus {
      outline: none;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 1.0894rem;
    transform: translateY(-50%);
  }
`;

const NewsletterInput = styled.input`
  background: #fff;
  border: none;
  padding: 1.6875rem 1.4375rem 1.75rem 3.4375rem;
  width: 80%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.3;
  }
`;

const PlantImage = styled.div`
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
          <Title
            heading="h1"
            styles="font-size:5.125rem; 
            margin-bottom: 1.5rem"
          >
            melhores plantas
          </Title>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </TextsWrapper>
        <div>
          <StyledForm>
            <InputContainer>
              <Image src={mailIcon} alt="" aria-hidden />
              <NewsletterInput
                type="email"
                placeholder="Insira seu e-mail"
                required
              />
            </InputContainer>
            <button type="button">Assinar newsletter </button>
          </StyledForm>
        </div>
      </div>

      <PlantImage>
        <Image src={newsletterPlant} alt="imagem de uma planta" />
      </PlantImage>
    </StyledContainer>
  );
}
