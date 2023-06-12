import styled from "styled-components";
import logo from "../assets/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  margin: 2rem;
`;

const Logo = styled.div`
  flex-grow: 0.7;
  height: 35px;
  width: 219px;
`;

const StyledLink = styled.a`
  color: white;
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
    transition: 0.3s;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16.8px;
`;

const PrimaryButton = styled(StyledButton)`
  font-weight: 600;
  color: white;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: white;
    margin-top: 0.1rem;
  }
`;

const SecondaryButton = styled(StyledButton)`
  font-weight: 700;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 52px;
  transition: 0.5s;
  outline: 1px solid transparent;

  &:hover {
    outline-color: black;
    -webkit-box-shadow: 0px 2px 20px -7px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0px 2px 20px -7px rgba(0, 0, 0, 0.52);
    box-shadow: 0px 2px 20px -7px rgba(0, 0, 0, 0.52);
    opacity: 0.95;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <a href="/">
          <img src={logo} alt="logo da Tokners" />
        </a>
      </Logo>
      <nav>
        <StyledList>
          <li>
            <StyledLink href="#team">Nosso time</StyledLink>
          </li>
          <li>
            <StyledLink href="#tokens">Tokens</StyledLink>
          </li>
          <li>
            <StyledLink href="#wallet">Carteira</StyledLink>
          </li>
          <li>
            <StyledLink href="#lightpaper">Lightpaper</StyledLink>
          </li>
        </StyledList>
      </nav>
      <ButtonWrapper>
        <div>
          <PrimaryButton>Entrar</PrimaryButton>
        </div>
        <div>
          <SecondaryButton>Cadastrar</SecondaryButton>
        </div>
      </ButtonWrapper>
    </StyledHeader>
  );
};
