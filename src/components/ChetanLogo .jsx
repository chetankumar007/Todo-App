import React from "react";
import { motion } from "framer-motion";

const ChetanLogo = () => {
  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex items-center space-x-1 font-bold text-2xl text-white"
    >
      {["C", "H", "E", "T", "A", "N"].map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={index % 2 === 0 ? "text-pink-500" : "text-white"}
          whileHover={{ scale: 1.2, color: "#f472b6" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ChetanLogo;
