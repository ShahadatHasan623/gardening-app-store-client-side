import React from "react";

const faqs = [
  {
    question: "How much does a gardening service cost?",
    answer: "It depends on the size of the garden and the services you require. On average, basic maintenance starts from $50 per session.",
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
  return (
    <section className="py-12 bg-white dark:bg-green-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700 dark:text-white">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              className="collapse collapse-arrow bg-green-100 dark:bg-green-800 rounded-box"
              key={index}
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium text-green-900 dark:text-white">
                {item.question}
              </div>
              <div className="collapse-content text-green-800 dark:text-gray-200">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
