"use client";

import Image from "next/image";
import casaverdeLogo from "public/images/logo.svg";
import styled from "styled-components";
import { Link } from "./Link";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0.63rem auto;
`;

const LinkList = styled.ul`
  display: flex;
  gap: 0.5rem;
  user-select: none;
`;

export function Menu() {
  return (
    <StyledHeader>
      <div>
        <a href="/">
          <Image src={casaverdeLogo} alt="logo da casa verde" />
        </a>
      </div>
      <nav>
        <LinkList>
          <li>
            <Link>Como fazer</Link> /
          </li>
          <li>
            <Link>Ofertas</Link> /
          </li>
          <li>
            <Link>Depoimentos</Link> /
          </li>
          <li>
            <Link>Vídeos</Link> /
          </li>
          <li>
            <Link>Meu carrinho</Link>
          </li>
        </LinkList>
      </nav>
    </StyledHeader>
  );
}
