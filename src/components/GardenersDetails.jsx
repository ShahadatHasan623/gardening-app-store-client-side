import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

import { FaUser, FaCalendarAlt, FaChartPie, FaBriefcase, FaArrowLeft } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const GardenersDetails = () => {
  const details = useLoaderData() || {};
  const { image, name, status, otherInfo, experience, gender, age, total } = details;

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
        
        {/* Left Side: Image Section with Overlay */}
        <div className="md:w-1/2 relative min-h-[350px] md:min-h-[500px]">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent md:from-black/30" />
        </div>

        {/* Right Side: Content Details Section */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Status & Name */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30">
                <HiSparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {status || "Active"}
              </span>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950 dark:text-gray-50">
                {name}
              </h1>
            </div>

            {/* Experience Card */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 text-sm md:text-base text-gray-700 dark:text-zinc-300 font-medium">
              <FaBriefcase className="text-emerald-600 dark:text-emerald-400 text-lg flex-shrink-0" />
              <div>
                Experience: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{experience || "N/A"}</span>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500">Biography</h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                {otherInfo}
              </p>
            </div>

            {/* Meta Tags / Badges */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-3">Professional Info</h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 text-xs md:text-sm bg-gray-100/80 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 px-4 py-2 rounded-xl font-medium border border-gray-200/50 dark:border-zinc-700/50">
                  <FaUser className="text-gray-500 dark:text-zinc-400" />
                  Gender: {gender}
                </span>
                <span className="inline-flex items-center gap-2 text-xs md:text-sm bg-gray-100/80 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 px-4 py-2 rounded-xl font-medium border border-gray-200/50 dark:border-zinc-700/50">
                  <FaCalendarAlt className="text-gray-500 dark:text-zinc-400" />
                  Age: {age}
                </span>
                <span className="inline-flex items-center gap-2 text-xs md:text-sm bg-gray-100/80 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 px-4 py-2 rounded-xl font-medium border border-gray-200/50 dark:border-zinc-700/50">
                  <FaChartPie className="text-gray-500 dark:text-zinc-400" />
                  Shares: {total || 0}
                </span>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium rounded-xl transition-all duration-300 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/10"
            >
              <FaArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default GardenersDetails;