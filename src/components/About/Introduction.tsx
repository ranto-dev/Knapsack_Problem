import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa6";

const Introduction = () => {
  return (
    <div>
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎒 The Knapsack Problem Explained
      </motion.h1>

      <motion.p
        className="text-center text-lg md:text-xl text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        A friendly guide for beginners who want to understand one of the most
        famous optimization problems in computer science 💡
      </motion.p>

      {/* INTRO SECTION */}
      <motion.div
        className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaBrain className="text-indigo-600" /> What’s the Knapsack Problem?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Imagine you're packing a backpack for an adventure 🏕️. Your bag can
          only hold a limited weight ⚖️. You have several items — each with a
          <strong> weight </strong> and a <strong> value</strong>. Your goal is
          simple:
          <span className="font-semibold text-indigo-600">
            {" "}
            pick the items that give you the highest total value without
            exceeding your bag’s limit!
          </span>{" "}
          🎯
        </p>
      </motion.div>
    </div>
  );
};

export default Introduction;
