"use client";

import styled, { css } from "styled-components";

interface TitleProps {
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  styles?: string;
}

export function Title({ heading, children, styles }: TitleProps) {
  const Heading = heading;
  const StyledHeading = styled(Heading)`
    font-family: var(--font-title);

    ${styles &&
    css`
      ${styles}
    `}
  `;

  return <StyledHeading>{children}</StyledHeading>;
}
