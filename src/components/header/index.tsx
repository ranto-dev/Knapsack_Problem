import { motion } from "framer-motion";
import { ArrowRight, Package, Scale, Zap } from "lucide-react";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <header className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#050505] text-white">
      {/* Background Decor - Plus subtil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,#1e3a8a30_0%,transparent_50%)] pointer-events-none" />

      <div className="absolute inset-0 z-0 opacity-[0.05] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid-dots"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>

      {/* Floating Icons - Taille réduite et plus discrets */}
      <motion.div
        className="absolute top-[15%] left-[15%] text-blue-400/10 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Package size={32} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[15%] text-indigo-400/10 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Scale size={36} strokeWidth={1.5} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl flex flex-col items-center"
      >
        {/* Badge - Plus fin */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-blue-300/80 text-[10px] font-medium uppercase tracking-[0.2em] mb-8"
        >
          <Zap size={12} />
          <span>Optimization Theory</span>
        </motion.div>

        {/* Title - Taille réduite pour plus de chic (4xl à 6xl max) */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
        >
          The <span className="text-blue-400 font-semibold">Knapsack</span>{" "}
          Problem
        </motion.h1>

        {/* Description - Taille de lecture standard et aérée */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light tracking-wide"
        >
          Explore the balance between value and weight. A visual journey into
          one of the most influential algorithms in computer science.
        </motion.p>

        {/* Action Button - Plus compact et minimaliste */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="#try-it"
            className="group relative flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-lg font-medium text-sm transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Simulator</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      />
    </header>
  );
};

export default Header;
