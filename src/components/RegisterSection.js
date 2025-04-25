import React from 'react';

const RegisterSection = () => {
  return (
    <section className="py-14 px-6 text-center bg-indigo-100 animate-fadeSlideUp">
      <h2 className="text-3xl font-extrabold text-indigo-800 mb-6">📅 Webinar Details</h2>

      <div className="space-y-2 text-lg text-gray-800">
        <p>
          Date: <strong>4th May 2025</strong>
        </p>
        <p>
          Time: <strong>8:00 PM IST</strong>
        </p>
        <p>
          Platform: <strong>Online (join link after registration)</strong>
        </p>
        
      </div>

      <p className="my-6 text-2xl font-bold text-indigo-900">Registration Fee: ₹99 only</p>

      <a
        href="https://rzp.io/rzp/3qiR4C5N"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-md transition duration-300 ease-in-out text-lg font-semibold"
      >
        Register Now
      </a>
    </section>
  );
};
export default RegisterSection;
