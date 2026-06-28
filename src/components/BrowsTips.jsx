import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaEye, FaFilter } from "react-icons/fa";

const BrowsTips = () => {
  const browseData = useLoaderData() || [];
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredData = browseData.filter((brows) => {
    return (
      brows.availability === "public" &&
      (selectedLevel === "all" || brows.level === selectedLevel)
    );
  });

  // লেভেল অনুযায়ী ডাইনামিক ব্যাজ কালার নির্ধারণের ফাংশন
  const getLevelBadge = (level) => {
    switch (level?.toLowerCase()) {
      case "easy":
        return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30";
      case "medium":
        return "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-100 dark:border-amber-900/30";
      case "hard":
        return "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-100 dark:border-rose-900/30";
      default:
        return "bg-gray-50 text-gray-700 dark:bg-zinc-800 dark:text-zinc-300 border-gray-200 dark:border-zinc-700";
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-12 max-w-7xl pt-28 min-h-[calc(100vh-117px)]">
      
      {/* Header Section */}
      <div className="text-center mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 uppercase tracking-wider">
          🌿 Discovery
        </span>
        <h1 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-gray-50">
          Browse Gardening <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Ideas</span>
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Discover a variety of helpful gardening tips to make your green space thrive! Composting, plant care, and vertical gardening — expert advice for every gardener.
        </p>
      </div>

      {/* Filter Controller Layout */}
      <div className="mb-6 flex items-center justify-end gap-2">
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-3 py-2 shadow-sm">
          <FaFilter className="text-gray-400 dark:text-zinc-500 text-xs md:text-sm" />
          <label className="text-xs md:text-sm font-semibold text-gray-500 dark:text-zinc-400">
            Level:
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-transparent text-xs md:text-sm font-medium text-gray-800 dark:text-zinc-200 focus:outline-none cursor-pointer pr-2"
          >
            <option className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100" value="all">All Levels</option>
            <option className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100" value="easy">Easy</option>
            <option className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100" value="medium">Medium</option>
            <option className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100" value="hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Modern Table Container */}
      <div className="w-full overflow-hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-emerald-950/10 border border-gray-100 dark:border-zinc-800">
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm text-left border-collapse">
            
            {/* Table Head */}
            <thead className="bg-gray-50/70 dark:bg-zinc-800/50 border-b border-gray-100 dark:border-zinc-800 text-xs uppercase tracking-wider text-gray-500 dark:text-zinc-400 font-semibold">
              <tr>
                <th className="py-4 px-6 text-center w-16">No</th>
                <th className="py-4 px-6">Image</th>
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Plant Type</th>
                <th className="py-4 px-6">Level</th>
                <th className="py-4 px-6 text-center w-24">Details</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800 text-gray-700 dark:text-zinc-300">
              {filteredData.map((brows, index) => (
                <tr
                  key={brows._id}
                  className="hover:bg-emerald-50/30 dark:hover:bg-zinc-800/40 transition-colors duration-200"
                >
                  <td className="py-4 px-6 text-center font-medium text-gray-400 dark:text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="py-4 px-6">
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shadow-sm">
                      <img
                        src={brows.Images || "https://via.placeholder.com/100"}
                        alt={brows.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-950 dark:text-gray-100">
                    {brows.title}
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 text-xs font-medium border border-gray-200/40 dark:border-zinc-700/40">
                      {brows.plantType}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border capitalize ${getLevelBadge(brows.level)}`}>
                      {brows.level}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link
                      to={`/tipDetails/${brows._id}`}
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-200 shadow-sm"
                      title="View Details"
                    >
                      <FaEye className="text-base" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State / Not Found */}
        {filteredData.length === 0 && (
          <div className="text-center py-16 space-y-2">
            <p className="text-base font-medium text-gray-500 dark:text-zinc-400">
              No tips found for this level.
            </p>
            <p className="text-xs text-gray-400 dark:text-zinc-500">
              Try changing the filter option to discover more ideas!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsTips;