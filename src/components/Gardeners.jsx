import React from "react";
import GardenersCard from "./GardenersCard";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Gardeners = ({ gardener }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-100%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="w-full py-12  lg:px-0 px-4"
    >
      <div className="py-12 max-w-7xl mx-auto lg:p-0">
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-4xl font-bold text-green-700">Featured Gardeners</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="text-cupcake">
            Discover the expertise and passion of our Featured Gardeners,
            showcasing their unique styles, <br /> innovative techniques, and
            love for cultivating beautiful, thriving gardens. Get inspired by
            their tips <br />
            and stories to create your own green paradise.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-5"
        >
          {gardener.map((gardeners) => (
            <motion.div key={gardeners._id} variants={item}>
              <GardenersCard gardeners={gardeners} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gardeners;
