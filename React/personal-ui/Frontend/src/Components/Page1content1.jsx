
import React from 'react'

export const Page1content1 = () => {
  return (
    <div id="casestudy" className="w-full px-4 sm:px-6 md:px-8">
      <div className="flex justify-center mt-8 sm:mt-10 mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Case Studies
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden">
          <a
            href="https://github.com/trishank08/connectsphere"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1720430157103-985dfc0e6825?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              alt="ConnectSphere project"
            />
          </a>
        </div>

        <div>
          <h2 className="font-bold text-sm text-[#36554B]">
            MOBILE APPLICATION
          </h2>
          <a
            href="https://github.com/trishank08/connectsphere"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-bold text-2xl hover:text-gray-500 transition-colors"
          >
            ConnectSphere ↗
          </a>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            ConnectSphere is a full-stack social networking platform enabling seamless communication, real-time interactions, and secure connectivity through modern web technologies.
          </p>
        </div>

        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden">
          <a
            href="https://github.com/trishank08/DriverX"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1720503225766-21dff692f754?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w0fHx8ZW58MHx8fHx8"
              alt="DriverX project"
            />
          </a>
        </div>

        <div>
          <h2 className="font-bold text-sm text-[#C9BC9D]">
            WEBSITE REDESIGN
          </h2>
          <a
            href="https://github.com/trishank08/DriverX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-bold text-2xl hover:text-gray-500 transition-colors"
          >
            DriverX ↗
          </a>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            DriverX is an intelligent vehicle platform simplifying car discovery through seamless browsing, intuitive interfaces, and modern web technologies.
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-8">
          <div className="h-105 w-full rounded-4xl overflow-hidden">
            <a
              href="https://github.com/trishank08/connectsphere"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://plus.unsplash.com/premium_photo-1720430157103-985dfc0e6825?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
                alt="ConnectSphere project"
              />
            </a>
          </div>

          <div className="h-105 w-full rounded-4xl overflow-hidden">
            <a
              href="https://github.com/trishank08/DriverX"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://plus.unsplash.com/premium_photo-1720503225766-21dff692f754?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcnN8MHx8fHx8"
                alt="DriverX project"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="ml-5 mt-5 font-bold text-[#36554B]">
              MOBILE APPLICATION
            </h2>
            <a
              href="https://github.com/trishank08/connectsphere"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-5 inline-block font-bold text-3xl hover:text-gray-500 transition-colors"
            >
              ConnectSphere ↗
            </a>
            <p className="m-5 leading-relaxed text-gray-600">
              ConnectSphere is a full-stack social networking platform enabling seamless communication, real-time interactions, and secure connectivity through modern web technologies.
            </p>
          </div>

          <div>
            <h2 className="mt-5 font-bold text-[#C9BC9D]">
              WEBSITE REDESIGN
            </h2>
            <a
              href="https://github.com/trishank08/DriverX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-3xl hover:text-gray-500 transition-colors"
            >
              DriverX ↗
            </a>
            <p className="mt-5 leading-relaxed text-gray-600">
              DriverX is an intelligent vehicle platform simplifying car discovery through seamless browsing, intuitive interfaces, and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1content1
