
import React from 'react';

export const Navbar = () => {
  return (
    <div className="m-3 p-3 bg-white rounded-full shadow-lg">
      <div className="flex justify-between items-center">

        {/* Logo and Name */}
        <div className="flex items-center gap-5">
          <img
            className="w-10 h-10 rounded-lg object-cover transition-transform duration-700 hover:rotate-[350deg]"
            src="https://tse3.mm.bing.net/th/id/OIP.loj9IG1bgJFRnjkFlXEcCgHaFj?r=0&pid=Api&h=220&P=0"
            alt="Logo"
          />
          <h3 className="font-bold">Trishank Rahangdale</h3>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 m-3">
          <a href="#home" className="hover:text-gray-500 transition">Home</a>

          <a href="#casestudy" className="hover:text-gray-500 transition">
            Case Studies
          </a>

          <a href="#about" className="hover:text-gray-500 transition">
            About Me
          </a>

          <a
           href="https://drive.google.com/file/d/15IOeu8upcI9Yksq_SrkjYXQCLW3xwUMJ/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer"
           className="hover:text-gray-500 transition"
          >
          Resume
          </a>

          <a
            href="https://www.linkedin.com/in/trishank08/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500 transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
