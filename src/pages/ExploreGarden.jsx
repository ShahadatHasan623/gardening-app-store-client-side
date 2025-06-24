import React, { use } from "react";
import ExploreAllGarde from "../components/ExploreAllGarde";

const exploreAll = fetch(
  "https://gardening-store-server.vercel.app/gardeners/all"
).then((res) => res.json());

const ExploreGarden = () => {
  const exploreAllGard = use(exploreAll);
  return (
    <div>
      <div className="text-center pt-12">
        <h1 className="text-green-700 text-4xl font-bold">Explore All Gardeners</h1>
      </div>
      <div className="max-w-6xl mx-auto py-12 min-h-[calc(100vh-117px)] lg:px-0 px-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
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
