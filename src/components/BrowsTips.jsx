import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowsTips = () => {
  const browseData = useLoaderData();

  return (
    <div className="overflow-x-auto min-h-[calc(100vh-117px)] py-8 max-w-6xl mx-auto">
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
          {browseData.map((brows, index) => (
            <tr key={brows._id} className="hover:bg-green-50">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">
                <img className="h-20 w-20" src={brows.Images} alt="" />
              </td>
              <td className="py-3 px-4">{brows.title}</td>
              <td className="py-3 px-4">
                <Link className="btn bg-green-500 text-white"><FaEye /></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowsTips;
