"use client";

import arrowIcon from "public/images/icons/arrow.svg";

import * as palette from "@/variables";
import styled, { css } from "styled-components";
import Image from "next/image";

interface LinkProps {
  children: React.ReactNode;
  color?: "yellow" | "dark";
  hasIcon?: boolean;
}

const StyledLink = styled.a<LinkProps>`
  color: ${(props) =>
    props.color === "yellow"
      ? palette.COLOR_CASAVERDE_YELLOW
      : palette.COLOR_CASAVERDE_DARK};
  text-decoration: none;
  transition: 0.3s;
  margin: 0 0.5rem;

  &:hover {
    /* color: ${(props) =>
      props.color === "yellow" ? "" : palette.COLOR_CASAVERDE_YELLOW}; */
    text-decoration: underline;
  }

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      display: flex;
      align-items: center;
      gap: 1.62rem;
    `}
`;

export function Link({ children, color = "dark", hasIcon }: LinkProps) {
  return (
    <StyledLink href="/" color={color} hasIcon={hasIcon}>
      {children}
      {hasIcon && <Image src={arrowIcon} alt="buy" aria-hidden />}
    </StyledLink>
  );
}
