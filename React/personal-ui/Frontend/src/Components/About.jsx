
import React from 'react'

export const About = () => {
  return (
    <div id="about" className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 lg:gap-24 md:m-8 lg:m-12">
        <div className="w-full min-w-0 md:max-w-2xl">
          <h1 className="font-bold text-3xl sm:text-4xl text-center md:text-left">
            About Me
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 text-center md:text-left">
            I am a software developer driven by the convergence of logic, creativity, and purposeful innovation. As a Computer Science student and MERN Stack Developer, I transform ideas into thoughtfully engineered digital experiences. My approach combines analytical thinking, relentless curiosity, and a commitment to excellence, creating solutions that make technology intuitive, accessible, and meaningful while balancing technical precision with human-centered design principles.
          </p>
        </div>

        <div className="flex justify-center shrink-0 md:ml-4 lg:ml-8">
          <img
            className="w-40 h-48 sm:w-50 sm:h-60 md:w-52 md:h-64 lg:w-60 lg:h-72 object-cover -rotate-12 rounded-lg border-2 border-gray-200"
            src="https://images.unsplash.com/photo-1629238416320-36597a283c2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About me"
          />
        </div>
      </div>

      <div className="md:mx-8 lg:mx-12">
        <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          My technical expertise spans MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Java, and Data Structures and Algorithms. I develop responsive interfaces, efficient APIs, and scalable full-stack applications, transforming complex requirements into elegant, reliable, and user-friendly digital solutions.
        </p>
      </div>

      <div className="md:mx-8 lg:mx-12">
        <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          Beyond technology, I am passionate about understanding people and solving meaningful problems. I believe exceptional products unite technical excellence with human empathy. Driven by curiosity and continuous learning, I aspire to build innovative, intuitive, and impactful digital experiences that create lasting value.
        </p>
      </div>
    </div>
  )
}

export default About
