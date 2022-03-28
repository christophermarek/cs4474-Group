import React, { useState } from "react";
import { motion } from "framer-motion";

export const Heart = ({ active, className }) => {
  const [selected, setSelected] = useState(active);
  const heart = require("../assets/heart.svg").default;
  const heart_filled = require("../assets/heart_filled.svg").default;

  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      onClick={() => setSelected(!selected)}
    >
      <img
        className={className}
        alt="heart thumb"
        src={selected === true ? heart_filled : heart}
      />
    </motion.div>
  );
};
