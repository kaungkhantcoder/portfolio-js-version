import { HERO, SKILLS, INTEREST, otherskills, EmailButton, EXPERIENCE, EDUCATION, CERTIFICATES, projects } from "../constants";
import { motion } from "framer-motion";
import { SiReaddotcv } from "react-icons/si";
import { BIO } from "../constants";
import { useEffect, useRef, useState } from "react";
import mainbg from "../assets/computer_keyboard_books.png";
import profile_card from "../assets/profile_card.png";

const Hero = () => {
  const boxVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    rest: {
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  // Cycle through certificates every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCertIndex((prevIndex) =>
        (prevIndex + 1) % CERTIFICATES.length
      );
    }, 3000); // 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);


  return (
    <section
      id="hero"
      className="relative flex w-screen items-center justify-center min-h-screen  text-center rounded-3xl py-2 mt-[30px] overflow-hidden "
    >
      <div className="flex flex-col w-full max-w-6xl mx-auto p-5 md:p-10 gap-6 ">
        {/* Top Section - Profile Info */}

        <div
          className="relative z-10 text-white bg-[#121212] bg-line rounded-2xl p-5 shadow-2xl"
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}

        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 border border-white/40 bg-white/10 backdrop-blur-[8px] px-5 py-3 rounded-lg gap-12 items-center">
            {/* Text Section */}
            <div className="space-y-5 my-10 md:ml-6 text-center md:text-start">
              <h1 className="text-1xl md:text-3xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                {HERO.greet}
              </h1>

              <h2 className="text-2xl md:text-4xl font-bold text-[#ffffff] drop-shadow-md">
                {HERO.name}
              </h2>

              <div className="inline-block bg-gradient-to-tr from-[#1a1a1b] via-[#0c0c0c] to-black rounded-md px-6 py-3 hover:scale-[1.03] transition-transform drop-shadow-lg shadow-inner">
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-white">
                  <span className="inline-block w-5 h-1 bg-white mr-3 rounded"></span>
                  {HERO.job}
                </h3>
              </div>

              <p className="text-sm md:text-xl font-medium text-white/80">
                {HERO.field.split("\n").map((line, i) => (
                  <span key={i} className="border-b-2 border-black/30">
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              {/* Button */}
              <div className="relative mt-6 inline-block">
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-[#121212] hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold shadow-md"
                >
                  Explore My CV
                  <SiReaddotcv className="ml-2 text-base" />
                </a>
              </div>
            </div>

            {/* Profile_Card Section */}
            <div className="w-full">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="hidden md:flex w-full h-[300px]"
                style={{
                  backgroundImage: `url(${profile_card})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >

              </motion.div>
            </div>

          </div>
        </div>



        {/* Scroll Down Icon */}
        <div className="flex justify-center mt-10 md:mt-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={2.5} stroke="currentColor"
            className="w-12 h-12 bg-white/10 animate-bounce border border-white/50 rounded-full p-3 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>



        {/* Bento Grid - Improved Layout */}
        <div id="about" className="grid grid-cols-1 md:grid-cols-6  grid-rows-1 md:grid-rows-1 gap-3 md:gap-6 w-full min-h-[600px]">

          {/* Box 1 - About Me (Top Right, Wide) */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative rounded-2xl bg-gradient-to-tr from-[#111010] via-[#131212] to-[#201c1c]
                        border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden col-span-1 md:col-span-4 md:row-span-1"
          >
            {/* macOS style title bar */}
            <div className="flex items-center space-x-2 p-3 bg-[#0c0c0c] rounded-t-2xl">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="relative z-10  p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                <span className="inline-block w-8 h-1 bg-green-400 mr-2"></span> About Me
              </h3>
              <h3 className="text-md font-regular text-left mt-6">{BIO.main_text || "No main text available"}</h3>
              <h1 className="text-[15px] md:text-[17px] font-regular text-left mt-6">{BIO.description || "No main text available"}</h1>
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-green-400/30 rounded-br-xl"></div>
          </motion.div>

          {/* Box 2 - Experience (Middle Right, Square) */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#252424] via-[#0a0a0a] to-[#0f0e0e]
                        border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden col-span-1 md:col-span-2 md:row-span-2"
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                <span className="inline-block w-8 h-1 bg-red-400 mr-2"></span> Experience
              </h3>
              <div className="space-y-4">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="text-sm md:text-base text-gray-300">
                    <h1 className="font-medium">{exp.role}</h1>
                    <p>{exp.company}</p>
                    <p className="text-gray-400">{exp.duration}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-red-400/30 rounded-bl-xl"></div>
          </motion.div>

          {/* Box 3 - Interest */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-[#0a0a0a] via-[#252424] to-[#0f0e0e]
                        border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden col-span-1 md:col-span-2 md:row-span-2"
          >


            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                <span className="inline-block w-8 h-1 bg-purple-400 mr-2"></span> Interest
              </h3>
              <div className="flex flex-wrap gap-3">
                {INTEREST.map((INTEREST, index) => {
                  const Icon = INTEREST.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center  bg-black/50 p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                    >
                      <Icon className="text-xl md:text-2xl mr-2 text-gray-300 hover:text-purple-400" />
                      <p className="text-xs md:text-sm text-gray-300 hover:text-white">{INTEREST.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-400/30 rounded-bl-xl"></div>
          </motion.div>


          {/* Box 4 - Education */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-tl from-[#0a0a0a] via-[#1b1b1b] to-[#0f0e0e]
                        border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden col-span-1 md:col-span-2 md:row-span-1"
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                <span className="inline-block w-8 h-1 bg-teal-400 mr-2"></span> Education
              </h3>
              {EDUCATION.map((edu, index) => (
                <div key={index} className="text-sm md:text-base text-gray-300">
                  <p className="font-medium">{edu.degree}</p>
                  <p>{edu.institution}</p>
                  <p className="text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-teal-400/30 rounded-tr-xl"></div>
          </motion.div>



          {/* Box 5 - Tech Stack */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative rounded-2xl bg-gradient-to-tr from-[#0a0a0a] via-[#161616] to-[#0f0e0e]
                        border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden col-span-1 md:col-span-4 md:row-span-1" id="skills"
          >
            {/* macOS style title bar */}
            <div className="flex items-center space-x-2 p-3 bg-[#0c0c0c] rounded-t-2xl">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="relative z-10 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                <span className="inline-block w-8 h-1 bg-white mr-2"></span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-5">
                {SKILLS.map((SKILLS, index) => {
                  const Icon = SKILLS.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center space-x-2  hover:bg-gradient-to-tr from-[#313131] to-black p-3 rounded-lg border border-white/40 hover:border-white hover:font-medium transition-colors"
                    >
                      <Icon className="text-xl md:text-2xl mr-2" />
                      <p className="text-xs md:text-sm">{SKILLS.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gray-800 rounded-bl-xl"></div>
          </motion.div>


          {/* Box 6 - Other Skills */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 rounded-2xl md:p-8 bg-gradient-to-bl from-[#181717] via-[#0f0f0f] to-[#252323]
                        border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden col-span-1 md:col-span-4 md:row-span-1 "
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                <span className="inline-block w-8 h-1 bg-blue-400 mr-2"></span> Extra Capabilities
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {otherskills.map((otherskills, index) => {
                  const Icon = otherskills.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center space-x-2 bg-black/50 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-colors"
                    >
                      <Icon className="text-xl md:text-2xl text-gray-300 hover:text-blue-400" />
                      <p className="text-xs md:text-sm text-gray-300 hover:text-white">{otherskills.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-blue-400/30 rounded-br-xl"></div>
          </motion.div>

          {/* Box 7 - Certificates */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-4 rounded-2xl bg-gradient-to-tr from-[#1d1c1c] via-[#181717] to-[#0f0e0e]
                        border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden col-span-1 md:col-span-2 md:row-span-1"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4">
                <span className="inline-block w-8 h-1 bg-orange-500 mr-2"></span> Achievements
              </h3>

              <div className="relative overflow-hidden">
                <div className="w-full h-[260px]">
                  <motion.div
                    key={currentCertIndex} // Key changes trigger animation
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-gray-500/20 drop-shadow-lg rounded-lg p-3"
                  >
                    <img
                      src={CERTIFICATES[currentCertIndex].image}
                      alt={CERTIFICATES[currentCertIndex].name}
                      className="w-full h-[160px] object-cover rounded-md mb-2"
                    />
                    <div className="grid grid-cols-2">
                      <div className="text-start">
                        <p className="text-sm font-medium text-white">
                          {CERTIFICATES[currentCertIndex].name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {CERTIFICATES[currentCertIndex].issuer}
                        </p>
                      </div>
                      <div className="text-end">
                        <p className="text-xs text-gray-500">
                          {CERTIFICATES[currentCertIndex].date}
                        </p>
                      </div>

                    </div>
                  </motion.div>

                </div>

              </div>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-orange-400/30 rounded-tr-xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;