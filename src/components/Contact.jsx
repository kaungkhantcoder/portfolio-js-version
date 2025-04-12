import { FaReddit, FaFacebook, FaSquareXTwitter, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa6";
import { EmailButton } from "../constants"

const ContactMe = () => {
  return (
    <section className="w-screen bg-white ">
      <div className="mb-10"></div>
      <div className="bg-gradient-to-br from-[#3d3457] via-[#121212] to-[#020229] rounded-t-[30px] text-white ">
        <div className="w-screen py-[65px] px-6 md:px-24" id="contact">
          <p className="text-sm text-blue-400 mb-4">+ Contact Me</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            If you have any open-source proejct ideas, <span className="text-gray-400 font-normal">feel free to reach out to me — I'd love to contribute</span>
          </h1>

          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-1">Contact me at:</p>
            <EmailButton />
          </div>
          <div className="flex space-x-6 mt-5 justify-start">
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
              <FaReddit />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaSquareXTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <FaTelegram />
            </a>
            <a href="https://github.com/kaungkhantcoder" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
          <div className="border-t border-gray-700 pt-3 mt-4 flex flex-col md:flex-row items-center justify-between text-xs">
            <p className="text-lg">+95 99 7612 6328</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <p>&copy; {new Date().getFullYear()} kaungkhantcoder</p>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
};

export default ContactMe;
