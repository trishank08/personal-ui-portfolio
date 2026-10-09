import React from 'react'

export const Page1content2 = () => {
  return (
    <div>
    
       <div>
         <div className=' w-full  h-full flex justify-between gap-8'>
            <div className='h-105 w-155 bg-blue-300  rounded-4xl' > 
              <a  href="https://github.com/trishank08/Personal-Expense-Tracker-" target="_blank" rel="noopener noreferrer" >
                    <img className="w-full h-full object-cover rounded-4xl transition-transform duration-300 hover:scale-110" src="https://plus.unsplash.com/premium_photo-1728193884114-7f0770012fd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8" alt="" />
              </a>
            </div>
            <div className='h-105 w-155 bg-orange-300 rounded-4xl'>
                    <a href="https://github.com/trishank08/SafeAR-AR-Powered-Emergency-Navigation-Evacuation-System" target="_blank" rel="noopener noreferrer" className="block h-105 w-155 overflow-hidden rounded-4xl" >
                    <img className="w-full h-full object-cover rounded-4xl transition-transform duration-300 hover:scale-110" src="https://plus.unsplash.com/premium_photo-1744203858756-eaee290f3ed4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8" alt="" />
                    </a>
            </div>
        </div>
         <div  className=' w-full  h-full flex justify-between gap-8' >
                <div>
                    <h1 className='ml-5 mt-5 font-bold text-[#C8B9C2]'>MOBILE APPLICATION</h1>
                    <a
                        href="https://github.com/trishank08/Personal-Expense-Tracker-"
                         target="_blank"
                        rel="noopener noreferrer"
                        className="ml-5 font-bold text-3xl hover:text-gray-500 transition-colors"
                     >
                        Personal Expense Tracker ↗
                    </a>
                    <p className='m-5'>A Java-based expense tracker that simplifies financial management through organized <br />transactions, spending insights, and intuitive expense monitoring.</p>
                </div>
                <div>
                    <h1 className='mt-5  mr-115 font-bold text-[#73B85A]'>WEBSITE REDESIGN</h1>
                    <a
                      href="https://github.com/trishank08/SafeAR-AR-Powered-Emergency-Navigation-Evacuation-System"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="font-bold text-3xl hover:text-gray-500 transition-colors"
                       >
                      SafeAR ↗
                    </a>
                    <p className='mt-5'>SafeAR leverages augmented reality and intelligent navigation to guide users <br /> toward safer routes during emergencies and evacuations.</p>
                </div>
            </div>
       </div>
    </div>
  )
}
export default Page1content2