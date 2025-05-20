import React from "react";
import { Link, useLoaderData } from "react-router";

const TipDetailsPage = () => {
  const Details = useLoaderData();
  console.log(Details);
  return (
    <div className="max-w-6xl mx-auto py-8 min-h-[calc(100vh-117px)]">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={Details.Images}
            alt="Rose"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              {Details.plantType}
            </h1>
            <p className="text-sm bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full mb-4">
              {Details.category}
            </p>
            <p className="text-gray-700 mb-4">{Details.description}</p>

            <div className="mb-4">
              <ul className="list-disc list-inside text-gray-700 flex items-center gap-2">
                <li className="text-sm bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full mb-4">
                  Availability: {Details.availability}
                </li>
                <li className="text-sm bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full mb-4">
                  Level :{Details.level}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              🌼 View More Plants
            </button>
            <Link to="/" className="px-5 py-2 border border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition">
              🔙 Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetailsPage;
