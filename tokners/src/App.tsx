import useScrollVerify from "./hooks/useScrollVerify";

import { MainWavesBackground } from "./components/MainWavesBackground";
import { Header } from "./components/Header";
import { BlockchainSection } from "./components/BlockchainSection";
import { Container } from "./components/Container";
import { CardFor } from "./components/CardFor";
import { BlackWaves } from "./components/BlackWaves";
import { WhyUs } from "./components/WhyUs";
import { Timeline } from "./components/Timeline";
import { GrayWaves } from "./components/GrayWaves";
import { RocketFigure } from "./components/RocketFigure";
import { ToknersExplain } from "./components/ToknersExplain";

import GlobalStyle from "./globalStyles";
import styled from "styled-components";

import orangeWaves from "./assets/presaleDetails/orangeWaves.png";

// #TODO: ADICIONAR A BORDA DO TIMELINE (deixar responsiva se possível)

const TwoColumns = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
`;

const BackgroundWaves = styled.div`
  width: 100%;
  height: 1708px;
  position: relative;
  z-index: -1;

  div {
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    background-position: left center;
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
        <Container>
          <TwoColumns>
            <CardFor role="Criadores">
              Os criadores podem obter independência por meio de um sistema de
              moeda digital descentralizado que é dependente de crescer e se
              envolver com a comunidade e também com seu poder de estrela. Eles
              possuem 10-15% do valor total dos tokens cunhados.
            </CardFor>
            <CardFor role="Hodlers">
              Manter tokens sociais permite que o indivíduo tenha acesso a
              benefícios, incluindo conteúdo, comunidades privadas, acesso
              direto a celebridades, acesso antecipado a ingressos e muito mais
              como a capacidade de negociar com outras comunidades para obter
              acesso a mais conteúdo do criador com primeiros compradores de
              token sendo os maiores vencedores, pois o valor do token aumenta
              com mais compradores.
            </CardFor>
            <BlackWaves />
          </TwoColumns>
        </Container>

        <Container>
          <WhyUs />
        </Container>

        <Container>
          <Timeline />
        </Container>

        <Container>
          <TwoColumns>
            <ToknersExplain />
            <RocketFigure />
          </TwoColumns>
          <GrayWaves />
        </Container>

        <BackgroundWaves>
          <div />
        </BackgroundWaves>
      </main>
    </>
  );
}
