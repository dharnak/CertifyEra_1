import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const points = [
  "Why PMP Certification Matters – Explore how becoming a certified Project Management Professional (PMP) can accelerate your career, increase your credibility, and open doors to global opportunities.",
  "Your Personalized Proven Study Plan – Get a detailed, week-by-week guide—complete with resources, mock exams, and key milestones—to help you stay focused and exam-ready.",
  "Top Tools & Resources, Handpicked by Experts – Learn which books, online courses, and practice platforms deliver real results—and skip the guesswork.",
  "Smart Exam Strategies for Real Success – Gain insider techniques to tackle tricky questions, manage exam stress, and boost your chances of passing on the first try.",
  "Learn Do’s and Don’ts for your PMP Exam Prep – Learn the Do’s and Don’ts as part of your PMP Application process, your exam preparation and scheduling the exam.",
  "We can be your partner for your entire PMP Certification journey."
];

const AboutWebinar = () => {
  return (
    <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto bg-blue-50 rounded-3xl shadow-xl transition-all duration-700">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
          🔍 What You’ll Gain from This Webinar
        </h2>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          This webinar delivers everything you need to approach the PMP exam with clarity, confidence, and expert-proven techniques.
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
