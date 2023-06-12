import GlobalStyle from "./globalStyles";
import { Header } from "./components/Header";

import { styled } from "styled-components";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
    </div>
  );
}
