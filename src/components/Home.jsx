import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const scrollToWork = () => {
    console.log("Button clicked");
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("work section not found");
    }
  };

  return (
    <div
      name="home"
      className="relative w-full h-screen bg-gradient-to-b from-[#0a192f] via-[#162a47] to-[#1c2331] text-white"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-stars-pattern opacity-25"></div>
      </div>

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10">
        <p className="text-[#64ffda] text-lg tracking-widest animate-fadeIn">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#e6f1ff] animate-fadeInLeft">
          Chetankumar
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#a8b2d1] animate-fadeInLeft delay-200">
          I'm a Software Developer.
        </h2>

        <p className="text-[#a8b2d1] py-4 max-w-[700px] animate-fadeInUp delay-400">
          I'm an experienced Software Developer specializing in MERN stack
          development. Leveraging modern technologies, I architect and deliver
          scalable web applications that combine powerful frontend interfaces
          with robust backend solutions.
        </p>

        {/* Button with Animated Arrow */}
        <div>
          <button
            onClick={scrollToWork}
            className="text-[#64ffda] group border-2 border-[#64ffda] px-6 py-3 my-2 flex items-center hover:bg-[#64ffda15] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            View Work
            <span className="group-hover:rotate-90 transition-transform duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
