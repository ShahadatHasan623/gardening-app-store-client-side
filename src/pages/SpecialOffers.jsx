import React from "react";
import { FaSeedling, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Spring Garden Care",
    desc: "Get 25% off on spring cleanup & planting packages.",
    icon: <FaSeedling className="text-green-600 text-4xl" />,
    offer: "Limited Time",
  },
  {
    id: 2,
    title: "Summer Lawn Package",
    desc: "Enjoy 30% discount on full lawn makeover service.",
    icon: <FaLeaf className="text-lime-600 text-4xl" />,
    offer: "Offer Ends Soon",
  },
];

const SpecialOffers = () => {
  return (
    <section className="my-12">
      <div className="max-w-7xl mx-auto lg:px-0 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">
           Special Offers & Seasonal Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white dark:bg-green-800 p-6 rounded-2xl shadow-lg border border-green-200 dark:border-green-700"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-primary dark:text-white">{item.title}</h3>
                  <span className="badge badge-error badge-sm text-white mt-1">{item.offer}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-200 mb-4">{item.desc}</p>
              <button className="btn btn-secondary btn-sm text-black">Book Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
