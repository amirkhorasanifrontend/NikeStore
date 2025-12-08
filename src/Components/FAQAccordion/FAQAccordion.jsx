import React, { useState } from 'react';

const FAQAccordion = () => {
// JavaScript Array for the Nike Footwear FAQs
const faqs = [
  {
    id: 1,
    question: "What is the upper material of this specific Nike shoe model?",
    answer: "The upper part of this shoe is constructed from a combination of **Breathable Mesh** fabric and reinforcing overlays of **Synthetic Leather**, ensuring both durability and ventilation.",
  },
  {
    id: 2,
    question: "What is the primary technology used in the shoe's Midsole?",
    answer: "This model utilizes **Nike Zoom Air** technology for superior shock absorption and high energy return in the heel and forefoot areas. This feature is ideal for running and high-impact activities.",
  },
  {
    id: 3,
    question: "Is this shoe suitable for everyday use (Lifestyle) or exclusively for athletic performance?",
    answer: "The sleek design and comfort provided by the integrated **React technology** make this shoe suitable for both light running and gym workouts, as well as extended daily wear.",
  },
  {
    id: 4,
    question: "How should I choose the correct size for Nike footwear?",
    answer: "Generally, Nike shoes tend to run slightly small. It is recommended to measure your foot and choose **half a size larger** than your standard size, especially if you are between two sizes.",
  },
];

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-10">
      <div className="space-y-4">
        {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
          <div
            key={item.id}
            className={`border rounded-lg transition-all duration-300 ${
                isOpen ? 'border-black bg-gray-50 dark:bg-neutral-800' : 'border-gray-100 dark:border-neutral-600 dark:bg-neutral-800 hover:border-gray-400 bg-white'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between p-4 md:p-6 text-left focus:outline-none"
            >

              <span className={`text-lg md:text-xl font-medium transition-colors duration-200 ${isOpen ? 'text-black dark:text-neutral-400' : 'text-gray-800 dark:text-neutral-50'}`}>
                {item.question}
              </span>

              <span
                className={`ml-4 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-black" : "rotate-0"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-600 dark:text-white/85 leading-relaxed animate-[fadeIn_0.3s_ease-in-out]">
                {item.answer}
              </div>
            )}
          </div>
        )})}
      </div>
    </div>
  );
};

export default FAQAccordion;