import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

export const Page1content = (propos) => {
  return (
    <div className='py-10 flex items-center  gap-10 h-[90vh]  px-18'>
        <Leftcontent/>
        <Rightcontent users={propos.users}/>
    </div>
  )
}
export default Page1content