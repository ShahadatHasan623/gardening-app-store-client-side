import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowsTips = () => {
  const browseData = useLoaderData();

  return (
    <div>
      <div className="overflow-x-auto min-h-[calc(100vh-117px)] py-12 max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-bold">Browse Gardening Ideas</h1>
          <p>Discover a variety of helpful gardening tips to make your green space thrive!  From composting <br /> v techniques to plant care and ertical gardening — browse expert advice tailored for every gardener, <br /> beginner to pro.</p>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-green-600 text-white text-left">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">image</th>
              <th className="py-3 px-4">title</th>
              <th className="py-3 px-4">Details</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {browseData
              .filter((brows) => brows.availability === "public")
              .map((brows, index) => (
                <tr key={brows._id} className="hover:bg-green-50">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">
                    <img className="h-20 w-20" src={brows.Images} alt="" />
                  </td>
                  <td className="py-3 px-4">{brows.title}</td>
                  <td className="py-3 px-4">
                    <Link
                      to={`/tipDetails/${brows._id}`}
                      className="btn bg-green-500 text-white"
                    >
                      <FaEye />
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
