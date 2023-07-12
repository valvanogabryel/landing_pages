"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import waves from "public/images/wave-bg.svg";
import styled from "styled-components";

const WaveBg = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -9999;
`;

export function WaveBackground() {
  return (
    <WaveBg initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
      <Image src={waves} alt="" aria-hidden />
    </WaveBg>
  );
}
