import { FaReddit, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPython, FaJava, FaReact } from "react-icons/fa6";
import { SiJupyter, SiTensorflow, SiOpencv, SiNumpy, SiPandas } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiStreamlit, SiInternetcomputer } from "react-icons/si";
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
        class="relative inline-flex items-center border-[2px] border-white/50 justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
        <span class="w-[310px] h-[350px] rounded rotate-[-40deg] bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">kaungkhantcoder@gmail.com ↗</span>
      </a>

      {/* Custom Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[-1rem] left-1/4 transform -translate-x-1/2 px-4 py-2 bg-gray-900/90 text-white text-sm rounded-lg shadow-lg border border-gray-700/50 flex items-center"
        >
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Email copied!
        </motion.div>
      )}
    </div>
  );
};



// import {
//   FaXTwitter,
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaDiscord,
//   FaInstagram,
// } from "react-icons/fa6";

import profileImage from "../assets/Koderlogo.png"
import projectImage1 from "../assets/Project1.png";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import projectImage7 from "../assets/project7.webp";
import projectImage8 from "../assets/project8.webp";
import projectImage9 from "../assets/project9.webp";

import cert1 from "/src/assets/project2.jpeg"; // Example certificate
import cert2 from "/src/assets/project3.jpeg"; // Example certificate
import hackathon1 from "/src/assets/project3.jpeg"; // Example hackathon win
import cert3 from "/src/assets/image.webp"; // Example hackathon win

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiDjango, SiMysql, SiFlask } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";

export const profile = { image: profileImage }

export const NAVIGATION_LINKS = [
  { label: "Main", href: "#hero", icon: FaAddressCard },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const achievements = [
  { image: cert1, title: "React Developer Certificate" },
  { image: hackathon1, title: "AI Hackathon 2023 - 1st Place" },
  { image: cert2, title: "Backend Development Course" },
  { image: cert3, title: "AI Agents Course" },
];

export const HERO = {
  name: "This is Kaung Khant",
  username: "@kaungkhantcoder",
  greet: "Hello there! 👋🏻",
  job: "Technophile",
  ph_num: "+959976126328",
};

export const SKILLS = [
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: RiJavascriptFill },
  { name: "C++", icon: SiCplusplus },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "NumPy", icon: SiNumpy },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Pandas", icon: SiPandas },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: FaDocker },
  { name: "Postgresql", icon: BiLogoPostgresql },
  { name: "React", icon: FaReact },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "Git", icon: FaGitAlt },
];

import { BsCpuFill, BsRobot } from "react-icons/bs";
import { MdVolunteerActivism } from "react-icons/md";
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
  { name: "Communication", icon: FaPython },
  { name: "Teamwork", icon: FaPython },
  { name: "Problem Solving", icon: FaPython },
  { name: "Active Listening", icon: FaPython },
  { name: "Critical Thinking", icon: FaPython },
  { name: "English C2", icon: FaPython },
  { name: "German B2", icon: FaPython },
  { name: "Time Management", icon: FaPython },
];

const Description = [
  {
    description1:
      "This is my application, This is making in one day, You can chat with our bot, that's excaetly, working on you machine."
  },
  {
    description2:
      "You can chat with our bot, that's excaetly, working on you machine."
  },
]

export const projects = [
  { id: 1, name: "My Portfolio", image: projectImage1, date: "April 2, 2025", description: Description[0].description1, github: "https://github.com" },
  { id: 2, name: "Project 2", image: projectImage1, date: "April 2, 2025", description: Description[1].description2, github: "https://github.com" },
  { id: 3, name: "Project 3", image: projectImage1, date: "April 2, 2025", description: "This is my application", github: "https://github.com" },
  { id: 4, name: "Project 4", image: projectImage1, date: "April 2, 2025", description: "This is my application", github: "https://github.com" },
  { id: 5, name: "Project 4", image: projectImage1, date: "April 2, 2025", description: "This is my application", github: "https://github.com" },
  { id: 6, name: "Project 4", image: projectImage1, date: "April 2, 2025", description: "This is my application", github: "https://github.com" },
];

export const BIO = {
  main_text: "Hi! This is Kaung Khant, and also know as Koder Grit.",
  description: "I am a passionate creating software and hardware with AI, ML, and CV. I would like to create computer vision app with IOT devieces. Currently, I am going to create Rubik's cube detection and solving CV + ML application. And If you have any idea of project, you can reach me out freely. I'm ready to contribute you.",

};
