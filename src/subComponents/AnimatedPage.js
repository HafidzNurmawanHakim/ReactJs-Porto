import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 1500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -1500 },
};

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div variants={animations} animate="animate" exit="exit" transition={{ type: "spring", duration: 1 }}>
      {children}
    </motion.div>
  );
};
