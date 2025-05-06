import { FaReddit, FaFacebook, FaSquareXTwitter, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa6";
import { EmailButton } from "../constants"

const ContactMe = () => {
  return (
    <section className="w-screen bg-white ">
      <div className="mb-10"></div>
      <div className="bg-gradient-to-tr from-[#272525] via-[#111010] to-[#201c1c] rounded-t-[30px] text-white ">
        <div className="w-screen py-[65px] px-6 md:px-24 lg:px-[11rem]" id="contact">
          <p className="text-sm text-white mb-4">+ Contact Me</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            If you have any open-source proejct ideas, <span className="text-gray-400 font-normal">feel free to reach out to me — I'd love to <span className="text-white">contribute</span></span>
          </h1>

          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-1">Contact me at:</p>
            <EmailButton />
          </div>
          <div className="flex space-x-6 mt-5 text-white/50 justify-start">
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white">
              <FaReddit />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white">
              <FaSquareXTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white">
              <FaTelegram />
            </a>
            <a href="https://github.com/kaungkhantcoder" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="border-t border-white pt-3 mt-4 flex flex-col md:flex-row items-center justify-between text-xs">
            <p className="text-lg">+95 99 7612 6328</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <h1>&copy; {new Date().getFullYear()} kaungkhantcoder</h1>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
};

export default ContactMe;
