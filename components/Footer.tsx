import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#151030] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-xl font-semibold">Connect with me:</span>
          <div className="ml-4 flex">
            <a
              href="https://www.linkedin.com/in/shoaib-ahamed-shafi-4a8642190/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <AiFillLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/shoaib-ahamed"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-400 hover:text-white transition duration-300"
            >
              <AiFillGithub className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div>
          <b className="text-gray-400">shoaibahamedshafi@gmail.com</b>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ShoaibAhamed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
