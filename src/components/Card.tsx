import { motion } from "framer-motion";

const Card = ({ title, children }) => {
  return (
    <motion.div
      className="p-6 rounded-2xl shadow-lg mb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl mb-4 flex items-center gap-2">{title}</h2>
      <p className="text-gray-700 text-sm leading-relaxed">{children}</p>
    </motion.div>
  );
};

export default Card;
