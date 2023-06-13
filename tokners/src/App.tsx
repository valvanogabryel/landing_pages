import GlobalStyle from "./globalStyles";
import { Header } from "./components/Header";
import { MainWavesBackground } from "./components/MainWavesBackground";
import { BlockchainSection } from "./components/BlockchainSection";
import { Container } from "./components/Container";
import { CardFor } from "./components/CardFor";
import styled from "styled-components";
import { BlackWaves } from "./components/BlackWaves";
import { useEffect, useState } from "react";

const TwoColumns = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollThreshold = 250;

      if (scrollTop > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <GlobalStyle />
      <MainWavesBackground />
      <Header scrolled={scrolled}/>
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
      </main>
    </>
  );
}
