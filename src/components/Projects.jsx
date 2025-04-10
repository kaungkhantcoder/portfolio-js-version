// import { HERO } from "../constants";
// import { FaReddit, FaFacebook, FaTwitter, FaLinkedin, FaGithub,  } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { CgMail } from "react-icons/cg";
// import { SiReaddotcv } from "react-icons/si";

// const Hero = () => {

//   return (
//     <section
//       id="hero-section"
//       className="relative flex w-full flex-col items-center justify-center min-h-screen text-center rounded-lg border border-white/20 py-3 backdrop-blur-lg overflow-hidden bg-black/90 text-white shadow-lg grid-bg-hero-light"
//     >

//       {/* Hero Content */}
//       <div className="relative w-full md:w-100 z-10 p-10">
//         <motion.h2
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -100 }}
//           transition={{ duration: 1.5 }}
//           className="my-8 text-6xl font-bold md:text-4xl lg:text-[5rem]"
//         >
//           {HERO.title}
//         </motion.h2>
//         <h2 className="my-8 text-1xl font-bold md:text-2xl lg:text-[17px]">
//           {HERO.username}
//         </h2>
//         <p className="p-2 text-3xl tracking-tighter lg:text-4xl">{HERO.greet}</p>
//         <p className="p-2 text-1xl tracking-tighter lg:text-18px">{HERO.description}</p>

//         {/* Profile + Buttons Box */}
//         <div className="relative items-center justify-items-center w-full max-w-lg mx-auto mt-8 p-4">
//           {/* Buttons */}
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//             <a
//               href="/cv.pdf"
//               download
//               className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium green text-black hover:bg-white hover:text-black"
//             >
//               Explore My CV <SiReaddotcv />
//             </a>
//             <a
//             href="mailto:kaungkhantcoder@gmail.com"
//             className="flex items-center px-4 py-2 backdrop-blur-lg text-center rounded-lg hover:scale-105 transition font-medium green text-black hover:bg-white hover:text-black"
//             >
//                <CgMail /> SEND EMAIL
//             </a>
//           </div>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex space-x-6 mt-6 justify-center">
//           <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
//             <FaReddit />
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
//             <FaFacebook />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
//             <FaTwitter />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
//             <FaLinkedin />
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-500">
//             <FaGithub />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";

// const Hero = () => {
//   // Example projects data (replace with your actual projects)
//   const projects = [
//     {
//       title: "Project 1",
//       description: "A cool web app built with React and Tailwind.",
//       link: "https://example.com/project1",
//     },
//     {
//       title: "Project 2",
//       description: "A mobile-friendly dashboard with real-time data.",
//       link: "https://example.com/project2",
//     },
//     {
//       title: "Project 3",
//       description: "An e-commerce site with payment integration.",
//       link: "https://example.com/project3",
//     },
//     {
//       title: "Project 3",
//       description: "An e-commerce site with payment integration.",
//       link: "https://example.com/project3",
//     },
//   ];

//   const cardVariants = {
//     rest: { scale: 1, y: 0 },
//     hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
//   };

//   return (
//     <section
//       id="hero-section"
//       className="relative flex w-full flex-col items-center justify-center min-h-screen text-center rounded-3xl border border-white/10 py-12 backdrop-blur-lg overflow-hidden bg-black/90 text-white shadow-lg grid-bg-hero-light"
//     >
//       {/* Title */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//               {PROJECTS.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   className="overflow-hidden p-6 border border-stone-50/30 rounded-lg bg-gradient-to-r from-blue-900/90 to-black/90 backdrop-blur-sm shadow-md mb-5 hover:shadow-lg transition-shadow"
//                   whileInView={{ opacity: 1, x: 0}}
//                   initial={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 1.0, delay: index * 0.1 }}
//                 >
//                   {/* Repo Header */}
//                   <div className="flex items-center gap-3 mb-3">
//                     <FaGithub className="text-black text-xl" />
//                     <h3 className="text-lg text-blue-500 font-semibold">{project.name}</h3>
//                   </div>

//                   {/* Description */}
//                   <p className="text-black/70 text-sm mb-3">{project.description}</p>

//                   {/* Tech Stack Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.techStack.map((tech) => (
//                       <span key={tech} className="bg-blue-700 text-white px-2 py-1 text-xs rounded-md">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Repo Stats (Stars & Forks) */}
//                   <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
//                     <div className="flex items-center gap-2">
//                       <FaStar />
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <FaCodeBranch />
//                     </div>
//                   </div>

//                   {/* GitHub Link Button */}
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 w-full px-4 py-2 mb-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition"
//                   >
//                     <FaGithub />
//                     View on GitHub
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 w-full px-4 py-2 mb-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition"
//                   >
//                     <FaGithub />
//                     View on Web App
//                   </a>
//                 </motion.div>
//               ))}
//             </div>
//     </section>
//   );
// };

// export default Hero;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { projects } from "../constants"; // Ensure this points to index.jsx

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("AI & ML");
//   const [showAll, setShowAll] = useState(false); // Track if all projects are shown

//   const tabs = ["AI & ML", "Web", "3D Design", "Circut"];

//   const cardVariants = {
//     rest: { opacity: 0.8, scale: 1 },
//     hover: { opacity: 1, scale: 1.03, transition: { duration: 0.3 } },
//   };

//   // Limit to 3 projects initially, or show all if showAll is true
//   const displayedProjects = showAll
//     ? projects[activeTab]
//     : projects[activeTab].slice(0, 4);

//   return (
//     <section
//       id="projects"
//       className="relative w-screen py-16 text-white overflow-hidden"
//     >
//       {/* Header */}
//       <motion.h1
//         className="text-4xl text-gray-800 md:text-5xl font-bold text-center mb-12"
//       >
//         My Projects
//       </motion.h1>

//       {/* Tab Bar */}
//       <div className="flex justify-center mb-10">
//         <div className="inline-flex rounded-xl bg-black p-2 border border-gray-700/50">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setShowAll(false); // Reset to 3 projects when switching tabs
//               }}
//               className={`px-3 md:px-6 py-2 rounded-xl text-[11px] md:text-sm font-medium transition-colors ${
//                 activeTab === tab
//                   ? "bg-white text-black"
//                   : "text-gray-300 hover:text-white hover:bg-white/30"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {displayedProjects.map((project, index) => (
//             <motion.div
//               key={`${activeTab}-${index}`} // Unique key per tab and index
//               variants={cardVariants}
//               initial="rest"
//               whileHover="hover"
//               className="p-5 bg-black border rounded-xl"
//             >
//               <div className="w-6 h-1 bg-red-500 my-2 justify-start"></div>
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-40 object-cover mb-4 rounded-md"
//               />
//               <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
//               <p className="text-sm text-gray-400 mb-1">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-red-500 hover:text-blue-400 text-sm font-medium"
//               >
//                 View Project →
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* See More / Show Less Button */}
//         {projects[activeTab].length > 4 && (
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="px-6 py-2 rounded-xl bg-gray-800/50 text-white border border-gray-700/50 hover:bg-gray-700/70 transition-colors text-sm font-medium"
//             >
//               {showAll ? "Show Less" : "See More"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import { useState } from "react";
// import { projects } from "../constants";

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false); // State to toggle between 4 and all projects
//   const visibleProjects = showAll ? projects : projects.slice(0, 4); // Show 4 projects or all

//   return (
//     <div className="">
//       <h1 className="text-bold text-left text-[40px] md:text-[70px] text-black p-4">My Works <span className="inline-block w-8 h-1 bg-black mr-2"></span></h1>
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-4 max-w-4xl mx-auto" id="projects">
//         {visibleProjects.map((project) => (
//           <div
//             key={project.id}
//             className="relative overflow-hidden border p-3 border-black/50 rounded-lg group"
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="w-full h-full object-cover transition rounded-lg border border-gray-200 duration-300 group-hover:blur-sm"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-lg font-bold">{project.name}</h3>
//               <p className="text-white text-md font-medium text-center pl-4 pr-4 p-2">
//                 {project.description}
//               </p>
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-2 bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition duration-300"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         ))}
//         {/* See More / Show Less Button */}
//         {projects.length > 4 && (
//           <div className="col-span-full flex justify-center mt-6">
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="px-6 py-2 rounded-xl bg-black text-white border border-gray-700/50 hover:bg-white hover:text-black transition-colors text-sm font-medium"
//             >
//               {showAll ? "Show Less" : "See More"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { useState } from "react";
import { projects, profile, STACKS } from "../constants";
import { FaGithub } from "react-icons/fa6";


const Projects = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle between 4 and all projects
  const visibleProjects = showAll ? projects : projects.slice(0, 4); // Show 4 projects or all

  return (
    <div id='projects'>
      <h1 className="text-left p-6 text-[40px] md:text-[70px] text-black">
        My Works <span className="inline-block w-8 h-1 bg-black mr-2"></span>
      </h1>
      <div className="grid items-start gird-cols-1 gap-4 p-6 w-full mx-auto">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            {/* Header (Avatar, Name, Date) */}
            <div className="flex items-center mb-3">
              <img
                src={profile.image}
                alt={project.name}
                className="w-10 h-10 rounded-full flex-shrink-0 mr-3 flex items-center justify-center text-white font-bold text-sm"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-black font-semibold">{project.myname}</h3>
                    <span className="text-black/50 text-xs">
                      {project.date}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block bg-black/90 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:scale-105 transition duration-200"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Content (Description + Tech Stack) */}
            <hr></hr>

            {/* Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 mb-3 mt-3 gap-4 rounded-lg">

              <div className="p-2  md:border-r-2 md:border-gray-300">
                <h1 className="text-black font-bold text-[30px]">{project.name}</h1>
                <p className="text-black/90 text-sm overflow-hidden mt-3 mb-3">{project.description}</p>
              </div>

              <div className="p-3 bg-gray-300/20 border border-gray-400 shadow-xl rounded-lg">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1">
                {project.contributors && project.contributors.length > 0 && (
                  <div className="mt-2 md:mt-0 bg-gray-300/20 border border-gray-400 rounded-lg p-2">
                    <h2 className="font-bold text-lg text-black mb-2">Contributors</h2>
                    {project.contributors.map((contributor, index) => (
                      <a
                        key={index}
                        href={contributor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mb-2 px-2 py-2 border border-white rounded-lg bg-gray-900/70 text-white font-thin text-[11px] shadow-sm transition-all duration-300 hover:bg-gray-900 mr-2"
                      >
                        <FaGithub className="mr-2 text-lg" />
                        {contributor.name}
                      </a>
                    ))}
                  </div>
                )}

                <div className="mt-2 bg-gray-300/20 border border-gray-400 p-2 rounded-lg">
                  <h1 className="font-bold text-black text-xl">Tech Stacks</h1>
                  {STACKS.map((STACKS, index) => {
                    const Icon = STACKS.icon;
                    return (
                      <div
                        key={index}
                        className="inline-flex items-center cursor-pointer mb-2 md:my-2 px-2 py-2 border border-gray-900/50 rounded-full bg-gradient-to-tr from-black to-gray-700 text-white font-thin text-[11px] transition-all duration-300 hover:scale-105 mr-3"
                      >
                        <Icon className="text-xl text-center md:text-3xl" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden bg-black/90 text-white hover:text-black hover:bg-black px-4 py-1.5 rounded-md md:text[16px] text-[12px] font-medium hover:scale-105 transition duration-200"
            >
              View on GitHub
            </a>
          </div>
        ))}
        {/* See More / Show Less Button */}
        {projects.length > 4 && (
          <div className="col-span-full flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-xl bg-black text-white border border-gray-700/50 hover:bg-white hover:text-black transition-colors text-sm font-medium"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;