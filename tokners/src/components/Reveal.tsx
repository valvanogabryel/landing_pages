import { ReactElement, useEffect, useRef } from "react";

import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface RevealProps {
  children: ReactElement;
  variants: Variants;
}

export const Reveal = ({ children, variants }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const bounceTransition = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={bounceTransition}
      >
        {children}
      </motion.div>
    </div>
  );
};
