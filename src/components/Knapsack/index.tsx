import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Zap,
  Weight,
  DollarSign,
  Calculator,
  RefreshCw,
  PackageCheck,
  Settings2,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

interface Item {
  weight: number;
  value: number;
}

const Knapsack: React.FC = () => {
  const [itemCount, setItemCount] = useState<number>(4);
  const [capacity, setCapacity] = useState<number>(15);
  const [items, setItems] = useState<Item[]>([]);
  const [result, setResult] = useState<{
    maxValue: number;
    selected: number[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    generateItems(itemCount);
  }, []);

  const generateItems = (count: number) => {
    const newItems = Array.from({ length: count }, () => ({
      weight: Math.floor(Math.random() * 8) + 1,
      value: Math.floor(Math.random() * 80) + 20,
    }));
    setItems(newItems);
    setResult(null);
  };

  const handleItemChange = (
    index: number,
    field: keyof Item,
    value: number,
  ) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const solveKnapsack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    // Simulation de calcul pour l'effet visuel
    setTimeout(() => {
      const n = items.length;
      const dp = Array.from({ length: n + 1 }, () =>
        Array(capacity + 1).fill(0),
      );

      for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
          if (items[i - 1].weight <= w) {
            dp[i][w] = Math.max(
              dp[i - 1][w],
              dp[i - 1][w - items[i - 1].weight] + items[i - 1].value,
            );
          } else {
            dp[i][w] = dp[i - 1][w];
          }
        }
      }

      let w = capacity;
      const selected: number[] = [];
      for (let i = n; i > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
          selected.push(i - 1);
          w -= items[i - 1].weight;
        }
      }
      setResult({ maxValue: dp[n][capacity], selected: selected.reverse() });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 bg-[#050505] min-h-screen text-white px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-bold">
              <Settings2 size={12} /> Optimization Engine
            </div>
            <h2 className="text-4xl font-semibold tracking-tight">
              Knapsack <span className="text-gray-500 font-light">Solver</span>
            </h2>
            <p className="text-gray-400 max-w-md font-light leading-relaxed">
              Configure your environment variables and let the algorithm
              determine the most efficient item combination.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => generateItems(itemCount)}
            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
          >
            <RefreshCw
              size={14}
              className="group-hover:rotate-180 transition-transform duration-500"
            />
            Reset Parameters
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* CONTROLS PANEL (LEFT) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl"
            >
              <div className="space-y-8">
                {/* Capacity Slider */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Zap size={14} className="text-blue-400" /> Max Capacity
                    </label>
                    <span className="text-2xl font-mono text-blue-400 font-bold">
                      {capacity}
                      <span className="text-xs ml-1 text-gray-600">KG</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={capacity}
                    onChange={(e) => setCapacity(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* Item Counter */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
                    Objects Count
                  </label>
                  <div className="flex items-center justify-between bg-black/40 p-2 rounded-2xl border border-white/5">
                    <button
                      onClick={() => {
                        if (itemCount > 1) {
                          setItemCount(itemCount - 1);
                          generateItems(itemCount - 1);
                        }
                      }}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-xl transition-colors text-gray-400 hover:text-white"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="text-xl font-mono font-bold">
                      {itemCount}
                    </span>
                    <button
                      onClick={() => {
                        if (itemCount < 8) {
                          setItemCount(itemCount + 1);
                          generateItems(itemCount + 1);
                        }
                      }}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-xl transition-colors text-gray-400 hover:text-white"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Main Action */}
                <button
                  onClick={solveKnapsack}
                  disabled={isLoading}
                  className="group w-full py-5 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-blue-400 active:scale-[0.98] shadow-xl shadow-white/5"
                >
                  {isLoading ? (
                    <RefreshCw className="animate-spin" />
                  ) : (
                    <Calculator size={20} />
                  )}
                  <span className="uppercase tracking-widest text-xs">
                    {isLoading ? "Processing..." : "Run Analysis"}
                  </span>
                </button>
              </div>
            </motion.div>

            {/* RESULT CARD */}
            <AnimatePresence>
              {result && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-500/20 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                        <PackageCheck size={20} className="text-white" />
                      </div>
                      <h3 className="font-bold text-sm uppercase tracking-widest">
                        Optimized Value
                      </h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black italic tracking-tighter">
                        ${result.maxValue}
                      </span>
                      <span className="text-blue-200 text-xs font-medium uppercase tracking-tighter">
                        Total Net
                      </span>
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                    <Zap size={120} strokeWidth={3} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ITEMS GRID (RIGHT) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-8 text-gray-500">
              <LayoutGrid size={16} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                Registry of Objects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {items.map((item, i) => {
                  const isSelected = result?.selected.includes(i);
                  return (
                    <motion.div
                      key={i}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className={`group p-6 rounded-[2rem] border transition-all duration-500 relative ${
                        isSelected
                          ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                          : "bg-white/[0.02] border-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-8">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black font-mono border ${isSelected ? "bg-blue-500 border-transparent" : "border-white/10 text-gray-500"}`}
                        >
                          {i + 1}
                        </div>
                        {isSelected && (
                          <motion.span
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="text-[10px] text-blue-400 font-bold uppercase tracking-widest flex items-center gap-1"
                          >
                            Selected <ArrowRight size={10} />
                          </motion.span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-bold tracking-widest group-focus-within:text-blue-400 transition-colors">
                            <Weight size={12} /> Mass
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              value={item.weight}
                              onChange={(e) =>
                                handleItemChange(
                                  i,
                                  "weight",
                                  parseInt(e.target.value) || 0,
                                )
                              }
                              className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm font-mono outline-none focus:border-blue-500/50 transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-600 font-bold">
                              KG
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-bold tracking-widest group-focus-within:text-blue-400 transition-colors">
                            <DollarSign size={12} /> Profit
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              value={item.value}
                              onChange={(e) =>
                                handleItemChange(
                                  i,
                                  "value",
                                  parseInt(e.target.value) || 0,
                                )
                              }
                              className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm font-mono outline-none focus:border-blue-500/50 transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-600 font-bold">
                              USD
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knapsack;
