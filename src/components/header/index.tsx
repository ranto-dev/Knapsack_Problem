import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full bg-blue-700 text-white text-center py-20 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      <motion.h1
        className="xs:text-2xl sm:text-3xl md:text-2xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Knapsack Problem
      </motion.h1>
      <motion.p
        className="text-xs sm:text-sm max-w-2xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The knapsack problem is a classic optimization challenge where you must
        choose the best combination of items to maximize value without exceeding
        weight limits.
      </motion.p>

      <motion.a
        href="#try-it"
        className="mt-4 inline-flex items-center gap-2 bg-white text-sm text-blue-950 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors"
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
