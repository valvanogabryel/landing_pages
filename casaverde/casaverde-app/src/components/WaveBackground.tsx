"use client";
import Image from "next/image";
import waves from "public/images/wave-bg.svg";
import styled from "styled-components";

const WaveBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -9999;
`;

export function WaveBackground() {
  return (
    <WaveBg>
      <Image src={waves} alt="" aria-hidden />
    </WaveBg>
  );
}
