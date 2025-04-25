import React from 'react';
import { FaGift } from 'react-icons/fa';

const bonuses = [
  "PMP® Study Plan",
  "Latest Mock Tests",
  "Exam Strategy Guide",
  "Exclusive webinar-only discount on full training"
];

const BonusesSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 animate-fadeIn duration-700">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg px-8 py-12 border border-blue-100">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-10">
          🎁 What You’ll Get for ₹99
        </h2>
        <ul className="space-y-6">
          {bonuses.map((bonus, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 text-lg text-blue-900"
            >
              <FaGift className="text-pink-500 mt-1 shrink-0" />
              <span>{bonus}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BonusesSection;
