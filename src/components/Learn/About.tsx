import { motion } from "framer-motion";
import { Brain, Target, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Brain className="text-blue-400" size={24} />,
      title: "Decision Making",
      desc: "It models real-world situations where resource allocation is limited.",
    },
    {
      icon: <Target className="text-indigo-400" size={24} />,
      title: "Optimization",
      desc: "Find the absolute best mathematical solution among millions of combos.",
    },
    {
      icon: <Zap className="text-purple-400" size={24} />,
      title: "Efficiency",
      desc: "Solvable via Dynamic Programming to turn complexity into speed.",
    },
  ];

  return (
    <section className="py-24 bg-[#050505] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Behind the <span className="text-blue-400">Algorithm</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 font-light">
              The Knapsack Problem is more than a puzzle; it's a cornerstone of
              computer science. Imagine a hiker who must choose which items to
              put in their backpack. Each item has a weight and a value. The
              goal? Maximize the total value without breaking the bag.
            </p>
            <div className="h-px w-20 bg-blue-500/50 mb-6" />
          </motion.div>

          <div className="grid gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="mt-1">{f.icon}</div>
                <div>
                  <h3 className="font-medium text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm font-light">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
