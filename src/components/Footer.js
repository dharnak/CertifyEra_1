// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg mb-4">Follow us for more updates</p>
        <div className="space-x-6 mb-6">
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-white hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <p className="text-sm">
          &copy; 2025 CertifyEra Consulting Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
