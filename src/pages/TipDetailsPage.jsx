import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

import { HiOutlineSparkles, HiOutlineTag } from "react-icons/hi2";
import { FiArrowLeft, FiLayers, FiEye, FiCheckCircle } from "react-icons/fi";

const TipDetailsPage = () => {
  const Details = useLoaderData() || {};
  const { Images, plantType, category, description, availability, level } = Details;

  const getLevelBadgeColor = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case "easy":
        return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30";
      case "medium":
        return "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-100 dark:border-amber-900/30";
      case "hard":
        return "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-100 dark:border-rose-900/30";
      default:
        return "bg-zinc-50 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700";
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-117px)] pt-24 pb-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-transparent via-emerald-50/10 to-transparent dark:via-zinc-950/20 flex items-center justify-center overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-3xl shadow-2xl dark:shadow-emerald-950/20 overflow-hidden border border-gray-100 dark:border-zinc-800/80 flex flex-col md:flex-row"
      >
        
        {/* Left Side: Image Section with Soft Gradient Overlay */}
        <div className="md:w-1/2 relative min-h-[350px] md:min-h-[500px] overflow-hidden group">
          <img
            src={Images}
            alt={plantType || "Plant"}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent md:from-black/30" />
        </div>

        {/* Right Side: Content Details Section */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            
            {/* Category & Title */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 uppercase tracking-wider">
                <HiOutlineTag className="w-3.5 h-3.5" />
                {category || "Gardening"}
              </span>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950 dark:text-gray-50 capitalize">
                {plantType}
              </h1>
            </div>

            {/* Description / Content */}
            <div className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500">Care & Instructions</h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>

            {/* Unique Professional Badges Row */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500">Specifications</h3>
              <div className="flex flex-wrap gap-3">
                {/* Availability Badge */}
                <span className="inline-flex items-center gap-2 text-xs md:text-sm bg-zinc-50 dark:bg-zinc-800/60 text-gray-700 dark:text-zinc-300 px-4 py-2 rounded-xl font-medium border border-gray-100 dark:border-zinc-800">
                  <FiCheckCircle className="text-emerald-500 dark:text-emerald-400" />
                  Availability: <span className="font-bold capitalize ml-0.5">{availability}</span>
                </span>
                
                {/* Dynamic Level Badge */}
                <span className={`inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-xl font-bold border capitalize ${getLevelBadgeColor(level)}`}>
                  <FiLayers />
                  Difficulty: {level || "General"}
                </span>
              </div>
            </div>

          </div>

          {/* Action Footer Button Group */}
          <div className="pt-5 border-t border-gray-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Back Button */}
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium rounded-xl transition-all duration-300 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/10"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default TipDetailsPage;