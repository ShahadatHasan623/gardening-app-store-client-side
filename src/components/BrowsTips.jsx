import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowsTips = () => {
  const browseData = useLoaderData();
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredData = browseData.filter((brows) => {
    return (
      brows.availability === "public" &&
      (selectedLevel === "all" || brows.level === selectedLevel)
    );
  });

  return (
    <div className="overflow-x-auto pt-28 min-h-[calc(100vh-117px)] max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Browse Gardening Ideas
        </h1>
        <p className="drak:text-white text-gray-600 dark:text-white text-sm md:text-base leading-relaxed">
          Discover a variety of helpful gardening tips to make your green space
          thrive!  Composting, <br /> plant care,  and vertical gardening — expert advice
          for every gardener.
        </p>
      </div>

      <div className="mb-6 text-right">
        <label className="mr-2 font-medium text-gray-500">
          Filter by Level:
        </label>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option className="text-black" value="all">All</option>
          <option className="text-black" value="easy">Easy</option>
          <option className="text-black" value="medium">Medium</option>
          <option className="text-black" value="hard">Hard</option>
        </select>
      </div>

      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="min-w-[700px] w-full text-left text-sm text-gray-700">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Plant Type</th>
              <th className="py-3 px-4">Level</th>
              <th className="py-3 px-4">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((brows, index) => (
              <tr
                key={brows._id}
                className="border-t border-gray-200 hover:bg-green-50 transition"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={brows.Images}
                    alt={brows.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{brows.title}</td>
                <td className="py-3 px-4">{brows.plantType}</td>
                <td className="py-3 px-4 capitalize">{brows.level}</td>
                <td className="py-3 px-4">
                  <Link
                    to={`/tipDetails/${brows._id}`}
                    className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded hover:bg-green-600"
                  >
                    <FaEye /> <span className="hidden sm:inline">View</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <p className="text-center py-4 text-gray-500">
            No tips found for this level.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowsTips;
