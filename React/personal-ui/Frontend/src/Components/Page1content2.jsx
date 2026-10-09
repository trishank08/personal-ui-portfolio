
import React from 'react'

export const Page1content2 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">

      <div className="grid grid-cols-1 gap-6 md:hidden">
        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden">
          <a href="https://github.com/trishank08/Personal-Expense-Tracker-" target="_blank" rel="noopener noreferrer">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1728193884114-7f0770012fd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
              alt="Personal Expense Tracker"
            />
          </a>
        </div>

        <div>
          <h2 className="font-bold text-sm text-[#C8B9C2]">MOBILE APPLICATION</h2>
          <a href="https://github.com/trishank08/Personal-Expense-Tracker-" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold text-2xl hover:text-gray-500">
            Personal Expense Tracker ↗
          </a>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            A Java-based expense tracker that simplifies financial management through organized transactions, spending insights, and intuitive expense monitoring.
          </p>
        </div>

        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden">
          <a href="https://github.com/trishank08/SafeAR-AR-Powered-Emergency-Navigation-Evacuation-System" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1744203858756-eaee290f3ed4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
              alt="SafeAR"
            />
          </a>
        </div>

        <div>
          <h2 className="font-bold text-sm text-[#73B85A]">WEBSITE REDESIGN</h2>
          <a href="https://github.com/trishank08/SafeAR-AR-Powered-Emergency-Navigation-Evacuation-System" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold text-2xl hover:text-gray-500">
            SafeAR ↗
          </a>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            SafeAR leverages augmented reality and intelligent navigation to guide users toward safer routes during emergencies and evacuations.
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-8">
          <div className="h-105 w-full rounded-4xl overflow-hidden">
            <a href="https://github.com/trishank08/Personal-Expense-Tracker-" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://plus.unsplash.com/premium_photo-1728193884114-7f0770012fd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
                alt="Personal Expense Tracker"
              />
            </a>
          </div>

          <div className="h-105 w-full rounded-4xl overflow-hidden">
            <a href="https://github.com/trishank08/SafeAR-AR-Powered-Emergency-Navigation-Evacuation-System" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://plus.unsplash.com/premium_photo-1744203858756-eaee290f3ed4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
                alt="SafeAR"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="ml-5 mt-5 font-bold text-[#C8B9C2]">MOBILE APPLICATION</h2>
            <a href="https://github.com/trishank08/Personal-Expense-Tracker-" target="_blank" rel="noopener noreferrer" className="ml-5 inline-block font-bold text-3xl hover:text-gray-500 transition-colors">
              Personal Expense Tracker ↗
            </a>
            <p className="m-5 leading-relaxed text-gray-600">
              A Java-based expense tracker that simplifies financial management through organized transactions, spending insights, and intuitive expense monitoring.
            </p>
          </div>

          <div>
            <h2 className="mt-5 font-bold text-[#73B85A]">WEBSITE REDESIGN</h2>
            <a href="https://github.com/trishank08/SafeAR-AR-Powered-Emergency-Navigation-Evacuation-System" target="_blank" rel="noopener noreferrer" className="inline-block font-bold text-3xl hover:text-gray-500 transition-colors">
              SafeAR ↗
            </a>
            <p className="mt-5 leading-relaxed text-gray-600">
              SafeAR leverages augmented reality and intelligent navigation to guide users toward safer routes during emergencies and evacuations.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page1content2
