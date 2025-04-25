import React from 'react'; 
import { FaLaptopCode, FaStar, FaBolt, FaRocket } from 'react-icons/fa';
import HeroImg from '../assets/CertifyEra.png'; // Ensure the path is valid

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden py-24 px-6 sm:px-10 md:px-16">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,149.3C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64V320H0Z"
          />
        </svg>
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 z-0 flex flex-wrap justify-center items-center opacity-10 pointer-events-none">
        <FaLaptopCode className="text-white text-6xl m-4" />
        <FaRocket className="text-white text-5xl m-4" />
        <FaStar className="text-white text-5xl m-4" />
        <FaBolt className="text-white text-5xl m-4" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="text-left md:w-1/2">
          <p className="text-yellow-300 text-sm md:text-base font-semibold mb-3 uppercase tracking-wider">
            Limited Time
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Master the PMP Exam: <br className="hidden md:block" />
            Proven Strategies from Experts
          </h1>
          <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
            Register for the incredible value-packed Webinar by clicking on the link below:
          </p>
          <a
            href="https://rzp.io/rzp/3qiR4C5N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-800 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
          >
            Register Now
          </a>
        </div>

        {/* Image with 3D Glass Card */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-[0_10px_60px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_80px_rgba(255,255,255,0.4)] transform hover:-rotate-x-3 hover:rotate-y-3 transition-all duration-500 max-w-sm w-full">
            <div className="absolute -inset-px bg-gradient-to-tr from-white/30 to-white/10 rounded-3xl blur-md opacity-30 pointer-events-none z-0" />
            <img
              src={HeroImg}
              alt="Webinar Hero"
              className="relative z-10 w-full h-auto object-contain rounded-xl"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16 rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,96L40,122.7C80,149,160,203,240,224C320,245,400,235,480,213.3C560,192,640,160,720,154.7C800,149,880,171,960,165.3C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64V0H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
