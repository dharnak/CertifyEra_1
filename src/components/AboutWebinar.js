import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const points = [
  "How PMP® certification can unlock better roles, salaries, and global opportunities",
  "A clear roadmap to crack the PMP® exam (even if you’re just starting)",
  "Time-tested prep strategies that help you pass on your first attempt",
  "Common mistakes most candidates make and how to avoid them",
  "How to select the right approach: Agile, Predictive, or Hybrid",
  "Real examples from actual project implementations and exam journeys"
];

const AboutWebinar = () => {
  return (
    <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto bg-blue-50 rounded-3xl shadow-xl transition-all duration-700">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
          🚀 What You’ll Learn
        </h2>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          This webinar is packed with actionable strategies and expert guidance designed to help you become a certified PMP® with confidence.
        </p>
      </div>

      {/* 2-column layout on medium+ screens */}
      <ul className="grid gap-6 md:grid-cols-2">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition hover:shadow-md"
          >
            <FaCheckCircle className="text-blue-600 text-xl mt-1 shrink-0" />
            <span className="text-blue-900 text-base md:text-lg">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutWebinar;
