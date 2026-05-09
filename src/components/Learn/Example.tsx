import { motion } from "framer-motion";
import { ShoppingBag, Weight, DollarSign } from "lucide-react";

const Example = () => {
  const items = [
    { name: "Laptop", value: 2000, weight: 3, color: "from-blue-500/20" },
    { name: "Camera", value: 1200, weight: 1, color: "from-indigo-500/20" },
    { name: "Watch", value: 500, weight: 0.5, color: "from-purple-500/20" },
  ];

  return (
    <section className="py-24 bg-[#050505] text-white px-6 relative overflow-hidden">
      {/* Effet visuel de fond */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-blue-400 text-xs tracking-widest uppercase mb-4"
          >
            <ShoppingBag size={14} />
            <span>Practical Scenario</span>
          </motion.div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Concrete Example
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${item.color} to-transparent backdrop-blur-sm group`}
            >
              <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-300">
                  {i === 0 ? (
                    <ShoppingBag size={20} />
                  ) : i === 1 ? (
                    <Weight size={20} />
                  ) : (
                    <DollarSign size={20} />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-medium mb-4">{item.name}</h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Value</span>
                  <span className="text-blue-400 font-mono">${item.value}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Weight</span>
                  <span className="text-gray-300 font-mono">
                    {item.weight} kg
                  </span>
                </div>
              </div>

              <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-blue-500/40"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-6 rounded-2xl border border-dashed border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm italic">
            "Capacity Limit: 4kg — Which items would you pick to get the max
            value?"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Example;
