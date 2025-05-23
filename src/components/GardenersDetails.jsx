import React from "react";
import { Link, useLoaderData } from "react-router";

const GardenersDetails = () => {
  const details = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto py-12 min-h-[calc(100vh-117px)] lg:px-0 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={details.image}
            alt="Rose"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              {details.name}
            </h1>
            <p className="text-sm bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full mb-4">
              {details.status}
            </p>
            <p className="text-gray-700 mb-4">{details.otherInfo}</p>
            <p className="text-gray-700 mb-4">Experience : {details.experience}</p>

            <div className="mb-4">
              <ul className="list-disc list-inside text-gray-700 flex items-center gap-2">
                <li className="text-sm bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full mb-4">
                  Gender: {details.gender} 
                </li>
                <li className="text-sm bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full mb-4">
                  Age: {details.age} 
                </li>
                <li className="text-sm bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full mb-4">
                  totalSheare :{details.total}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to="/"
              className="px-5 py-2 border border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition"
            >
              🔙 Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenersDetails;
