import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Maimouna",
    location: "France",
    date: "Dec 20, 2024",
    rating: 5,
    review: "Great teacher. The courses and mock exams helped me pass the CAPM with a good score. I recommend.",
    link: "https://www.trustpilot.com/review/certifyera.com"
  },
  {
    name: "Maria Ustianska",
    location: "UAE",
    date: "Nov 16, 2024",
    rating: 5,
    review: "Very knowledgeable trainer, material presented in clear and concise manner.",
    link: "https://www.trustpilot.com/review/certifyera.com"
  },
  {
    name: "Poonam H",
    location: "New Zealand",
    date: "Oct 12, 2024",
    rating: 4,
    review: "It was a good experience and an effective course. The trainer was cooperative and adjusted with time.",
    link: "https://www.trustpilot.com/review/certifyera.com"
  },
  {
    name: "Katayini Sai Komal Tummala",
    location: "Singapore",
    date: "Oct 12, 2024",
    rating: 5,
    review: "Anita is a brilliant teacher. She made sure all participants understood the concepts before moving forward.",
    link: "https://www.trustpilot.com/review/certifyera.com"
  },
  {
    name: "Jeremih Africano",
    location: "Kenya",
    date: "Aug 29, 2024",
    rating: 5,
    review: "Very detailed, educative and enjoyable course. I’m thankful to have participated.",
    link: "https://www.trustpilot.com/review/certifyera.com"
  },
  {
    name: "Muloma Hillary",
    location: "Kenya",
    date: "Aug 27, 2024",
    rating: 4,
    review: "Learned a lot from Anita. The best training module I’ve received so far.",
    link: "https://www.trustpilot.com/review/certifyera.com"
  },
  {
    name: "Alex Kinyua",
    location: "Kenya",
    date: "Aug 27, 2024",
    rating: 5,
    review: "Training was informative and excellent. Anita was patient and clear with explanations.",
    link: "https://www.trustpilot.com/review/certifyera.com"
  }
];

const Star = ({ filled }) => (
  <span className={filled ? "text-yellow-400" : "text-gray-300"}>★</span>
);

const ReviewsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-14 px-6 lg:px-20" id="reviews">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10" data-aos="fade-up">
          What Our Learners Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay with continuous loop
          pagination={{ clickable: true }}
          effect="fade" // Fading transition effect
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {reviews.map((r, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-gray-50 rounded-xl shadow-md p-6 h-full hover:shadow-lg transition-all duration-500"
                data-aos="fade-up" // Fading effect on each slide
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-lg text-gray-800">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
                <p className="text-sm text-gray-400 mb-1">{r.date}</p>
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < r.rating} />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{r.review}</p>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-2 inline-block text-sm hover:underline"
                >
                  Read more on Trustpilot
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
