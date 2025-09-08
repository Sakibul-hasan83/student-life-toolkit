// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} - All rights reserved
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-400">
            YouTube
          </a>
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
