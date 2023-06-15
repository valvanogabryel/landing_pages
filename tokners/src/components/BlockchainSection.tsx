import people from "../assets/people1.png";

import styled from "styled-components";

const StyledBlockchainSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  margin-left: 6rem;

  @media (max-width: 425px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    margin-left: 3rem;
  }

  @media (min-width: 1024px) {
    margin-left: 10rem;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: var(--light-blue);
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    color: var(--dark);
    margin: 2rem 0;
    line-height: 54px;

    @media (max-width: 425px) {
      font-size: 24px;
      line-height: 28px;
    }

    @media (min-width: 426px) and (max-width: 1200px) {
      font-size: 32px;
      line-height: 42px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: var(--dark);
    opacity: 0.6;
    line-height: 24px;

    @media (max-width: 1024px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  background: var(--light-green);
  margin-top: 2.5rem;
  padding: 1rem;
  width: 147px;
  border: none;
  border-radius: 52px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 12px;
    width: 120px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: var(--dark);
  }
`;

const PeopleFigure = styled.div`
  background-image: url(${people});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  height: 810px;
  width: 1022px;
  margin-top: -2rem;

  @media (max-width: 768px) {
    width: 350px;
    background-position: center right;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const BlockchainSection = () => {
  return (
    <StyledBlockchainSection>
      <TextContainer>
        <div>
          <span>Na Tokners estamos</span>
          <h1>Reimaginando a mídia social através do poder do blockchain.</h1>
          <p>
            Estamos criando mídias sociais 3.0 com influenciadores, celebridades
            e criadores podendo lançar sua própria moeda digital simplesmente
            criando um perfil com conteúdo de mídia postado como Não fungível
            Tokens que podem ser adquiridos e negociados na rede Tokners
          </p>
          <Button>
            <a href="/">Veja mais</a>
          </Button>
        </div>
      </TextContainer>

      <PeopleFigure />
    </StyledBlockchainSection>
  );
};
