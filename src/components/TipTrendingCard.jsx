import React, { useEffect, useState } from "react";
import axios from "axios";

const TipTrendingCard = () => {
  const [trending, setGardens] = useState([]);

  useEffect(() => {
    axios.get("https://gardening-store-server.vercel.app/garden")
      .then(res => {
        setGardens(res.data.slice(0, 6)); 
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="py-12 px-4 bg-green-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          🌿 Top Trending Gardening Tips
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((tip, index) => (
            <div
              key={tip._id || index} // ✅ key add করলাম
              className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {tip.description}
              </p>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm text-gray-700">🌱 Happy Gardening!</span>
              </div>
            </div>
          ))}
        </div>

        {trending.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No tips available right now.</p>
        )}
      </div>
    </section>
  );
};

export default TipTrendingCard;
