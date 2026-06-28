import React from "react";
import GardenersCard from "./GardenersCard";
import { motion } from "framer-motion";

// Stagger Animation Variants for Grid Items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

const Gardeners = ({ gardener = [] }) => {
  return (
    <section className="relative w-full my-16 py-2 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent dark:via-zinc-950/30 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-400/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            🌿 Expert Creators
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-950 dark:text-gray-50">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Gardeners</span>
          </h1>
          
          <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full"></div>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto pt-2">
            Discover the expertise and passion of our Featured Gardeners, showcasing their unique styles, innovative techniques, and love for cultivating beautiful, thriving gardens.
          </p>
        </motion.div>

        {/* Grid Items with Smooth Scroll Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {gardener.map((singleGardener) => (
            <motion.div 
              key={singleGardener._id} 
              variants={itemVariants}
              className="h-full"
            >
              <GardenersCard gardeners={singleGardener} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Gardeners;