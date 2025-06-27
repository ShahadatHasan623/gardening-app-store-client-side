import React, { useState } from "react";
import { motion } from "motion/react";

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
    <section className="py-12 bg-white dark:bg-green-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700 dark:text-white">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-green-100 dark:bg-green-800 rounded-box p-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="text-lg font-medium text-green-900 dark:text-white flex justify-between items-center">
                {item.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              <motion initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-green-800 dark:text-gray-200 mt-2"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </motion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
