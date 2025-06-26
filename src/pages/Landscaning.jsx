import React from "react";
import { motion } from "framer-motion";
import awardImg from "../assets/garden-gloves.png";
import awardImg2 from "../assets/lawn-mowing.png";
import awardImg3 from "../assets/winners-medal.png";
import awardImg4 from "../assets/garden.png";

const awards = [
  { img: awardImg, title: "Garden Gloves" },
  { img: awardImg2, title: "Lawn Mowing" },
  { img: awardImg3, title: "Winners Medal" },
  { img: awardImg4, title: "Gardener" },
];

const Landscaping = () => {
  return (
    <div
     className="max-w-7xl mx-auto py-12">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-4xl font-bold text-green-700">Landscaping Awards</h1>
        <p className="text-cupcake">
          With so many years of experience in the business, our company <br /> is your
          source for the highest quality and landscaping service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center lg:p-0 p-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            whileHover={{
              opacity: 1,
              backgroundColor: "#e2e8f0", 
              borderColor: "#22c55e",
              scale: 1.05,
            }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="border-2 border-gray-500 bg-slate-200 flex flex-col items-center justify-center p-6 rounded-xl shadow-md"
          >
            <img className="h-20 mb-2" src={award.img} alt={award.title} />
            <h2 className="text-lg font-semibold text-black">{award.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Landscaping;
