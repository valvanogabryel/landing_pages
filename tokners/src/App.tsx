import GlobalStyle from "./globalStyles";
import { Header } from "./components/Header";
import { WavesBackground } from "./components/WavesBackground";
import { BlockchainSection } from "./components/BlockchainSection";
import { Container } from "./components/Container";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <WavesBackground />
      <Header />
      <main>
        <BlockchainSection />
        <Container>
          {/* 
          <Card for="Criadores">
            Os criadores podem obter independência por meio de um sistema de moeda digital descentralizado que é
dependente de crescer e se envolver com a comunidade e também com seu poder de estrela. Eles possuem
10-15% do valor total dos tokens cunhados.
          </Card> */}
          {/* <Card for="Hodlers">
            Manter tokens sociais permite que o indivíduo tenha acesso a benefícios, incluindo
conteúdo, comunidades privadas, acesso direto a celebridades, acesso antecipado a ingressos e muito mais
como a capacidade de negociar com outras comunidades para obter acesso a mais conteúdo do criador com
primeiros compradores de token sendo os maiores vencedores, pois o valor do token aumenta com mais
compradores.
          </Card> */}
        </Container>
      </main>
    </>
  );
}
