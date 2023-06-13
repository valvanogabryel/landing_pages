import styled from "styled-components";
import logo from "../assets/unnamed_logo.svg";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  width: 95%;
  margin: 0 auto;
  height: 45rem;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  color: var(--background-color);
  gap: 72px;
  margin-top: -12rem;

  img {
    width: 55.32px;
    height: 34.5px;
  }

  h3 {
    font-size: 48px;
    font-weight: 600;
    line-height: 54px;
    width: 356px;
    margin-top: -1rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.7;
  gap: 2rem;

  p {
    font-size: 16px;
    font-weight: 300;
    opacity: 0.6;
    line-height: 24px;
    width: 600px;

    &:first-child {
      font-weight: 700;
    }

    span {
      font-weight: 600;
    }
  }
`;

export const WhyUs = () => {
  return (
    <StyledWrapper>
      <StyledLogoWrapper>
        <img src={logo} alt="logo" />
        <h3>O que nos faz diferente?</h3>
      </StyledLogoWrapper>

      <TextWrapper>
        <p>Só lançaríamos tokens com a permissão expressa dos criadores.</p>
        <p>
          Existem milhares de celebridades e criadores no twitter, tiktok,
          Instagram e YouTube com milhões de seguidores que estaríamos{" "}
          <span>engajando ativamente</span> antes de nos tornarmos virais.
        </p>
        <p>
          Nós os pegaríamos em nosso plataforma e eles veriam a oportunidade de
          criar uma economia digital impulsionada por fãs, onde seu conteúdo
          digital pode ser negociado como NFTs e seus fãs mais leais podem ter o
          valor monetário da moeda de seu criador aumentar{" "}
          <span>significativamente</span> à medida que promovem sua moeda
          digital em seus canais enquanto nosso os detentores de tokens nativos
          se beneficiam da popularidade dos Tokners.
        </p>
      </TextWrapper>
    </StyledWrapper>
  );
};
