import { HERO, SKILLS, INTEREST, otherskills, EmailButton, EXPERIENCE, EDUCATION, CERTIFICATES, projects } from "../constants";
import { FaReddit, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";
import { SiReaddotcv } from "react-icons/si";
import { BIO } from "../constants";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";



const lottieUrl = "https://lottie.host/b35aeb62-f293-4a28-b4b8-2d21e9771d35/5WMyAHIh6u.json"

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

  // Ref for the Lottie container
  const lottieContainer = useRef(null);

  // Load Lottie animation when component mounts
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg", // Can also use "canvas" or "html"
      loop: true,
      autoplay: true,
      path: lottieUrl, // URL to the Lottie JSON file
    });

    // Cleanup on unmount
    return () => anim.destroy();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <section
      id="hero"
      className="relative flex w-screen items-center justify-center min-h-screen  text-center rounded-3xl py-2 mt-[30px] overflow-hidden "
    >
      <div className="flex flex-col w-full max-w-6xl mx-auto p-5 md:p-10 gap-6 ">
        {/* Top Section - Profile Info */}

        <div
          className="relative z-10 text-white bg-black bg-line rounded-2xl p-5 shadow-2xl"
          style={{
            backgroundImage: "url('src/assets/keyboad_books.png')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 border border-white/40 bg-white/10 backdrop-blur-[5px] px-5 py-3 rounded-lg gap-12 items-center">
            {/* Text Section */}
            <div className="space-y-5 my-10 md:ml-6 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                {HERO.greet}
              </h1>

              <h2 className="text-3xl md:text-5xl font-bold text-[#76B900] drop-shadow-md">
                {HERO.name}
              </h2>

              <div className="inline-block border border-[#76B900] rounded-md px-6 py-3 hover:scale-[1.03] transition-transform shadow-inner">
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-white">
                  <span className="inline-block w-5 h-1 bg-[#76B900] mr-3 rounded"></span>
                  {HERO.job}
                </h3>
              </div>

              <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/80">
                {HERO.username}
              </p>

              {/* Button */}
              <div className="relative mt-6 inline-block">
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#bbfd48]"></span>
                </span>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-[#76B900] hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold shadow-md"
                >
                  Explore My CV
                  <SiReaddotcv className="ml-2 text-base" />
                </a>
              </div>
            </div>

            {/* Animation Section */}
            <div ref={lottieContainer} className="md:w-full md:pl-10 md:h-[400px]" />
          </div>
        </div>



        {/* Scroll Down Icon */}
        <div className="flex justify-center mt-10 md:mt-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={2.5} stroke="currentColor"
            className="w-12 h-12 bg-white/10 animate-bounce border border-white/50 rounded-full p-3 text-[#76B900]"
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
            className="relative p-4 md:p-6 rounded-xl bg-white border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-4 md:row-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                <span className="inline-block w-8 h-1 bg-green-400 mr-2"></span> About Me
              </h3>
              <h3 className="text-md font-regular text-left mt-6 text-black">{BIO.main_text || "No main text available"}</h3>
              <h1 className="text-[14px] md:text-[16px] font-regular text-left mt-6 text-black">{BIO.description || "No main text available"}</h1>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-green-400/30 rounded-tr-xl"></div>
          </motion.div>

          {/* Box 3 - Social Media (Middle Right, Square) */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 md:p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-2 md:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                <span className="inline-block w-8 h-1 bg-red-400 mr-2"></span> Experience
              </h3>
              <div className="space-y-4">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="text-sm md:text-base text-gray-300">
                    <p className="font-medium">{exp.role}</p>
                    <p>{exp.company}</p>
                    <p className="text-gray-400">{exp.duration}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-red-400/30 rounded-bl-xl"></div>
          </motion.div>


          {/* Box 4 - Interest */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 md:p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-2 md:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
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

          {/* Box 5 - Education (Bottom Right, Wide) */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 md:p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-2 md:row-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-green-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
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



          {/* Box 6 - Tech Stack (Bottom Right, Wide) */}
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 md:p-8 rounded-xl border bg-gray-700/20 border-gray-200/30 shadow-lg overflow-hidden col-span-1 md:col-span-4 md:row-span-1" id="skills"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 via-blue-500/10 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
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
                      className="flex items-center space-x-2 bg-gray-600/30 hover:bg-gray-900/90 p-3 rounded-lg border border-white/20 hover:border-white hover:font-medium transition-colors"
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

          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-6 rounded-xl md:p-8 bg-gradient-to-r from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-4 md:row-span-1 "
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-blue-300/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
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

          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="rest"
            className="relative p-4 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-2 md:row-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-yellow-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4">
                <span className="inline-block w-8 h-1 bg-orange-500 mr-2"></span> Certificates
              </h3>

              <div className="relative overflow-hidden">
                <div className="w-full  h-full md:h-[260px]">
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
                      className="w-full h-full object-cover rounded-md mb-2"
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