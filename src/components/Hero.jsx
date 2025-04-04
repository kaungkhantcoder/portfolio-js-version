// // import { motion } from "framer-motion";
// // import { FaPython, FaJava, FaReact } from "react-icons/fa6";
// // import { RiJavascriptFill, RiSvelteFill } from "react-icons/ri";
// // import { SiJupyter, SiStreamlit, SiTensorflow, SiOpencv, SiNumpy } from "react-icons/si";
// // import { TbBrandCpp } from "react-icons/tb";
// // import { VscVscode } from "react-icons/vsc";

// // const iconVariants = (duration) => ({
// //    initial: { y: -10 },
// //    animate: {
// //       y: [10, -10],
// //       transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
// //    },
// // });

// // const categories = [
// //    {
// //       title: "Languages",
// //       skills: [
// //          { icon: FaPython, duration: 2.5 },
// //          { icon: FaJava, duration: 2 },
// //          { icon: TbBrandCpp, duration: 5 },
// //          { icon: RiJavascriptFill, duration: 6 },
// //       ],
// //    },
// //    {
// //       title: "Frameworks",
// //       skills: [
// //          { icon: FaReact, duration: 3 },
// //          { icon: RiSvelteFill, duration: 2.5 },
// //          { icon: SiTensorflow, duration: 6 },
// //          { icon: SiStreamlit, duration: 4 },
// //       ],
// //    },
// //    {
// //       title: "Tools",
// //       skills: [
// //          { icon: SiJupyter, duration: 3 },
// //          { icon: SiNumpy, duration: 2.5 },
// //          { icon: SiOpencv, duration: 3 },
// //          { icon: VscVscode, duration: 2 },
// //       ],
// //    },
// // ];

// // const Skills = () => {
// //    return (
// //       <div className="border-b border-white/40 pb-24" id="skills">
// //          <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}
// //             className="my-20 text-center text-4xl">
// //             Technologies
// //          </motion.h1>

// //          {categories.map((category, index) => (
// //             <div key={index} className="mb-8">
// //                <h2 className="text-center text-2xl mb-4">{category.title}</h2>
// //                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
// //                   className="grid grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
// //                   {category.skills.map(({ icon: Icon, duration }, i) => (
// //                      <motion.div key={i} variants={iconVariants(duration)} initial="initial" animate="animate"
// //                         className="m-2 border-2 border-white rounded-2xl bg-white p-3">
// //                         <Icon className="text-7xl shadow-xl shadow-black/50 bg-white/30 rounded-xl p-2 text-black" />
// //                      </motion.div>
// //                   ))}
// //                </motion.div>
// //             </div>
// //          ))}
// //       </div>
// //    );
// // };

// // export default Skills;

// // import { FaPython, FaJava, FaReact } from "react-icons/fa6";
// // import { motion } from "framer-motion";
// // import { RiJavascriptFill, RiSvelteFill } from "react-icons/ri";
// // import { SiJupyter, SiStreamlit, SiTensorflow, SiOpencv, SiNumpy, SiPandas } from "react-icons/si";
// // import { TbBrandCpp } from "react-icons/tb";
// // import { VscVscode } from "react-icons/vsc";

// // const iconVariants = (duration) => ({
// //    initial: { y: -10 },
// //    animate: {
// //       y: [10, -10],
// //       transition: {
// //          duration: duration,
// //          ease: "linear",
// //          repeat: Infinity,
// //          repeatType: "reverse",
// //       },
// //    },
// // });

// // const Skills = () => {
// //    return (
// //       <div className="border-b border-white/40 pb-2 text-white" id="skills">
// //          <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">
// //             Technologies
// //          </motion.h1>
// //          <div className="flex flex-col gap-12 items-center">
// //             {/* Languages */}
// //             <motion.div
// //             whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
// //             className="w-full bg-yellow-400 p-5 rounded-xl mb-3 max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 grid-bg">
// //                <h2 className="text-2xl w-full md:w-1/4 text-center md:text-left font-semibold">Languages</h2>
// //                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full">
// //                   {[FaPython, FaJava, RiJavascriptFill, TbBrandCpp].map((Icon, index) => (
// //                      <motion.div key={index} variants={iconVariants(3 + index)} initial="initial" animate="animate" className="border-2 border-white rounded-2xl bg-white p-3">
// //                         <Icon className="text-7xl text-black shadow-xl shadow-black/50 bg-white/30 rounded-xl p-2" />
// //                      </motion.div>
// //                   ))}
// //                </motion.div>
// //             </motion.div>

// //             {/* Frameworks */}
// //             <motion.div
// //             whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
// //             className="w-full bg-white/10 backdrop-blur-md  p-5 rounded-xl mb-3 max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 grid-bg">
// //                <h2 className="text-2xl w-full md:w-1/4 text-center md:text-left font-semibold">Libraries</h2>
// //                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full">
// //                   {[SiTensorflow, SiNumpy, SiOpencv, SiPandas].map((Icon, index) => (
// //                      <motion.div key={index} variants={iconVariants(1 + index)} initial="initial" animate="animate" className="border-2 border-white rounded-2xl bg-white p-3">
// //                         <Icon className="text-7xl text-black shadow-xl shadow-black/50 bg-white/30 rounded-xl p-2" />
// //                      </motion.div>
// //                   ))}
// //                </motion.div>
// //             </motion.div>

// //             {/* Tools */}
// //             <motion.div
// //             whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
// //             className="w-full bg-blue-500 p-5 rounded-xl mb-3 max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 grid-bg">
// //                <h2 className="text-2xl w-full md:w-1/4 text-center md:text-left font-semibold">Tools</h2>
// //                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full">
// //                   {[SiJupyter, VscVscode].map((Icon, index) => (
// //                      <motion.div key={index} variants={iconVariants(2.5 + index)} initial="initial" animate="animate" className="border-2 border-white rounded-2xl bg-white p-3">
// //                         <Icon className="text-7xl text-black shadow-xl shadow-black/50 bg-white/30 rounded-xl p-2" />
// //                      </motion.div>
// //                   ))}
// //                </motion.div>
// //             </motion.div>
// //          </div>
// //       </div>
// //    );
// // };

// // export default Skills;


// import { FaPython, FaJava, FaReact } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import { RiJavascriptFill } from "react-icons/ri";
// import { SiJupyter, SiTensorflow, SiOpencv, SiNumpy, SiPandas } from "react-icons/si";
// import { TbBrandCpp } from "react-icons/tb";
// import { VscVscode } from "react-icons/vsc";
// import { FaGitAlt } from "react-icons/fa";

// const skills = [
//    { name: "Python", icon: FaPython },
//    { name: "Java", icon: FaJava },
//    { name: "JavaScript", icon: RiJavascriptFill },
//    { name: "C++", icon: TbBrandCpp },
//    { name: "TensorFlow", icon: SiTensorflow },
//    { name: "NumPy", icon: SiNumpy },
//    { name: "OpenCV", icon: SiOpencv },
//    { name: "Pandas", icon: SiPandas },
//    { name: "Jupyter", icon: SiJupyter },
//    { name: "VS Code", icon: VscVscode },
//    { name: "React", icon: FaReact },
//    { name: "Git", icon: FaGitAlt },
// ];

// const Skills = () => {
//    return (
//       <section className="py-16" id="skills">
//          <motion.h1
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.8 }}
//             className="text-center text-4xl font-bold mb-10"
//          >
//             Skills Set
//          </motion.h1>

//          {/* Skills Grid */}
//          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-6 max-w-4xl mx-auto">
//             {skills.map((skill, index) => {
//                const Icon = skill.icon;
//                return (
//                   <motion.div
//                      key={index}
//                      whileHover={{ scale: 1.1 }}
//                      className="flex flex-col items-center p-4 bg-white backdrop-blur-lg rounded-xl shadow-lg hover:bg-black hover:text-white"
//                   >
//                      <Icon className="text-4xl mb-2" />
//                      <p className="text-sm font-medium">{skill.name}</p>
//                   </motion.div>
//                );
//             })}
//          </div>
//       </section>
//    );
// };

// export default Skills;


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

// const Hero = () => {
//   const boxVariants = {
//     hover: {
//       y: -5,
//       transition: { duration: 0.4, ease: "easeOut" }
//     },
//     rest: {
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" }
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
//       id="hero-section"
//       className="relative flex w-screen items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-900/80 to-black/90  rounded-3xl border border-white/20 py-6 backdrop-blur-lg overflow-hidden bg-black/95 text-white shadow-2xl"
//     >
//       <div className="flex flex-col w-full max-w-6xl mx-auto p-4 md:p-10 gap-6">
//         {/* Top Section - Profile Info */}
//         <div className="flex flex-col items-center justify-center z-10 mb-6">
//           <h2 className="my-4 text-4xl sm:text-5xl md:text-4xl lg:text-[5rem] font-bold">
//             {HERO.name}
//           </h2>
//           <h2 className="my-4 text-lg md:text-2xl lg:text-[17px] font-bold">
//             {HERO.username}
//           </h2>
//           <p className="p-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter">
//             {HERO.greet}
//           </p>
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
//             <a
//               href="/cv.pdf"
//               download
//               className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium bg-white/10 text-white hover:bg-white hover:text-black"
//             >
//               Explore My CV <SiReaddotcv className="ml-2" />
//             </a>
//             <a
//               href="mailto:kaungkhantcoder@gmail.com"
//               className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium bg-white/10 text-white hover:bg-white hover:text-black"
//             >
//               <CgMail className="mr-2" /> SEND EMAIL
//             </a>
//           </div>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols- md:grid-cols-5 gap-4 md:gap-6 w-full min-h-[500px]">
//           {/* Box 1 - About Myself */}
//           <motion.div
//             variants={boxVariants}
//             whileHover="hover"
//             initial="rest"
//             className="relative p-6 md:p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-2 md:row-span-3"
//           >
//             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//             <motion.div className="relative z-10 flex flex-col h-full">
//               <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
//                 <span className="inline-block w-8 h-1 bg-purple-400 mr-2"></span> About Me
//               </h3>
//               <p className="text-sm md:text-base text-gray-300 flex-grow">
//                 {HERO.description || "Creative coder weaving tech and imagination into solutions that matter."}
//               </p>
//               <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-purple-400/30 rounded-bl-xl"></div>
//             </motion.div>
//           </motion.div>

//           {/* Box 2 - GitHub Profile */}
//           <motion.div
//             variants={boxVariants}
//             whileHover="hover"
//             initial="rest"
//             className="relative p-4 md:p-6 rounded-xl bg-gradient-to-r from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-3 md:row-span-1"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative z-10">
//               <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
//                 <span className="inline-block w-8 h-1 bg-green-400 mr-2"></span> GitHub
//               </h3>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm md:text-base text-gray-300 hover:text-white flex items-center transition-colors"
//               >
//                 <FaGithub className="mr-2 text-xl" /> github.com/yourusername
//               </a>
//             </div>
//             <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-green-400/30 rounded-tr-xl"></div>
//           </motion.div>


//           {/* Box 3 - Social Media */}
//           <motion.div
//             variants={boxVariants}
//             whileHover="hover"
//             initial="rest"
//             className="relative p-4 md:p-6 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-1 md:row-span-2"
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative z-10">
//               <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
//                 <span className="inline-block w-8 h-1 bg-blue-400 mr-2"></span> Connect
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition-colors">
//                   <FaReddit />
//                 </a>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition-colors">
//                   <FaFacebook />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-300 transition-colors">
//                   <FaTwitter />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 transition-colors">
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>
//             <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400/30 rounded-br-xl"></div>
//           </motion.div>

//           {/* Box 4 - Tech Stack */}
//           <motion.div
//             variants={boxVariants}
//             whileHover="hover"
//             initial="rest"
//             className="relative p-6 md:p-8 rounded-xl bg-gradient-to-r from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-4 md:row-span-2"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-yellow-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative z-10">
//               <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
//                 <span className="inline-block w-8 h-1 bg-orange-400 mr-2"></span> Tech Stack
//               </h3>
//               <div className="flex flex-wrap gap-6 md:gap-8">
//                 {skills.map((skill, index) => {
//                   const Icon = skill.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       className="flex items-center space-x-2 bg-black/50 p-3 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors"
//                     >
//                       <Icon className="text-xl md:text-2xl text-gray-300 hover:text-orange-400" />
//                       <p className="text-xs md:text-sm text-gray-300 hover:text-white">{skill.name}</p>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-orange-400/30 rounded-bl-xl"></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { HERO, SKILLS, INTEREST, otherskills, EmailButton } from "../constants";
import { FaReddit, FaFacebook, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa6";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";
import { SiReaddotcv } from "react-icons/si";
import { BIO } from "../constants";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

// Sample data (replace with your actual data in constants or props)
const EXPERIENCE = [
  { role: "Software Developer", company: "Tech Corp", duration: "2022 - Present" },
  { role: "Junior Developer", company: "Code Inc", duration: "2020 - 2022" },
];

const EDUCATION = [
  { degree: "B.S. in Computer Science", institution: "Tech University", year: "2016 - 2020" },
];

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
      className="relative flex w-full items-center justify-center min-h-screen text-center rounded-3xl bg-black  border border-white/20 py-2 mt-[30px] overflow-hidden bg-black/95 text-white"
    >
      <div className="flex flex-col w-full max-w-6xl mx-auto p-5 md:p-10 gap-6">
        {/* Top Section - Profile Info */}
        <div className="flex flex-col items-center justify-center z-10 mb-6">
          <h1 className="my-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter">
            {HERO.greet}
          </h1>
          <h1 className="text-2xl m-2 md:m-3 sm:text-5xl md:text-4xl lg:text-[5rem] font-bold">
              {HERO.name}
          </h1>
          <div className="items-center mt-3 md:mt-7 backdrop-blur-lg border border-gray-200 text-center rounded-lg hover:scale-105 transition font-medium bg-white text-black dark:focus:ring-gray-600 dark:bg-black/20 dark:border-green-400 dark:text-white">
            <h1 className="p-3 md:p-4 text-2xl md:text-3xl lg:text-[3rem] font-bold">
              <span className="inline-block w-4 h-1 bg-green-400 mr-2"></span> {HERO.job}
            </h1>
          </div>
          <h1 className="mt-5 p-2 text-lg md:text-2xl lg:text-[17px] font-bold">
            {HERO.username}
          </h1>
          {/* Lottie Animation Container */}
          <div
            ref={lottieContainer}
            className="w-full h-[200px] mt-4"
            style={{ position: "relative" }}
          ></div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <a
              href="/cv.pdf"
              download
              className="flex items-center px-4 py-2 border border-gray-200 text-center rounded-lg hover:scale-105 transition font-medium bg-white text-black dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              Explore My CV <SiReaddotcv className="ml-2" />
            </a>
            <EmailButton />
          </div>
          <h1 className="mt-2 p-2 text-lg md:text-2xl lg:text-[17px] font-bold">
            {HERO.ph_num}
          </h1>
          <div className="flex space-x-6 mt-2 justify-center">
              <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
                <FaReddit />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                <FaGithub />
              </a>
           </div>
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


          {/* Box 4 - Experience (Middle Right, Wide) */}
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
              <div className="flex flex-wrap gap-6 md:gap-3">
                {INTEREST.map((INTEREST, index) => {
                  const Icon = INTEREST.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center space-x-2 bg-black/50 p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                    >
                      <Icon className="text-xl md:text-2xl text-gray-300 hover:text-purple-400" />
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
            className="relative p-6 md:p-8 rounded-xl bg-white border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-4 md:row-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-6">
                <span className="inline-block w-8 h-1 bg-black mr-2"></span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-5">
                {SKILLS.map((SKILLS, index) => {
                  const Icon = SKILLS.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center space-x-2 bg-black p-3 text-white rounded-lg border hover:border-black orange-500/50 hover:bg-white hover:text-black transition-colors"
                    >
                      <Icon className="text-xl md:text-2xl" />
                      <p className="text-xs md:text-sm">{SKILLS.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-black rounded-bl-xl"></div>
          </motion.div>

          <motion.div
              variants={boxVariants}
              whileHover="hover"
              initial="rest"
              className="relative p-6 rounded-xl md:p-8 bg-gradient-to-r from-gray-900/80 to-black/90 border border-gray-700/50 shadow-lg overflow-hidden col-span-1 md:col-span-4 md:row-span-1 [clip-path:polygon(0_0,calc(100%-2rem)_0,100%_2rem,100%_100%,0_100%)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-blue-300/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                  <span className="inline-block w-8 h-1 bg-blue-400 mr-2"></span> Other Skills
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
        </div>
      </div>
    </section>
  );
};

export default Hero;