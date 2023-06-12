import { styled } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledH1>Oi</StyledH1>
    </div>
  );
}
