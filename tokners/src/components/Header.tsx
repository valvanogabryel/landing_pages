import logo from "../assets/logo.svg";

import styled, { css } from "styled-components";

interface Props {
  scrolled: boolean | undefined;
}

const StyledHeader = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  margin: 2rem;
  transition: 0.5s;

  ${({ scrolled }) =>
    scrolled &&
    css`
      background-color: white;
      z-index: 9999;
      position: sticky;
      top: 0;
      margin: 0;
      padding: 0.7rem;
      -webkit-box-shadow: 0px 1px 34px -3px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 1px 34px -3px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 1px 34px -3px rgba(0, 0, 0, 0.1);
    `}
`;

const Logo = styled.div`
  flex-grow: 0.7;
  height: 45px;
  width: 219px;

  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

const StyledLink = styled.a<Props>`
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  text-decoration: none;
  position: relative;
  transition: 0.5s;
  z-index: 0;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: white;
    margin-top: 0.1rem;
    position: absolute;
    bottom: 0;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover {
    color: orange;

    &:after {
      height: 100%;
    }
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 32px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16.8px;
`;

const PrimaryButton = styled(StyledButton)<Props>`
  font-weight: 600;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ scrolled }) => (scrolled ? "black" : "white")};
    margin-top: 0.1rem;
  }

  ${({ scrolled }) =>
    scrolled &&
    css`
      transition: 0.3s;

      &:hover {
        color: orange;
        &:after {
          transition: 0.3s;
          background: orange;
        }
      }
    `}
`;

const SecondaryButton = styled(StyledButton)`
  font-weight: 700;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 52px;
  transition: 0.5s;
  outline: 1px solid transparent;

  &:hover {
    -webkit-box-shadow: 0px 2px 20px -7px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0px 2px 20px -7px rgba(0, 0, 0, 0.52);
    box-shadow: 0px 2px 20px -7px rgba(0, 0, 0, 0.52);
    opacity: 0.95;
  }
`;

export const Header = ({ scrolled = false }: Props) => {
  return (
    <StyledHeader scrolled={scrolled}>
      <Logo>
        <a href="/">
          <img src={logo} alt="logo da Tokners" />
        </a>
      </Logo>
      <nav>
        <StyledList>
          <li>
            <StyledLink href="#team" scrolled={scrolled}>
              Nosso time
            </StyledLink>
          </li>
          <li>
            <StyledLink href="#tokens" scrolled={scrolled}>
              Tokens
            </StyledLink>
          </li>
          <li>
            <StyledLink href="#wallet" scrolled={scrolled}>
              Carteira
            </StyledLink>
          </li>
          <li>
            <StyledLink href="#lightpaper" scrolled={scrolled}>
              Lightpaper
            </StyledLink>
          </li>
        </StyledList>
      </nav>
      <ButtonWrapper>
        <div>
          <PrimaryButton scrolled={scrolled}>Entrar</PrimaryButton>
        </div>
        <div>
          <SecondaryButton>Cadastrar</SecondaryButton>
        </div>
      </ButtonWrapper>
    </StyledHeader>
  );
};
