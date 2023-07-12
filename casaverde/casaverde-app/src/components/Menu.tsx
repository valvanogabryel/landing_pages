"use client";

import Image from "next/image";
import casaverdeLogo from "public/images/logo.svg";
import styled from "styled-components";
import { Link } from "./Link";
import { motion } from "framer-motion";

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
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <a href="/">
          <Image src={casaverdeLogo} alt="logo da casa verde" />
        </a>
      </motion.div>
      <nav>
        <LinkList>
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate" }}
          >
            <Link>Como fazer</Link> /
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease: "anticipate" }}
          >
            <Link>Ofertas</Link> /
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: "anticipate" }}
          >
            <Link>Depoimentos</Link> /
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: "anticipate" }}
          >
            <Link>Vídeos</Link> /
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "anticipate" }}
          >
            <Link>Meu carrinho</Link>
          </motion.li>
        </LinkList>
      </nav>
    </StyledHeader>
  );
}
