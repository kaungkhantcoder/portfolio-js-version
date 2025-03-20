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
import { CgMail } from "react-icons/cg";
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
        className="flex items-center px-4 py-2 backdrop-blur-lg border border-gray-200 text-center rounded-lg hover:scale-105 transition font-medium bg-white text-black dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
      >
        <CgMail className="mr-2" /> COPY EMAIL
      </a>

      {/* Custom Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-900/90 text-white text-sm rounded-lg shadow-lg border border-gray-700/50 flex items-center"
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


export const NAVIGATION_LINKS = [
  { label: "Main", href: "#hero" , icon: FaAddressCard },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
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
  { name: "Programming", icon: FaLaptopCode},
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
  { name: "3D Design", icon: FaPython},
];
export const otherskills = [
  { name: "Communication", icon: FaPython },
  { name: "Teamwork", icon: FaPython},
  { name: "Problem Solving", icon: FaPython},
  { name: "Active Listening", icon: FaPython},
  { name: "Critical Thinking", icon: FaPython},
  { name: "English C2", icon: FaPython},
  { name: "German B2", icon: FaPython},
  { name: "Time Management", icon: FaPython},
];

export const PROJECTS = [
  {
    id: 1,
    name: "BayMax 3.0",
    description: "Health Care Machine Learning Project.",
    techStack: ["Python", "TensorFlow", "CNN", "OpenCV", "Streamlit"],
    githubLink: "https://github.com/kaungkhantcoder/Baymax3.0"
  },
  {
    id: 2,
    name: "AI Chatbot",
    image: projectImage2,
    description: "A chatbot powered by OpenAI's GPT API.",
    techStack: ["Python", "Flask", "OpenAI API"],
    githubLink: "https://github.com/yourgithub/aichatbot"
  },
  {
    id: 3,
    name: "AI Chatbot",
    image: projectImage3,
    description: "A chatbot powered by OpenAI's GPT API.",
    techStack: ["Python", "Flask", "OpenAI API"],
    githubLink: "https://github.com/yourgithub/aichatbot"
  },
  {
    id: 4,
    name: "AI Chatbot",
    image: projectImage3,
    description: "A chatbot powered by OpenAI's GPT API.",
    techStack: ["Python", "Flask", "OpenAI API"],
    githubLink: "https://github.com/yourgithub/aichatbot"
  },
  {
    id: 5,
    name: "AI Chatbot",
    image: projectImage3,
    description: "A chatbot powered by OpenAI's GPT API.",
    techStack: ["Python", "Flask", "OpenAI API"],
    githubLink: "https://github.com/yourgithub/aichatbot"
  },
  {
    id: 6,
    name: "AI Chatbot",
    image: projectImage3,
    description: "A chatbot powered by OpenAI's GPT API.",
    techStack: ["Python", "Flask", "OpenAI API"],
    githubLink: "https://github.com/yourgithub/aichatbot"
  },
];

export const projects = {
  "AI & ML": [
    { title: "AI Chatbot", description: "A conversational AI using NLP.", link: "#", image: projectImage2 },
    { title: "AI Chatbot", description: "A conversational AI using NLP.", link: "#", image: projectImage2 },
    { title: "AI Chatbot", description: "A conversational AI using NLP.", link: "#", image: projectImage2 },
    { title: "Image Recognition", description: "Real-time object detection.", link: "#", image: projectImage3 },
    { title: "Image Recognition", description: "Real-time object detection.", link: "#", image: projectImage3 },
  ],
  "Web": [
    { title: "API Server", description: "RESTful API with Node.js.", link: "#", image: projectImage4 },
    { title: "Database Optimization", description: "Scalable SQL solution.", link: "#", image: projectImage9 },
  ],
  "3D Design": [
    { title: "3D Portfolio", description: "Interactive 3D web experience.", link: "#", image: projectImage6 },
    { title: "Game Asset", description: "Low-poly 3D model for games.", link: "#", image: projectImage7 },
  ],
  "Circut": [
    { title: "3D Portfolio", description: "Interactive 3D web experience.", link: "#", image: projectImage6 },
    { title: "Game Asset", description: "Low-poly 3D model for games.", link: "#", image: projectImage7 },
  ],
};


export const BIO = {
  main_text: "Hi! This is Kaung Khant, and also know as Koder Grit.",
  description: "I am a passionate creating software and hardware with AI, ML, and CV. I would like to create computer vision app with IOT devieces. Currently, I am going to create Rubik's cube detection and solving CV + ML application. And If you have any idea of project, you can reach me out freely. I'm ready to contribute you.",

};

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

// export const SOCIAL_MEDIA_LINKS = [
//   {
//     href: "https://x.com/",
//     icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://x.com/",
//     icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://x.com/",
//     icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://x.com/",
//     icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://github.com/",
//     icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://www.linkedin.com/",
//     icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
//   },
// ];
