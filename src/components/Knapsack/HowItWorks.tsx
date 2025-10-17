import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FaRocket className="text-indigo-600" /> How Does It Work? ⚙️
      </h2>
      <p className="text-gray-700 mb-4">
        The problem is solved using <strong>Dynamic Programming</strong> 🧮. We
        build a table that stores the best value we can achieve for every weight
        limit and number of items.
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800">
        {`if (weight[i-1] <= w)
  dp[i][w] = max(
    dp[i-1][w],
    dp[i-1][w - weight[i-1]] + value[i-1]
  );
else
  dp[i][w] = dp[i-1][w];`}
      </pre>
    </motion.div>
  );
};

export default HowItWorks;
