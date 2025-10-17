import { FaLink } from "react-icons/fa6";
import { motion } from "framer-motion";

const SomeLinks = () => {
  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FaLink className="text-indigo-600" /> Official Resources 🔗
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-blue-700">
        <li>
          <a
            href="https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GeeksforGeeks – 0/1 Knapsack Problem
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Knapsack_problem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Wikipedia – Knapsack Problem
          </a>
        </li>
        <li>
          <a
            href="https://www.khanacademy.org/computing/computer-science/algorithms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Khan Academy – Algorithms Intro
          </a>
        </li>
        <li>
          <a
            href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MIT OpenCourseWare – Introduction to Algorithms
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SomeLinks;
