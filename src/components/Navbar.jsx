import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants/index.jsx";
import { motion } from "framer-motion";
// import mainbg from "https://4kwallpapers.com/images/walls/thumbs_3t/19871.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -87;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-lg active:shadow-none shadow-lg bg-black transition-colors focus:outline-none"
      >
        {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-16 w-[17rem] right-6 my-2 hover:text-white bg-white drop-shadow-lg rounded-xl shadow-lg p-4"
        >
          <span className="inline-block w-[3rem] h-1 bg-[#121212] ml-1.5 my-3"></span>
          <ul className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-white drop-shadow-xl rounded-md shadow-lg w-full p-[5px]">
              <img className="w-full rounded-md border h-[50px]"
                style={{
                  backgroundImage: `url(${"https://4kwallpapers.com/images/walls/thumbs_2t/17664.jpg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }} />

            </div>

            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}
                className={`${index === NAVIGATION_LINKS.length - 1 ? "col-span-2" : ""}`}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="rounded relative block items-center text-center px-2 py-2 cursor-pointer active:shadow-none shadow-lg bg-gradient-to-tr from-black to-black/80 hover:font-bold text-white"
                >
                  <span class="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;