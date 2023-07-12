"use client";
import React from "react";

import * as palette from "@/variables";
import styled from "styled-components";

interface YellowCircleProps {
  size: number;
}

const Circle = styled.div<YellowCircleProps>`
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  border-radius: 50%;
  background-color: ${palette.COLOR_CASAVERDE_YELLOW};
`;

export const YellowCircle: React.FC<YellowCircleProps> = ({ size }) => {
  return <Circle size={size} />;
};
