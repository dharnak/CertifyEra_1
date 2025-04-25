import React from 'react';
import { FaStar } from 'react-icons/fa';

const benefits = [
  "✅ Proven Success Formula: Discover a tried-and-true plan designed specifically for busy professionals, ensuring you stay on track.",
  "🎙️ Exclusive Expert Insights: Learn directly from a seasoned PMP expert with real-world experience.",
  "💬 Engaging Q&A: Get personalized answers to your questions and solutions to any challenges you're facing.",
  "🚀 Confidence Boost: Leave the webinar feeling clear, motivated, and ready to dive into your PMP journey without hesitation."
];

const BenefitsSection = () => {
  return (
    <section className="my-20 py-20 px-6 md:px-10 max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-100">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center">
        🔍 Why You Should Join This Webinar
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <FaStar className="text-yellow-400 mt-1 shrink-0" size={24} />
            <span className="text-lg text-blue-900 font-medium">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
