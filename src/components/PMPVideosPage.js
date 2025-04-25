import React from 'react';

const sampleLectures = [
  { title: 'Lecture 1', url: 'https://youtu.be/qlIPvIMNwqA' },
  { title: 'Lecture 2', url: 'https://youtu.be/zyG6xjD_XCs' },
  { title: 'Lecture 3', url: 'https://youtu.be/CRCoEJ6Ghy4' },
  { title: 'Lecture 4', url: 'https://youtu.be/m6GE3Z3oKFQ' },
];

const videoTestimonials = [
  { title: 'Testimonial 1', url: 'https://youtu.be/iT7qLWs6zgg' },
  { title: 'Testimonial 2', url: 'https://youtu.be/wKi8TpFmvsY' },
  { title: 'Testimonial 3', url: 'https://youtu.be/eymCZcYfHQA' },
];

const socialMediaLinks = [
  {
    title: 'Hirakesh on LinkedIn',
    url: 'https://www.linkedin.com/posts/hirakesh_pmp-projectmanagement-certification-ugcPost-7299251162380177408-2vcA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA6neJ4BHUUmdXA_4OY99ApfX4BE96JjbxA',
  },
  {
    title: 'Anita Ankam on LinkedIn',
    url: 'https://www.linkedin.com/posts/anita-ankam-0264066a_capm-pmp-projectmanagement-ugcPost-7316022650479292418-R3_J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA6neJ4BHUUmdXA_4OY99ApfX4BE96JjbxA',
  },
  {
    title: 'Ashwini Sen Gupta on LinkedIn',
    url: 'https://www.linkedin.com/posts/ashwini-sen-gupta-b9b593181_businessanalysis-skilldevelopment-gratitude-ugcPost-7311718222477565952-Slke?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA6neJ4BHUUmdXA_4OY99ApfX4BE96JjbxA',
  },
];

const PMPVideosPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 md:px-10">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-12 text-center">
        🎥 PMP® Sample Lectures & Testimonials
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">🔍 Sample Lectures by Expert Speaker</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sampleLectures.map((item, index) => (
            <iframe
              key={index}
              src={item.url.replace('youtu.be/', 'www.youtube.com/embed/')}
              title={item.title}
              className="w-full h-64 rounded-xl shadow-lg"
              allowFullScreen
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">🌟 PMP® Video Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {videoTestimonials.map((item, index) => (
            <iframe
              key={index}
              src={item.url.replace('youtu.be/', 'www.youtube.com/embed/')}
              title={item.title}
              className="w-full h-64 rounded-xl shadow-lg"
              allowFullScreen
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-6">💬 Testimonials from Social Media</h2>
        <ul className="space-y-4">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition font-medium"
              >
                🔗 {link.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PMPVideosPage;
