import { createGlobalStyle } from "styled-components";
import "./styles/variables.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--main-font);
    background-color: var(--background-color);
  }
`;

export default GlobalStyle;
