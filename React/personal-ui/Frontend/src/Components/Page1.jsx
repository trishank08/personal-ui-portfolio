import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Page1content1 from './Page1content1'
import Page1content2 from './Page1content2'
import About from './About'
import Connect from './Connect'

export const Page1 = () => {
  return (
    <div id="home">
        <div  className='bg-gray-100 p-8 rounded-t-4xl m-8 mb-0 h-screen   flex justify-center items-center'>
        <div>
            <div>
                <h1 className=' flex justify-center items-center gap-5 text-6xl font-extrabold'>Hi,
            <samp><img className='w-25 h-25 rounded-lg border-2 border-gray-200 object-cover rotate-12 transition-transform duration-500 hover:-rotate-12' src="https://wallpapers.com/images/hd/cute-black-and-white-small-dog-o3d95atw61yid99d.jpg" alt="" /></samp>
             I'm Trishank!</h1>
            </div>
            <div>
                <p className='text-gray-600 font-normal text-xl mt-10 gap-3 leading-8 text-center items-center'>A website strategist and designer who spent a decade understanding 
                   <br /> people before designing for them — now creating digital experiences 
                    <br />that make information easier to find, understand, and use.</p>
            </div>
            <div className='m-20 text-4xl font-bold flex justify-center '>
                <i  class="ri-arrow-down-line"></i>
            </div>

             
                

        </div>
        
        </div>
        <div className='bg-gray-100   m-8 mt-0 mb-0 h-screen   flex justify-center '>
           <Page1content1/>
        </div>
        <div className='bg-gray-100   m-8 mt-0 mb-0 h-screen   flex justify-center '>
            <Page1content2/>
        </div>
        <div className='bg-gray-100   m-8 mt-0 mb-0 h-screen   flex  '>
            <About/>
        </div>
        <div  className='bg-gray-100  rounded-b-4xl m-8 mt-0 h-screen   flex justify-center '>
                <Connect/>
        </div>
        
    </div>
  )
}
export default Page1