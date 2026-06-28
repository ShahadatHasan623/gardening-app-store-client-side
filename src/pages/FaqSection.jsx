import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "How much does a gardening service cost?",
    answer:
      "It depends on the size of the garden and the services you require. On average, basic maintenance starts from $50 per session.",
  },
  {
    question: "Do you offer regular maintenance plans?",
    answer: "Yes, we offer weekly, bi-weekly, and monthly garden maintenance packages.",
  },
  {
    question: "Can I schedule a one-time garden cleanup?",
    answer: "Absolutely! You can book a one-time service without any commitment to ongoing plans.",
  },
  {
    question: "Do you use organic fertilizers?",
    answer: "Yes, we prioritize using organic and eco-friendly products for all garden services.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Subtle Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.01] blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/20 uppercase tracking-widest">
            <FiHelpCircle className="w-3.5 h-3.5" /> FAQ Support
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950 dark:text-gray-50">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Questions</span>
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-base max-w-md mx-auto">
            Got questions? We've got answers. Everything you need to know about our services and plans.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-zinc-900/60 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-emerald-500/30 shadow-lg dark:border-emerald-500/20" 
                    : "border-gray-100 hover:border-gray-200 dark:border-zinc-800/80 dark:hover:border-zinc-700"
                }`}
              >
                {/* Accordion Trigger/Header */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left gap-4 focus:outline-none select-none group"
                >
                  <span className={`text-base font-bold tracking-tight transition-colors duration-200 ${
                    isOpen 
                      ? "text-emerald-600 dark:text-emerald-400" 
                      : "text-gray-900 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* Icon Switcher Wrapper with Smooth Rotation */}
                  <div className={`p-1.5 rounded-lg border transition-all duration-300 ${
                    isOpen 
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30 rotate-180" 
                      : "bg-gray-50 dark:bg-zinc-800/40 text-gray-400 border-transparent group-hover:text-gray-600 dark:group-hover:text-zinc-300"
                  }`}>
                    {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Content Panel (AnimatePresence Ensures Unmounting Motion works) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm md:text-base text-gray-600 dark:text-zinc-400 border-t border-gray-50 dark:border-zinc-800/40 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;