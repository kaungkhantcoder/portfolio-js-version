import { useState, useEffect } from "react";
import { HERO } from "../constants";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md"; // Icons for toggle

const Contact = () => {


  return (
    <section
      id="contact"
      className={`relative flex w-full flex-col items-center justify-center min-h-screen text-center rounded-lg border border-white/20 py-3 backdrop-blur-lg overflow-hidden"}`}
    >


      {/* Hero Content */}

      <div className="relative w-full md:w-100 z-10 p-10">

        {/* Profile + Buttons Box */}
        <div className={`relative items-center justify-items-center w-full max-w-md mx-auto mt-8 p-6 backdrop-blur-md rounded-xl border shadow-lg`}>


          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="/cv.pdf"
              download
              className={`px-4 flex py-2 backdrop-blur-lg rounded-lg hover:scale-105 transition`}
            >
              Explore My CV
            </a>
            <a
              href="#contact"
              className={`px-4 py-2 backdrop-blur-lg rounded-lg hover:scale-105 transition`}
            >
              Project with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;