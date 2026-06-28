import React from "react";
import { FaSeedling, FaLeaf } from "react-icons/fa";
import { FiArrowRight, FiGift } from "react-icons/fi";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Spring Garden Care",
    desc: "Get 25% off on spring cleanup & planting packages.",
    icon: <FaSeedling className="text-emerald-500 dark:text-emerald-400 text-3xl" />,
    offer: "Limited Time",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    id: 2,
    title: "Summer Lawn Package",
    desc: "Enjoy 30% discount on full lawn makeover service.",
    icon: <FaLeaf className="text-amber-500 dark:text-amber-400 text-3xl" />,
    offer: "Offer Ends Soon",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ambient Radial Background Glimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 px-3 py-1 rounded-full border border-rose-100 dark:border-rose-900/20 uppercase tracking-widest animate-pulse">
            <FiGift className="w-3.5 h-3.5" /> Seasonal Discounts
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950 dark:text-gray-50">
            Special Offers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Seasonal Packages</span>
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 max-w-md mx-auto text-sm md:text-base">
            Premium green care experiences crafted perfectly for your yard, now available with exclusive time-sensitive benefits.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 dark:border-zinc-800/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Ambient Glow Sheet */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.gradient} blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start gap-5 mb-6 relative z-10">
                {/* Icon Wrapper Frame */}
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <div className="text-left space-y-1.5 flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-950 dark:text-gray-50">
                      {item.title}
                    </h3>
                    <span className="inline-block text-[10px] font-extrabold bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded-md border border-rose-100 dark:border-rose-900/30 uppercase tracking-wider">
                      {item.offer}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Premium Call to Action Area */}
              <div className="pt-4 border-t border-gray-50 dark:border-zinc-800/40 flex justify-end relative z-10">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-950 hover:bg-emerald-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-white dark:text-zinc-100 font-bold text-xs rounded-xl shadow-md transition-all duration-300 group/btn">
                  Book This Package
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialOffers;