import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants/index.jsx";
import { motion } from "framer-motion";

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

  // Animation variants for the menu
  const menuVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 300, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-lg bg-gray-900/80 border border-gray-500 text-white hover:bg-gray-800/90 transition-colors focus:outline-none"
      >
        {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-16 right-4 w-64 my-2 bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-lg p-4"
        >
          <ul className="flex flex-col gap-4">
          <span className="inline-block w-8 h-1 bg-white mr-2"></span>
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="block text-white/90 text-lg font-medium p-1 rounded-sm hover:text-black hover:bg-white transition-colors"
                >
                  {item.label}
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