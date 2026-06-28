import React from "react";
import { FaBriefcase } from "react-icons/fa";

const ExploreAllGarde = ({ explore }) => {
  const { image, name, otherInfo, experience } = explore || {};

  return (
    <div className="group relative w-full max-w-sm h-[430px] mx-auto bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl dark:shadow-emerald-950/20 transition-all duration-300 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 flex flex-col justify-between">
      
      {/* Top Section: Image Area */}
      <div className="relative overflow-hidden h-56 w-full bg-zinc-100 dark:bg-zinc-800">
        <img
          src={image || "https://via.placeholder.com/400x300"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Modern Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Bottom Section: Content Area */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
        
        {/* Text Details */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-1">
            {name}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-sm md:text-base line-clamp-3 leading-relaxed">
            {otherInfo}
          </p>
        </div>

        {/* Experience Footer Info */}
        <div className="pt-3 border-t border-gray-50 dark:border-zinc-800/60 flex items-center gap-2 text-xs md:text-sm font-medium text-gray-500 dark:text-zinc-400">
          <FaBriefcase className="text-emerald-600 dark:text-emerald-400 text-base flex-shrink-0" />
          <span>
            Experience: <span className="text-gray-800 dark:text-zinc-200 font-semibold">{experience || "N/A"}</span>
          </span>
        </div>

      </div>
    </div>
  );
};

export default ExploreAllGarde;