import React from "react";
import logoImg from "../assets/igarden-1.png";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle, FiAward, FiSmile } from "react-icons/fi";

const LandscapingCard = () => {
  return (
    <div className="flex max-w-7xl mx-auto flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mt-24 lg:px-0 px-4 relative">
      
      {/* Background Ambient Element */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* LEFT SIDE: PREMIUM INTERACTIVE GRAPHIC CARD */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white rounded-3xl pt-24 pb-10 px-6 w-full lg:w-1/2 text-center shadow-xl dark:shadow-emerald-950/20 flex flex-col items-center group"
      >
        {/* Floating Mini Badge Card */}
        <div className="absolute -top-12 w-64 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-950 z-20 transition-transform duration-500 group-hover:-translate-y-2">
          <img
            src="https://i.ibb.co/v6StgZVc/pexels-van-qui-nguy-n-2148727453-30606642.jpg"
            alt="Lawn Care"
            className="w-full h-full object-cover"
          />
          {/* Experience Counter Tag */}
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center backdrop-blur-[1px]">
            <span className="text-3xl font-black text-white drop-shadow-md">15+</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">Years Experience</span>
          </div>
        </div>

        {/* Brand Identity / Logo Frame */}
        <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl mb-5 mt-6 border border-white/10 shadow-inner">
          <img src={logoImg} alt="Logo" className="w-24 object-contain brightness-0 invert" />
        </div>

        {/* Card Typography */}
        <div className="space-y-2 max-w-sm">
          <h3 className="text-xl font-bold tracking-tight">
            Premium Services & Maintenance
          </h3>
          <p className="text-zinc-100/80 text-xs md:text-sm leading-relaxed px-4">
            Our expert architects and gardeners provide end-to-end bespoke solutions to shape your dream landscape.
          </p>
        </div>
      </motion.div>


      {/* RIGHT SIDE: RICH TEXT CONTENT & STATS */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="w-full lg:w-1/2 space-y-6 relative z-10"
      >
        {/* Section Tag */}
        <span className="inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-md uppercase tracking-wider">
          Who We Are
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-gray-950 dark:text-gray-50 tracking-tight">
          Landscaping & Lawn Care Services for Commercial & Residential Properties
        </h2>

        {/* Sub Description */}
        <p className="text-sm md:text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
          We bring nature closer to your living spaces with meticulous planning, modern technology, and sustainable maintenance routines tailored for your comfort.
        </p>

        {/* Bullet Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-semibold text-gray-800 dark:text-zinc-200">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-emerald-500 w-4 h-4 flex-shrink-0" /> Bespoke Garden Architecture
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-emerald-500 w-4 h-4 flex-shrink-0" /> Sustainable Eco-Maintenance
          </div>
        </div>

        {/* Stats Section with Divider */}
        <div className="flex gap-10 pt-4 border-t border-gray-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 dark:bg-zinc-800/50 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <FiAward className="w-5 h-5" />
            </div>
            <div>
              <p className="text-gray-950 dark:text-gray-50 text-2xl font-black tracking-tight">4,000+</p>
              <p className="text-xs font-medium text-gray-500 dark:text-zinc-400">Projects Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 dark:bg-zinc-800/50 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <FiSmile className="w-5 h-5" />
            </div>
            <div>
              <p className="text-gray-950 dark:text-gray-50 text-2xl font-black tracking-tight">3,375+</p>
              <p className="text-xs font-medium text-gray-500 dark:text-zinc-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Premium Call to Action Button */}
        <div className="pt-2">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-500/20 transition-all duration-300 group">
            Discover More
            <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default LandscapingCard;