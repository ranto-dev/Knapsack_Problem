import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: { y: -3, color: "#60a5fa", transition: { duration: 0.3 } },
  };

  return (
    <footer className="w-full bg-[#050505] text-white py-12 px-8 border-t border-white/5 relative overflow-hidden">
      {/* Glow discret en arrière-plan */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        {/* Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-lg font-semibold tracking-tight">
            Knapsack{" "}
            <span className="text-blue-400 font-light italic">Lab</span>
          </h2>
          <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-light">
            © {currentYear} — Built by{" "}
            <span className="text-gray-300 font-medium">Ranto</span>
          </p>
        </div>

        {/* Navigation - Minimaliste */}
        <nav className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-500">
          <a
            href="#about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#try-it"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Simulator
          </a>
          <a
            href="#example"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Case Study
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex gap-5">
          {[
            { icon: <FaGithub />, href: "https://github.com/ranto-dev" },
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/ranto" },
            { icon: <FaGlobe />, href: "https://ranto-dev.vercel.app/" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 text-lg transition-colors hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Signature ligne de bas de page */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/[0.02] flex justify-center">
        <p className="text-[10px] text-gray-600 font-light flex items-center gap-2 italic">
          Designed for precision & performance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
