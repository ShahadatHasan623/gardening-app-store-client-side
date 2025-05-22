import React from "react";
import logoImg from "../assets/igarden-1.png";
import { motion } from "framer-motion";

const LandscapingCard = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col md:flex-row items-center justify-center gap-6 bg-white py-30 lg:px-0 px-4">
      
      {/* Left card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-gradient-to-b from-green-700 to-green-500 text-white rounded-xl pt-20 pb-10 px-4 w-full md:w-1/2 text-center shadow-lg flex flex-col items-center"
      >
        <div className="absolute -top-15 w-56 h-30 rounded-xl overflow-hidden shadow-lg z-20">
          <img
            src="https://i.ibb.co/v6StgZVc/pexels-van-qui-nguy-n-2148727453-30606642.jpg"
            alt="Lawn Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-white text-green-700 rounded-full px-4 py-2 text-center shadow-md">
            <p className="text-xl font-bold">15+</p>
            <p className="text-xs">Years</p>
          </div>
        </div>

        <div className="bg-orange-500 p-3 rounded-full mb-4 mt-8">
          <img src={logoImg} alt="Logo" className="w-28" />
        </div>
        <h2 className="text-xl font-semibold">
          Premium Services & Maintenance
        </h2>
        <p className="text-sm mt-2 px-2">
          Letius felis hac pretium vel primis fringilla mattis dis class
        </p>
      </motion.div>

      {/* Right card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/2 text-gray-800 space-y-4 relative z-10"
      >
        <p className="text-sm text-orange-600 font-semibold">Who we are</p>
        <h2 className="text-2xl font-bold leading-tight">
          Landscaping & Lawn Care Services for Commercial & Residential
          Properties
        </h2>
        <p className="text-sm text-gray-500">
          Nulla pede imperdiet ut litora interdum velit dictum libero odio. Leo
          cursus aliquam consectetur dis sociosqu praesent lobortis luctus
          tincidunt ultricies ullamcorper. Risus praesent letius justo congue
          finibus ad accumsan ut.
        </p>

        <div className="flex gap-8 pt-4">
          <div>
            <p className="text-green-700 text-2xl font-bold">4,000+</p>
            <p className="text-sm font-semibold">Project Done</p>
          </div>
          <div>
            <p className="text-green-700 text-2xl font-bold">3375+</p>
            <p className="text-sm font-semibold">Happy Client</p>
          </div>
        </div>

        <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
          Discover more
        </button>
      </motion.div>
    </div>
  );
};

export default LandscapingCard;
