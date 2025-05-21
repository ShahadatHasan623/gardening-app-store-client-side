import React from "react";
import GardenersCard from "./GardenersCard";

const Gardeners = ({ gardener }) => {
  return (
    <div className=" py-12 max-w-6xl mx-auto">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-4xl font-bold text-green-700">Featured Gardeners</h1>
        <p className="text-gray-600">
          Discover the expertise and passion of our Featured Gardeners, 
          showcasing their unique styles, <br /> innovative techniques,  and love for
          cultivating beautiful, thriving gardens.  Get inspired by their tips <br />
          and stories to create your own green paradise.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {gardener.map((gardeners) => (
          <GardenersCard
            key={gardeners._id}
            gardeners={gardeners}
          ></GardenersCard>
        ))}
      </div>
    </div>
  );
};

export default Gardeners;
