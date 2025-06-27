import React, { use } from "react";
import ExploreAllGarde from "../components/ExploreAllGarde";

const exploreAll = fetch(
  "https://gardening-store-server.vercel.app/gardeners/all"
).then((res) => res.json());

const ExploreGarden = () => {
  const exploreAllGard = use(exploreAll);
  return (
    <div className="max-w-7xl mx-auto pt-17 pb-17 min-h-[calc(100vh-117px)] lg:px-0 px-4">
      <div className="text-center pt-12 pb-12">
        <h1 className="text-primary text-4xl font-bold">Explore All Gardeners</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
        {exploreAllGard.map((explore) => (
          <ExploreAllGarde
            key={explore._id}
            explore={explore}
          ></ExploreAllGarde>
        ))}
      </div>
    </div>
  );
};

export default ExploreGarden;
