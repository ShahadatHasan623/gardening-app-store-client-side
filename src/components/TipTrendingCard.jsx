import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiHeart, FiTrendingUp } from "react-icons/fi";

// স্ট্যাগার অ্যানিমেশন ভেরিয়েন্টস (Staggered Entrance Effect)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const TipTrendingCard = () => {
  const [trending, setGardens] = useState([]);

  useEffect(() => {
    axios
      .get("https://gardening-store-server.vercel.app/garden")
      .then((res) => {
        setGardens(res.data.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="my-16 py-4 relative overflow-hidden">
      {/* Ambient Gradient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/20 uppercase tracking-widest">
            <FiTrendingUp className="w-3.5 h-3.5" /> What's Hot
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-gray-50">
            Top Trending Gardening <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Tips</span>
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Explore the most loved insights and proven techniques shared by our master gardeners this week.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {trending.map((tip, index) => (
            <motion.div
              key={tip._id || index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-6 md:p-7 shadow-md hover:shadow-2xl dark:shadow-emerald-950/10 border border-gray-100 dark:border-zinc-800/80 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              {/* Highlight Bar Top Left Effect */}
              <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-3">
                {/* Micro Category Badge (Dynamic or fallback) */}
                <span className="inline-block text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
                  {tip.plantType || "Expert Tip"}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-950 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 line-clamp-1">
                  {tip.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {tip.description}
                </p>
              </div>

              {/* Card Footer Action Row */}
              <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-50 dark:border-zinc-800/60">
                {/* Like Stats */}
                <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-200 group/like">
                  <FiHeart className="w-4 h-4 text-gray-400 dark:text-zinc-500 group-hover/like:text-rose-500 dark:group-hover/like:text-rose-400 transition-colors duration-200 fill-transparent group-hover/like:fill-rose-500/20" />
                  <span>{tip.totalLike || 0} Likes</span>
                </button>

                {/* Micro Action Indicator */}
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-0.5">
                  Read More &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {trending.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base font-medium text-gray-400 dark:text-zinc-500">
              No tips available right now.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TipTrendingCard;