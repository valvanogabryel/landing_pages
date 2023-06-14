import { createGlobalStyle } from "styled-components";
import "./styles/variables.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--main-font);
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 6px; 
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background-color);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #F25147;
    border-radius: 16px;

    &:hover {
      background-color: orange;
    }
  }
`;

export default GlobalStyle;
