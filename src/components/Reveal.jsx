import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, once = true }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};
