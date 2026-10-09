
import React from 'react';
import 'remixicon/fonts/remixicon.css';

export const Connect = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">

      {/* Heading */}
      <div>
        <h3 className="font-black leading-normal text-center">
          LIKE WHAT YOU SEE?
        </h3>
      </div>

      {/* Main Title */}
      <div>
        <h1 className="mt-5 font-extrabold text-8xl text-center">
          Let's Connect!
        </h1>
      </div>

      {/* Resume and LinkedIn Buttons */}
      <div className="gap-5 m-15 justify-center flex">

        <a
           href="https://drive.google.com/file/d/15IOeu8upcI9Yksq_SrkjYXQCLW3xwUMJ/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer"
           className="h-15 w-30 flex items-center justify-center bg-gray-900 text-white px-4 py-2 border border-black rounded-2xl hover:border-red-500 transition-all duration-300"
>
  Resume
</a>

        <a
          href="https://www.linkedin.com/in/trishank08/"
          target="_blank"
          rel="noreferrer"
          className="h-15 w-30 flex items-center justify-center text-black px-4 py-2 rounded-2xl border border-black hover:border-gray-300 transition-all duration-300"
        >
          LinkedIn
        </a>

      </div>

      {/* Email */}
      <div className="flex justify-center items-center gap-2 m-15">
        <i className="ri-mail-line"></i>
        <a
          href="mailto:trishankrahangdale17@gmail.com"
          className="hover:text-gray-500 transition-colors duration-300"
        >
          trishankrahangdale17@gmail.com
        </a>
      </div>

    </div>
  );
};

export default Connect;
