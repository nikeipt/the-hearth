import { motion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({ children }: PropsWithChildren) {
  return (
    // <motion.div
    //   initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true, margin: "-80px" }}
    //   variants={revealVariants}
    // >
    <>
      {children}
    </>
    // </motion.div>
  );
}
