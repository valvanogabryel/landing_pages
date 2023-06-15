import { Reveal } from "./Reveal";

import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  color: var(--dark);
  cursor: default;
  z-index: 1;
  height: 110rem;

  @media (max-width: 610px) {
    width: 60%;
    text-align: center;
    margin: auto;
  }

  @media (min-width: 610px) and (max-width: 1320px) {
    width: 45%;
  }

  h4 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      font-size: 24px;
    }
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 16px;
  margin-bottom: 2rem;
  opacity: 0.6;

  p {
    font-weight: 300;
    line-height: 24px;

    &:first-child {
      font-weight: 700;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const ToknersExplain = () => {
  return (
    <TextWrapper>
      <h4>Tokners está chegando</h4>
      <Reveal
        variants={{
          hidden: { opacity: 0, y: 120 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ParagraphWrapper>
          <p>
            A adoção de criptomoedas é inferior a 1% da população mundial global
            com alguns países e entidades que lutam ativamente contra sua adoção
            em massa e os desenvolvedores e nerds mais inteligentes segurando o
            forte.
          </p>
          <p>
            Bitcoin foi o primeiro, e desde então cresceu para milhares de
            tokens lançados todos com o objetivo de corrigir um problema ou
            outro com alguns simplesmente FOMOing o momento. Nosso objetivo é
            para trazer adoção em massa para o espaço de criptomoeda,
            simplificando-o. Quão longe? Então para baixo que até mesmo uma
            celebridade pode explicar isso em palavras simples para seus
            seguidores e tê-los baixar um aplicativo, comprar na moeda social de
            sua pessoa favorita e assistir seus investimento como é com outro
            projeto de criptomoeda.
          </p>
          <p>
            Estamos tentando fazer com este espaço o que aplicativos de
            investimento fizeram pelos "investidores de varejo inexistentes".
            Estamos criando moeda digital, trazer rostos populares em vez de
            projetos difíceis de entender para torná-lo a norma e,
            inadvertidamente, ser a "droga de entrada" para muitas pessoas
            finalmente dar a este espaço uma aparência real.
          </p>
        </ParagraphWrapper>
      </Reveal>
      <Reveal
        variants={{
          hidden: { opacity: 0, y: 120 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ParagraphWrapper>
          <p>
            Uma nova economia digital está chegando. As pessoas seriam tão
            poderosas quanto países e criadores seria pago além dos amendoins
            que as plataformas convencionais de mídia social podem oferecer.
          </p>
          <p>
            Lá seriam novos mercados e os anunciantes com pouco a oferecer não
            encontrariam um lar lá. Como Kanye disse: "As personalidades se
            tornariam a nova moeda e os serviços seriam construídos sobre elas".
            Bem, Kanye não disse exatamente isso, mas parece algo que esperamos
            que ele diga.
          </p>
          <p>
            A moeda é digital, já é assim há algum tempo, mas desta vez não
            haveria mortos presidentes no dinheiro, haveria pessoas como você no
            dinheiro, e você seria o dono porque faria mais sentido no mundo.
          </p>
        </ParagraphWrapper>
      </Reveal>
    </TextWrapper>
  );
};
