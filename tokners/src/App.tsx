import useScrollVerify from "./hooks/useScrollVerify";

import { MainWavesBackground } from "./components/MainWavesBackground";
import { Header } from "./components/Header";
import { BlockchainSection } from "./components/BlockchainSection";
import { Container, OuterContainer } from "./components/Container";
import { CardFor } from "./components/CardFor";
import { BlackWaves } from "./components/BlackWaves";
import { WhyUs } from "./components/WhyUs";
import { Timeline } from "./components/Timeline";
import { GrayWaves } from "./components/GrayWaves";
import { RocketFigure } from "./components/RocketFigure";
import { ToknersExplain } from "./components/ToknersExplain";
import { PresaleDetails } from "./components/PresaleDetails";

import GlobalStyle from "./globalStyles";
import styled, { css } from "styled-components";

import orangeWaves from "./assets/presaleDetails/orangeWaves.png";
import { Footer } from "./components/Footer";
import { Reveal } from "./components/Reveal";

// #TODO: ADICIONAR A BORDA DO TIMELINE (deixar responsiva se possível)

interface TwoColumnsProps {
  wrap?: boolean;
}

const TwoColumns = styled.div<TwoColumnsProps>`
  display: flex;
  justify-content: center;
  gap: 18px;

  @media (max-width: 610px) {
    flex-direction: column;
  }

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;

      @media (max-width: 610px) {
        flex-direction: row;
      }
    `}
`;

const BackgroundWaves = styled.div`
  width: 100%;
  height: 1708px;
  position: absolute;
  top: -35rem;
  z-index: -1;

  div {
    width: 100%;
    height: 100%;
    background-position: center calc(-10rem + (10rem * (-1 * top / 100)));
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${orangeWaves});
  }
`;

export default function App() {
  const scrolled = useScrollVerify();

  return (
    <>
      <GlobalStyle />
      <MainWavesBackground />
      <Header scrolled={scrolled} />
      <main>
        <BlockchainSection />

        <OuterContainer>
          <BlackWaves />

          <Container>
            <TwoColumns wrap={true}>
              <CardFor role="Criadores">
                Os criadores podem obter independência por meio de um sistema de
                moeda digital descentralizado que é dependente de crescer e se
                envolver com a comunidade e também com seu poder de estrela.
                Eles possuem 10-15% do valor total dos tokens cunhados.
              </CardFor>
              <CardFor role="Hodlers">
                Manter tokens sociais permite que o indivíduo tenha acesso a
                benefícios, incluindo conteúdo, comunidades privadas, acesso
                direto a celebridades, acesso antecipado a ingressos e muito
                mais como a capacidade de negociar com outras comunidades para
                obter acesso a mais conteúdo do criador com primeiros
                compradores de token sendo os maiores vencedores, pois o valor
                do token aumenta com mais compradores.
              </CardFor>
            </TwoColumns>
          </Container>
        </OuterContainer>

        <Container>
          <WhyUs />
        </Container>

        <Container>
          <Timeline />
        </Container>

        <OuterContainer>
          <GrayWaves />
          <Container>
            <TwoColumns>
              <ToknersExplain />
              <RocketFigure />
            </TwoColumns>
          </Container>
        </OuterContainer>

        <OuterContainer>
          <BackgroundWaves>
            <div />
          </BackgroundWaves>
          <Container>
            <PresaleDetails />
          </Container>
        </OuterContainer>
      </main>
      <Footer />
    </>
  );
}
