import React from "react";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import awardImg from "../assets/garden-gloves.png";
import awardImg2 from "../assets/lawn-mowing.png";
import awardImg3 from "../assets/winners-medal.png";
import awardImg4 from "../assets/garden.png";

// স্ট্যাগার অ্যানিমেশন ভেরিয়েন্টস
const gridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const awards = [
  { img: awardImg, title: "Garden Gloves Award", year: "Winner 2024" },
  { img: awardImg2, title: "Lawn Mowing Elite", year: "Winner 2025" },
  { img: awardImg3, title: "Winners Gold Medal", year: "Champion 2025" },
  { img: awardImg4, title: "Master Gardener Title", year: "Grand Prize 2026" },
];

const Landscaping = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4 lg:px-0 relative">
      
      {/* Background Ambient Blur Ring */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/20 uppercase tracking-widest">
          <FiAward className="w-3.5 h-3.5" /> Excellence Recognized
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950 dark:text-gray-50">
          Our Landscaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Awards</span>
        </h2>
        <p className="text-gray-500 dark:text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          With years of dedicated craftsmanship, our company stands as your premier source for industry-leading quality and sustainable landscaping services.
        </p>
      </div>

      {/* Grid Canvas */}
      <motion.div 
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            className="group relative bg-white dark:bg-zinc-900/60 backdrop-blur-md flex flex-col items-center justify-center p-8 rounded-3xl shadow-sm hover:shadow-xl dark:shadow-emerald-950/5 border border-gray-100 dark:border-zinc-800/80 transition-all duration-300 overflow-hidden"
          >
            {/* Soft Ambient Inner Light Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Top Border Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image Wrapper Frame */}
            <div className="relative p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/40 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/20 transition-colors duration-300 mb-5">
              <img 
                className="h-16 w-16 object-contain transform group-hover:scale-110 transition-transform duration-300" 
                src={award.img} 
                alt={award.title} 
              />
            </div>

            {/* Content Meta */}
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                {award.year}
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-zinc-100 pt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                {award.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Landscaping;