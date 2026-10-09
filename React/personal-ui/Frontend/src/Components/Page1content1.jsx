import React from 'react'

export const Page1content1 = () => {
  return (
    <div id="casestudy">
        <div className=' flex mt-10 justify-center mb-12'>
            <h1 className='text-6xl font-bold'>Case Studies</h1>
        </div>
       <div>
         <div className=' w-full  h-full flex justify-between gap-8'>
            <div className='h-105 w-155 bg-blue-300  rounded-4xl' > 
                  <a href="https://github.com/trishank08/connectsphere" target="_blank" rel="noopener noreferrer" className="block h-105 w-155 overflow-hidden rounded-4xl">
                    <img className="w-full h-full object-cover rounded-4xl transition-transform duration-300 hover:scale-110" src="https://plus.unsplash.com/premium_photo-1720430157103-985dfc0e6825?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="" />
                    </a>
            </div>
            <div className='h-105 w-155 bg-orange-300 rounded-4xl'>
                     <a href="https://github.com/trishank08/DriverX" target="_blank" rel="noopener noreferrer" className="block h-105 w-155 overflow-hidden rounded-4xl" >
                    <img className="w-full h-full object-cover rounded-4xl transition-transform duration-300 hover:scale-110" src="https://plus.unsplash.com/premium_photo-1720503225766-21dff692f754?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w0fHx8ZW58MHx8fHx8" alt="" />
                     </a>
            </div>
        </div>
         <div  className=' w-full  h-full flex justify-between gap-8' >
                <div>
                    <h1 className='ml-5 mt-5 font-bold text-[#36554B]'>MOBILE APPLICATION</h1>
                   
                     <a
                      href="https://github.com/trishank08/connectsphere"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-5 font-bold text-3xl hover:text-gray-500 transition-colors"
                     >
                     ConnectSphere 
                     </a>

                    <p className='m-5'>ConnectSphere is a full-stack social networking platform enabling <br /> seamless communication, real-time interactions, and secure connectivity <br />through modern web technologies.</p>
                </div>
                <div>
                    <h1 className='mt-5  mr-115 font-bold text-[#C9BC9D]'>WEBSITE REDESIGN</h1>
                    
                    <a
                       href="https://github.com/trishank08/DriverX"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="font-bold text-3xl hover:text-gray-500 transition-colors"
                    >
                       DriverX 
                    </a>

                    <p className='mt-5'>DriverX is an intelligent vehicle platform simplifying car discovery through <br />seamless browsing, intuitive interfaces, and modern web technologies.</p>
                </div>
            </div>
       </div>
    </div>
  )
}
export default Page1content1