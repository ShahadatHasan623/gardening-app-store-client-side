import React from "react";
import { Link } from "react-router";

const GardenersCard = ({ gardeners }) => {
  const { image, name, otherInfo, _id } = gardeners;

  return (
    <div className="group relative w-full max-w-sm h-[420px] mx-auto bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl dark:shadow-emerald-950/20 transition-all duration-300 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 flex flex-col justify-between">
      
      {/* Image Section */}
      <div className="relative overflow-hidden h-60 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-1">
            {name}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-2 leading-relaxed">
            {otherInfo}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-4">
          <Link
            to={`/gardenersDetails/${_id}`}
            className="w-full text-center inline-flex items-center justify-center font-medium tracking-wide text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-2xl py-3 px-6 shadow-md hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GardenersCard;