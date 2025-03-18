
// import React, { useRef } from 'react';
// import styles from '../animation/page.module.scss';
// import { useScroll, motion, useTransform } from 'framer-motion';
// import { BIO } from "../constants";

// const Bio = () => {
//    return (
//       <div className="container mx-auto" id='bio'>
//          <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{ opacity: 0, y:-100 }} transition={{duration: 1.5}} className="mt-20 mb-10 text-center text-5xl">Biography</motion.h1>
//          <h3 className="uppercase">
//             <AnimatedText value={BIO.main_text} />
//          </h3>
//          <hr />
//          <h5 className="px-4">
//             <AnimatedParagraph value={BIO.description} />
//          </h5>
//       </div>
//    );
// };

// export default Bio;

// const AnimatedText = ({ value }) => {
//    const element = useRef(null);
//    const { scrollYProgress } = useScroll({
//       target: element,
//       offset: ['end start', 'end end']
//    });

//    const words = value.split(" ");

//    return (
//       <span className={styles.paragraph} ref={element}>
//          {words.map((word, i) => {
//             const start = i / words.length;
//             const end = start + (1 / words.length);
//             return (
//                <Word key={i} range={[start, end]} progress={scrollYProgress}>
//                   {word}
//                </Word>
//             );
//          })}
//       </span>
//    );
// };

// const AnimatedParagraph = ({ value }) => {
//    const element = useRef(null);
//    const { scrollYProgress } = useScroll({
//       target: element,
//       offset: ['start 0.9', 'start 0.10']
//    });

//    const words = value.split(" ");

//    return (
//       <p className={styles.paragraph1} ref={element}>
//          {words.map((word, i) => {
//             const start = i / words.length;
//             const end = start + (1 / words.length);
//             return (
//                <Word key={i} range={[start, end]} progress={scrollYProgress}>
//                   {word}
//                </Word>
//             );
//          })}
//       </p>
//    );
// };

// // Word Component
// const Word = ({ children, range, progress }) => {
//    const opacity = useTransform(progress, range, [0, 1]);

//    return (
//       <span className={styles.word}>
//          <span className={styles.shadow}>{children}</span>
//          <motion.span style={{ opacity }}>
//             {children}
//          </motion.span>
//       </span>
//    );
// };

// import { HERO } from "../constants";
// import { FaReddit, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { CgMail } from "react-icons/cg";
// import { SiReaddotcv } from "react-icons/si";

// const Hero = () => {
//   return (
//     <section
//       id="hero-section"
//       className="relative flex w-full items-center justify-center min-h-screen text-center rounded-3xl border border-white/100 py-3 backdrop-blur-lg overflow-hidden bg-black/90 text-white shadow-lg grid-bg-hero-light"
//     >
//       <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-10 gap-10">
//         {/* Left Section - Profile Info */}
//         <div className="flex-1 flex flex-col items-center justify-center rounded-3xl border p-5 bg-black border-white/100 z-10">
//           <h2 className="my-8 text-6xl font-bold md:text-2xl lg:text-[3rem]">
//             {HERO.name}
//           </h2>
//           <h2 className="my-8 text-1xl font-bold md:text-2xl lg:text-[17px]">
//             {HERO.username}
//           </h2>
//           <p className="p-2 text-3xl tracking-tighter lg:text-4xl">{HERO.greet}</p>
//           <p className="p-2 text-1xl tracking-tighter lg:text-18px">{HERO.description}</p>

//           {/* Profile + Buttons Box */}
//           <div className="relative items-center justify-items-center w-full max-w-lg mx-auto mt-8 p-4">
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <a
//                 href="/cv.pdf"
//                 download
//                 className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium sm:text-2sm green text-black hover:bg-white hover:text-black"
//               >
//                 Explore My CV <SiReaddotcv />
//               </a>
//               <a
//                 href="mailto:kaungkhantcoder@gmail.com"
//                 className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium green text-black hover:bg-white hover:text-black"
//               >
//                 <CgMail /> SEND EMAIL
//               </a>
//             </div>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex space-x-6 mt-6 justify-center">
//             <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
//               <FaReddit />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
//               <FaFacebook />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
//               <FaTwitter />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
//               <FaLinkedin />
//             </a>
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-500">
//               <FaGithub />
//             </a>
//           </div>
//         </div>

//         {/* Right Section - Bento Grid */}
//         <div className="flex-1">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//             {[...Array(6)].map((_, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 rounded-lg shadow-md bg-white/0 backdrop-blur-lg text-white border"
//               >
//                 <h3 className="text-xl font-bold">Box {index + 1}</h3>
//                 <p className="text-sm mt-2">This is a description for box {index + 1}.</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

{/* OK */}

// import { HERO } from "../constants";
// import { FaReddit, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPython, FaJava, FaReact } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import { CgMail } from "react-icons/cg";
// import { SiReaddotcv } from "react-icons/si";
// import { RiJavascriptFill } from "react-icons/ri";
// import { SiJupyter, SiTensorflow, SiOpencv, SiNumpy, SiPandas } from "react-icons/si";
// import { TbBrandCpp } from "react-icons/tb";
// import { VscVscode } from "react-icons/vsc";
// import { FaGitAlt } from "react-icons/fa";

// const Achievements = () => {
//   const boxVariants = {
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.1)",
//       transition: { duration: 0.3 }
//     }
//   };

//   // Tech stack data
//   const skills = [
//     { name: "Python", icon: FaPython },
//     { name: "Java", icon: FaJava },
//     { name: "JavaScript", icon: RiJavascriptFill },
//     { name: "C++", icon: TbBrandCpp },
//     { name: "TensorFlow", icon: SiTensorflow },
//     { name: "NumPy", icon: SiNumpy },
//     { name: "OpenCV", icon: SiOpencv },
//     { name: "Pandas", icon: SiPandas },
//     { name: "Jupyter", icon: SiJupyter },
//     { name: "VS Code", icon: VscVscode },
//     { name: "React", icon: FaReact },
//     { name: "Git", icon: FaGitAlt },
//   ];

//   return (
//     <section
//       id="achievements"
//       className="relative flex w-screen items-center justify-center min-h-screen text-center rounded-3xl border border-white/100 py-3 shadow-[0px_0px_20px_5px_rgba(48,25,52,0.5)] overflow-hidden bg-white text-white"
//     >
//       <div className="w-full max-w-6xl mx-auto p-4 md:p-4">
//         <div className="text-center">
//           <h2 className="my-4 text-black md:my-8 text-4xl sm:text-5xl md:text-5xl font-bold">
//             {HERO.name}
//           </h2>
//           <h2 className="my-4 md:my-8 text-lg md:text-2xl lg:text-[17px] font-bold">
//             {HERO.username}
//           </h2>
//           <p className="p-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter">
//             {HERO.greet}
//           </p>
//           <p className="p-2 text-sm md:text-base lg:text-lg tracking-tighter">
//             {HERO.description}
//           </p>

//           {/* Profile + Buttons Box */}
//           <div className="relative items-center justify-items-center w-full max-w-lg mx-auto mt-6 md:mt-8 p-4">
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <a
//                 href="/cv.pdf"
//                 download
//                 className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium green text-black hover:bg-white hover:text-black"
//               >
//                 Explore My CV <SiReaddotcv />
//               </a>
//               <a
//                 href="mailto:kaungkhantcoder@gmail.com"
//                 className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium green text-black hover:bg-white hover:text-black"
//               >
//                 <CgMail /> SEND EMAIL
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Modern Bento Grid */}
//         <div className="flex-1">
//           <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 w-full min-h-[400px] md:min-h-[600px]">
//             {/* Box 1 - About Myself (Full-width on mobile/tablet) */}
//             <motion.div
//               variants={boxVariants}
//               whileHover="hover"
//               className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden group col-span-1 md:col-span-2 md:row-span-2"
//             >
//               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className="relative z-10">
//                 <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About Myself</h3>
//                 <p className="text-xs md:text-sm mt-2 text-gray-300">
//                   {HERO.description || "A passionate developer with a love for coding and problem-solving."}
//                 </p>
//               </div>
//               <div className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 border-t border-r border-white/30 rounded-tr-xl transform translate-x-4 -translate-y-4"></div>
//             </motion.div>

//             {/* Container for Box 2 and Box 3 (Side-by-side on mobile/tablet) */}
//             <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 col-span-1 md:col-span-2">
//               {/* Box 2 - GitHub Profile */}
//               <motion.div
//                 variants={boxVariants}
//                 whileHover="hover"
//                 className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden group md:row-span-1"
//               >
//                 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative z-10">
//                   <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">GitHub Profile</h3>
//                   <a
//                     href="https://github.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-xs md:text-sm mt-2 text-gray-300 hover:text-white flex items-center"
//                   >
//                     <FaGithub className="mr-2" /> Visit my GitHub
//                   </a>
//                 </div>
//                 <div className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 border-t border-r border-white/30 rounded-tr-xl transform translate-x-4 -translate-y-4"></div>
//               </motion.div>

//               {/* Box 3 - Social Media */}
//               <motion.div
//                 variants={boxVariants}
//                 whileHover="hover"
//                 className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden group md:row-span-1"
//               >
//                 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative z-10">
//                   <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Social Media</h3>
//                   <div className="flex space-x-4 mt-2 justify-start">
//                     <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-500">
//                       <FaReddit />
//                     </a>
//                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
//                       <FaFacebook />
//                     </a>
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
//                       <FaTwitter />
//                     </a>
//                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
//                       <FaLinkedin />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 border-t border-r border-white/30 rounded-tr-xl transform translate-x-4 -translate-y-4"></div>
//               </motion.div>
//             </div>

//             {/* Box 4 - Tech Stack (Full-width on mobile/tablet) */}
//             <motion.div
//               variants={boxVariants}
//               whileHover="hover"
//               className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden group col-span-1 md:col-span-3 md:row-span-1"
//             >
//               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className="relative z-10">
//                 <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Tech Stack</h3>
//                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4">
//                   {skills.map((skill, index) => {
//                     const Icon = skill.icon;
//                     return (
//                       <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.1 }}
//                         className="flex flex-col items-center"
//                       >
//                         <Icon className="text-2xl md:text-3xl text-gray-300 hover:text-white" />
//                         {/* <p className="text-xs md:text-[10px] mt-1 text-gray-300">{skill.name}</p> */}
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 border-t border-r border-white/30 rounded-tr-xl transform translate-x-4 -translate-y-4"></div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;

import { motion } from "framer-motion";
import { achievements } from "../constants";

const Achievements = () => {
  // Calculate total width based on number of items (w-72 = 18rem = 288px, gap-6 = 1.5rem = 24px)
  const itemWidth = 288; // w-72 in pixels
  const gap = 24; // gap-6 in pixels
  const totalWidth = (itemWidth + gap) * achievements.length;

  // Animation for infinite scrolling
  const scrollVariants = {
    animate: {
      x: [0, -totalWidth], // Scroll full width of original items
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 12, // Base speed (faster than 20)
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      id="achievements"
      className="relative w-screen py-16 bg-gradient-to-b from-gray-800 to-black text-white overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-4xl font-bold text-center mb-12"
      >
        Achievements
      </motion.h2>

      {/* Horizontal Scrolling Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          variants={scrollVariants}
          animate="animate"
          // Duplicate items inline for seamless looping
          style={{ display: "inline-flex", whiteSpace: "nowrap" }}
        >
          {/* Render achievements twice for continuous effect */}
          {[...achievements, ...achievements].map((achievement, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 my-2 w-72 bg-gray-900/80 border border-gray-700/50 rounded-lg p-4 shadow-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-center text-white">
                {achievement.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none" />
      </div>

      {/* Adjust speed for mobile */}
      <style jsx>{`
        @media (max-width: 767px) {
          .scroll-container > div {
            animation-duration: 8s !important; /* Faster on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
