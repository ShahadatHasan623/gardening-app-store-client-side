import React from "react";

const GardenersCard = ({ gardeners }) => {
  const { image, name, otherInfo, experience } = gardeners;
  return (
    <div className="card w-full max-w-sm h-full mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-100">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body px-6 py-4">
        <h2 className="card-title text-lg md:text-xl font-semibold text-gray-800">
          {name}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">{otherInfo}</p>
        <p>experience :  {experience}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary rounded-full px-6 hover:scale-105 transition-transform duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GardenersCard;
