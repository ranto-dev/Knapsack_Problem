import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa6";
const Example = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 p-10 container m-auto">
        <div className="w-full flex justify-center items-center">
            <img className="w-100" src="/example.png" alt="the best example image of knapsack problem" />
        </div>
      <motion.div
        className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaBookOpen className="text-indigo-600" /> Example 📊
        </h2>
        <p className="text-gray-700 mb-4">
          Let’s say your bag can carry <strong>5 kg</strong> and you have:
        </p>

        <table className="w-full text-left border-collapse border border-gray-200 mb-4">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border p-2">Item</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">🍎 Apple</td>
              <td className="border p-2">1 kg</td>
              <td className="border p-2">2</td>
            </tr>
            <tr>
              <td className="border p-2">🧀 Cheese</td>
              <td className="border p-2">3 kg</td>
              <td className="border p-2">4</td>
            </tr>
            <tr>
              <td className="border p-2">💎 Diamond</td>
              <td className="border p-2">4 kg</td>
              <td className="border p-2">10</td>
            </tr>
            <tr>
              <td className="border p-2">🪓 Axe</td>
              <td className="border p-2">2 kg</td>
              <td className="border p-2">6</td>
            </tr>
          </tbody>
        </table>

        <p className="text-gray-700">
          ✅ Best choice: <strong>Apple (1 kg)</strong> +{" "}
          <strong>Diamond (4 kg)</strong> → Total 5 kg, total value{" "}
          <strong>12</strong> 💰
        </p>
      </motion.div>
    </div>
  );
};

export default Example;
