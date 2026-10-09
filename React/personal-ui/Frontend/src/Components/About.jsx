import React from 'react'

export const About = () => {
  return (
    <div id="about" className=''>
        <div className='m-20 flex justify-between gap-20 mb-0'>
            <div>
            <h1 className='font-bold text-3xl ml-45 '>About Me</h1>
            <p className='ml-45 text-xl leading-normal mt-5 mb-0 text-gray-600'>I am a software developer driven by the 
               <br /> convergence of logic, creativity, and purposeful  
              <br />innovation. As a Computer Science student and MERN Stack 
               <br /> Developer, I transform ideas into thoughtfully engineered  
               <br /> digital experiences. My approach combines analytical thinking, 
               <br />relentless curiosity, and a commitment to excellence, creating  
               <br /> solutions that make technology intuitive, accessible, and 
               <br /> meaningful while balancing
               technical precision with human-<br />centered design principles.</p>
        </div>
        <div>
            <img className='w-50 h-60 object-cover -rotate-12 mr-45 rounded-lg border-2 border-gray-200 ' src="https://images.unsplash.com/photo-1629238416320-36597a283c2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        </div>
        <div>
            <p className='ml-65 text-xl leading-normal mt-5 text-gray-600'> My technical expertise spans MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Java, and Data Structures and Algorithms. I develop responsive interfaces, efficient APIs, and scalable full-stack applications, transforming complex requirements into elegant, reliable, and user-friendly digital solutions.

</p>
        </div>
         <div>
            <p className='ml-65 text-xl leading-normal mt-4 text-gray-600'>Beyond technology, I am passionate about understanding people and solving meaningful problems. I believe exceptional products unite technical excellence with human empathy. Driven by curiosity and continuous learning, I aspire to build innovative, intuitive, and impactful digital experiences that create lasting value.</p>
        </div>
    </div>
  )
}
export default About