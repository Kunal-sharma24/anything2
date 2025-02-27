import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children, animationVariants, threshold = 0.1 }) => {
  const { ref, inView } = useInView({ threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
