import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[200px] bg-blue-950 text-gray-300 py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-blue-800">
      <div className="text-center md:text-left space-y-2">
        <h2 className="text-xl font-semibold text-white">Knapsack Solver</h2>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} — Built by Ranto with ❤️ and React +
          TypeScript
        </p>
      </div>

      <div className="flex gap-6 text-sm">
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#try-it" className="hover:text-white transition">
          Try It
        </a>
        <a href="#docs" className="hover:text-white transition">
          Docs
        </a>
      </div>

      <div className="flex gap-4 text-lg">
        <a
          href="https://github.com/ranto-dev"
          target="_blank"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/aina iarindranto"
          target="_blank"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://ranto-dev.vercel.app/"
          target="_blank"
          className="hover:text-white transition"
        >
          <FaGlobe />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
