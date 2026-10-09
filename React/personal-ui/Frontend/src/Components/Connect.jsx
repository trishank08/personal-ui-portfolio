
import React from 'react';
import 'remixicon/fonts/remixicon.css';

export const Connect = () => {
  return (
    <div className="min-h-screen w-full px-4 py-12 flex flex-col justify-center items-center">

      <div>
        <h3 className="font-black leading-normal text-center text-sm sm:text-base">
          LIKE WHAT YOU SEE?
        </h3>
      </div>

      <div>
        <h1 className="mt-5 font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center">
          Let's Connect!
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 mt-10 justify-center">

        <a
          href="https://drive.google.com/file/d/15IOeu8upcI9Yksq_SrkjYXQCLW3xwUMJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="h-15 min-w-30 flex items-center justify-center bg-gray-900 text-white px-4 py-2 border border-black rounded-2xl hover:border-red-500 transition-all duration-300"
        >
          Resume
        </a>

        <a
          href="https://www.linkedin.com/in/trishank08/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-15 min-w-30 flex items-center justify-center text-black px-4 py-2 rounded-2xl border border-black hover:border-gray-300 transition-all duration-300"
        >
          LinkedIn
        </a>

      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mt-10 text-sm sm:text-base text-center">
        <i className="ri-mail-line"></i>
        <a
          href="mailto:trishankrahangdale17@gmail.com"
          className="break-all hover:text-gray-500 transition-colors duration-300"
        >
          trishankrahangdale17@gmail.com
        </a>
      </div>

    </div>
  );
};

export default Connect;
