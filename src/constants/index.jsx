import { FaPython, FaJava, FaReact, FaGolang, FaFigma, FaPeopleGroup, FaLightbulb } from "react-icons/fa6";
import { SiJupyter, SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiFastapi } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiStreamlit, SiInternetcomputer, SiTypescript } from "react-icons/si";
import { TbMathSymbols } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { IoTabletPortrait } from "react-icons/io5";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdBusiness } from "react-icons/md";

export const EmailButton = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kaungkhantcoder@gmail.com");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className="relative">
      {/* Copy Email Button */}
      <a
        onClick={handleCopyEmail}
        class="relative inline-flex items-center border-[2px] border-white/50 justify-start px-6 py-3 overflow-hidden font-bold transition-all bg-white rounded hover:bg-white group">
        <span class="w-[310px] h-[350px] rounded rotate-[-40deg] bg-[#121212] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"><h1>kaungkhantcoder@gmail.com ↗</h1></span>
      </a>

      {/* Custom Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[-1rem] left-1/4 lg:left-[8rem] transform -translate-x-1/2 px-4 py-2 bg-gray-900/90 text-white text-sm rounded-lg shadow-lg border border-gray-700/50 flex items-center"
        >
          <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
          Email copied!
        </motion.div>
      )}
    </div>
  );
};

import profileImage from "../assets/Koderlogo.png"
import projectImage1 from "../assets/project_pro.png";
import projectImage2 from "../assets/Project_Leaf_It_new.png";


import { SiMongodb, SiDjango, SiMysql, SiFlask } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaAssistiveListeningSystems, FaBrain, FaFlagUsa, FaUserClock, FaKeyboard } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";

export const profile = { image: profileImage }

export const NAVIGATION_LINKS = [
  { label: "MAIN", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export const HERO = {
  name: "This is Kaung Khant",
  field: "Software Development\nMachine Learning",
  greet: "Hello there!",
  job: "Programmer",
  ph_num: "+959976126328",
};

export const EXPERIENCE = [
  { role: "Machine Learning Engineer", company: "Baymax 3.0", duration: "(Internship)" },
  { role: "Volunteer Web Developer", company: "Unity Of PFI", duration: "2025 - Present" },
  { role: "Volunteer Graphic Designer", company: "Code Mal", duration: "2024 - Present" },
];

export const EDUCATION = [
  { degree: "No Degree", institution: "Online Grade-12 & GED student", year: "2025" },
];

export const SKILLS = [
  { name: "Python", icon: FaPython },
  { name: "C++", icon: SiCplusplus },
  { name: "Golang", icon: FaGolang },
  { name: "JavaScript", icon: RiJavascriptFill },
  { name: "Typescript", icon: SiTypescript },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "NumPy", icon: SiNumpy },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Pandas", icon: SiPandas },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "FastAPI", icon: SiFastapi },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: FaDocker },
  { name: "Postgresql", icon: BiLogoPostgresql },
  { name: "React", icon: FaReact },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "Figma", icon: FaFigma },
  { name: "Git", icon: FaGitAlt },
];

import { BsCpuFill, BsRobot } from "react-icons/bs";
import { MdVolunteerActivism, MdPublic } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { FaChess, FaLaptopCode } from "react-icons/fa";
import { PiCubeFill } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";

export const INTEREST = [
  { name: "Entrepreneurship", icon: MdBusiness },
  { name: "Computer Vision", icon: SiInternetcomputer },
  { name: "Programming", icon: FaLaptopCode },
  { name: "AI", icon: LuBrainCircuit },
  { name: "Mathematics", icon: TbMathSymbols },
  { name: "Physics", icon: GiMaterialsScience },
  { name: "IOT", icon: IoTabletPortrait },
  { name: "Electronic Circut", icon: BsCpuFill },
  { name: "Volunteering", icon: MdVolunteerActivism },
  { name: "Politics", icon: GoLaw },
  { name: "Chess", icon: FaChess },
  { name: "Rubik's Cube", icon: PiCubeFill },
  { name: "Robotics", icon: BsRobot },
  { name: "3D Design", icon: FaPython },
];
export const otherskills = [
  { name: "Communication", icon: MdPublic },
  { name: "Teamwork", icon: FaPeopleGroup },
  { name: "80 WPM", icon: FaKeyboard },
  { name: "Problem Solving", icon: FaLightbulb },
  { name: "Active Listening", icon: FaAssistiveListeningSystems },
  { name: "Critical Thinking", icon: FaBrain },
  { name: "English C2", icon: FaFlagUsa },
  { name: "Time Management", icon: FaUserClock },
];

export const STACKS = [
  { id: 1, icon: FaPython },
  { id: 2, icon: FaPython },
  { id: 3, icon: FaPython },
]


export const BIO = {
  main_text: "Hi! This is Kaung Khant, and also know as Koder Grit.",
  description: "I am a passionate creating software and hardware with AI, ML, and CV. I would like to create computer vision app with IOT devieces. Currently, I am going to create Rubik's cube detection and solving CV + ML application. And If you have any idea of project, you can reach me out freely. I'm ready to contribute you.",

};

import certi1 from "../assets/MLops.png";
import certi2 from "../assets/TinyML.png";
import certi3 from "../assets/Baymax3.png";

export const CERTIFICATES = [
  {
    name: "MLOps Concepts",
    issuer: "DataCamp",
    date: "April 2, 2025",
    image: certi1
  },
  {
    name: "Fundamentals of TinyML",
    issuer: "HavardX",
    date: "April 2, 2025",
    image: certi2
  },
  {
    name: "ML Project Winner",
    issuer: "Simbolo",
    date: "January 28, 2025",
    image: certi3
  },
];

// export const projects = [
//   {
//     id: 1,
//     myname: "kaungkhantcoder",
//     name: "My Portfolio",
//     image: projectImage1,
//     date: "April 2, 2025",
//     description: Description[0].description1,
//     github: "https://github.com",
//     contributors: [], // No contributors
//   },
//   {
//     id: 2,
//     myname: "kaungkhantcoder",
//     name: "Leaf-It",
//     image: projectImage2,
//     date: "December 15, 2024",
//     description: Description[1].description2,
//     github: "https://github.com/kaungkhantcoder/Simbolo-leaf-it",
//     contributors: [
//       { name: "David Mg Mg", url: "https://github.com/DepressoLofi" },
//       { name: "Thant Htut Aung", url: "https://github.com/ThantHTUT" },
//       { name: "Thet Hmue Khin", url: "https://github.com/AThet01" },
//     ],
//   },
//   {
//     id: 3,
//     myname: "kaungkhantcoder",
//     name: "Project 3",
//     image: projectImage1,
//     date: "April 2, 2025",
//     description: "This is my application",
//     github: "https://github.com",
//     contributors: [
//       { name: "kaungkhant", url: "https://github.com/kaungkhant" }
//     ],
//   },
//   {
//     id: 4,
//     myname: "kaungkhantcoder",
//     name: "Project 4",
//     image: projectImage1,
//     date: "April 2, 2025",
//     description: "This is my application",
//     github: "https://github.com",
//     contributors: [
//       { name: "kaungkhant", url: "https://github.com/kaungkhant" }
//     ],
//   },
//   {
//     id: 5,
//     myname: "kaungkhantcoder",
//     name: "Project 5",
//     image: projectImage1,
//     date: "April 2, 2025",
//     description: "This is my application",
//     github: "https://github.com",
//     contributors: [
//       { name: "kaungkhant", url: "https://github.com/kaungkhant" }
//     ],
//   },
//   {
//     id: 6,
//     myname: "kaungkhantcoder",
//     name: "Project 6",
//     image: projectImage1,
//     date: "April 2, 2025",
//     description: "This is my application",
//     github: "https://github.com",
//     contributors: [
//       { name: "kaungkhant", url: "https://github.com/kaungkhant" }
//     ],
//   },
// ];

export const projects = [
  {
    id: 1,
    category: "AI Projects",
    name: "AI Chat bot system",
    description: "This chat bot can chat with everything you need to know.",
    image: projectImage1,
    github: "https://github.com",
    contributors: [
      { name: "kaungkhantcoder", url: "https://github.com/kaungkhantcoder" }
    ],
  },
  {
    id: 2,
    category: "AI Projects",
    name: "Welcome to Leaf-It",
    description: "Leaf-It is a web application that provides information about plants, their care, and more.",
    image: projectImage2,
    github: "https://github.com",
    contributors: [
      { name: "kaungkhantcoder", url: "https://github.com/kaungkhantcoder" }
    ],
  },
  {
    id: 3,
    category: "AI Projects",
    name: "Welcome to Leaf-It",
    description: "Leaf-It is a web application that provides information about plants, their care, and more.",
    image: projectImage1,
    github: "https://github.com",
    contributors: [
      { name: "kaungkhantcoder", url: "https://github.com/kaungkhantcoder" }
    ],
  },
  {
    id: 4,
    category: "Web Projects",
    name: "E-commerce Website",
    description: "This website can buy everything you want.",
    image: projectImage1,
    github: "https://github.com",
    contributors: [
      { name: "kaungkhantcoder", url: "https://github.com/kaungkhantcoder" }
    ],
  },
  {
    id: 5,
    category: "Web Projects",
    name: "Welcome to Leaf-It",
    description: "Leaf-It is a web application that provides information about plants, their care, and more.",
    image: projectImage1,
    github: "https://github.com",
    contributors: [
      { name: "kaungkhantcoder", url: "https://github.com/kaungkhantcoder" }
    ],
  },
  {
    id: 6,
    category: "AI Projects",
    name: "Welcome to Leaf-It",
    description: "Leaf-It is a web application that provides information about plants, their care, and more.",
    image: projectImage1,
    github: "https://github.com",
    contributors: [
      { name: "kaungkhantcoder", url: "https://github.com/kaungkhantcoder" }
    ],
  },
  {
    id: 7,
    category: "Web Projects",
    name: "Welcome to Leaf-It",
    description: "Leaf-It is a web application that provides information about plants, their care, and more.",
    image: projectImage1,
    github: "https://github.com",
    contributors: [
      { name: "kaungkhantcoder", url: "https://github.com/kaungkhantcoder" }
    ],
  },
];