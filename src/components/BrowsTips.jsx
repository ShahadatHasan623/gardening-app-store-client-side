import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowsTips = () => {
  const browseData = useLoaderData();

  return (
    <div className="overflow-x-auto min-h-[calc(100vh-117px)] py-12 max-w-6xl mx-auto px-4">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Browse Gardening Ideas
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Discover a variety of helpful gardening tips to make your green space
          thrive! Composting, plant care, and vertical gardening — expert advice
          for every gardener.
        </p>
      </div>

      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="min-w-[700px] w-full text-left text-sm text-gray-700">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Plant Type</th>
              <th className="py-3 px-4">Availability</th>
              <th className="py-3 px-4">Details</th>
            </tr>
          </thead>
          <tbody>
            {browseData
              .filter((brows) => brows.availability === "public")
              .map((brows, index) => (
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
                  <td className="py-3 px-4 capitalize">{brows.availability}</td>
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
      </div>
    </div>
  );
};

export default BrowsTips;
