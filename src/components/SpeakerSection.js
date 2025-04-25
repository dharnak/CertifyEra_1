import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SpeakerSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-100 to-indigo-200 py-20 px-6" id="speaker">
      <div className="max-w-6xl mx-auto text-center text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900" data-aos="fade-up">
          🎤 Meet Your Speaker – Anita Myana
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          {/* Speaker Info Cards */}
          {[
            "21+ Years of Global Project Leadership",
            "Premier Authorized PMP® Instructor",
            "Trained 5000+ Professionals Across 10+ Countries",
            "Ex-Oracle, Virtusa, Polaris | Delivered Projects for JP Morgan, Deutsche Bank, Citibank",
            "Speaker at PMI Events | Top Talent Awardee in Multiple Organizations"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-blue-900 font-medium transition hover:shadow-lg hover:scale-[1.02] duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              🔹 {item}
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <p className="text-lg text-blue-900 font-semibold max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="600">
          Anita blends theory with real-world experience, helping professionals confidently clear their PMP® exam and lead impactful projects.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl transition transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
