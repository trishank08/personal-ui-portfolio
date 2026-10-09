
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Page1content1 from './Page1content1'
import Page1content2 from './Page1content2'
import About from './About'
import Connect from './Connect'

export const Page1 = () => {
  return (
    <div id="home">
      <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-t-4xl m-3 sm:m-5 md:m-8 mb-0 min-h-[80vh] md:min-h-screen flex justify-center items-center">
        <div className="w-full">
          <h1 className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
            Hi,
            <span>
              <img
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-25 md:h-25 rounded-lg border-2 border-gray-200 object-cover rotate-12 transition-transform duration-500 hover:-rotate-12"
                src="img2.jpeg"
                alt="Dog"
              />
            </span>
            I'm Trishank!
          </h1>

          <p className="text-gray-600 font-normal text-base sm:text-lg md:text-xl mt-6 sm:mt-10 leading-7 sm:leading-8 text-center max-w-3xl mx-auto px-2">
            A website strategist and designer who spent a decade understanding people before designing for them — now creating digital experiences that make information easier to find, understand, and use.
          </p>

          <div className="mt-12 sm:mt-16 md:mt-20 text-3xl sm:text-4xl font-bold flex justify-center">
            <i className="ri-arrow-down-line"></i>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mx-3 sm:mx-5 md:mx-8 mt-0 mb-0 py-8 sm:py-10 md:py-12 min-h-screen flex justify-center">
        <Page1content1 />
      </div>

      <div className="bg-gray-100 mx-3 sm:mx-5 md:mx-8 mt-0 mb-0 py-8 sm:py-10 md:py-12 min-h-screen flex justify-center">
        <Page1content2 />
      </div>

      <div className="bg-gray-100 mx-3 sm:mx-5 md:mx-8 mt-0 mb-0 py-8 sm:py-10 md:py-12 flex">
        <About />
      </div>

      <div className="bg-gray-100 rounded-b-4xl mx-3 sm:mx-5 md:mx-8 mt-0 py-8 sm:py-10 md:py-12 min-h-screen flex justify-center">
        <Connect />
      </div>
    </div>
  )
}

export default Page1
