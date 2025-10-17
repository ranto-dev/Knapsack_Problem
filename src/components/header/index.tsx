import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full bg-blue-950 text-white text-center py-20 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      {/* Triangle décoratif */}
      <div
        className="absolute -z-10 right-0 bottom-0 w-0 h-0 
                      border-t-[200px] border-t-transparent 
                      border-l-[400px] border-l-red-600"
      ></div>

      {/* Animation titre */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🧠 The Knapsack Problem
      </motion.h1>

      {/* Animation sous-texte */}
      <motion.p
        className="text-sm md:text-base max-w-2xl leading-relaxed text-gray-200 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The knapsack problem is a classic optimization challenge where you must
        choose the best combination of items to maximize value without exceeding
        weight limits. 💼⚖️
      </motion.p>

      {/* Bouton animé */}
      <motion.a
        href="#try-it"
        className="mt-4 inline-flex items-center gap-2 bg-white text-blue-950 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try Now
        <FaArrowRight className="w-5 h-5" />
      </motion.a>
    </header>
  );
};

export default Header;
