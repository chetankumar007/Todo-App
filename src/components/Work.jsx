import React, { useState, useEffect } from "react";
import { data } from "../data/data.js";
import { motion } from "framer-motion";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      id="work"
      name="work"
      className="w-full min-h-screen text-gray-300 bg-gradient-to-b from-[#0a192f] to-[#0c1f3d]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline-block border-b-4 text-gray-300 border-pink-600"
          >
            Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="py-6"
          >
            Check out some of my recent work
          </motion.p>
        </div>

        {/* Removed filter buttons */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {projects.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg shadow-lg shadow-[#040c16] hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-center px-4 mb-4">
                  {item.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-300"
                  >
                    Code
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
