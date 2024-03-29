import { motion } from "framer-motion";
import React, { FC } from "react";

const Transition: FC<any> = (props) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.div
      key={props?.transitionkey}
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      className=""
    >
      {props?.children}
    </motion.div>
  );
};

export default Transition;
