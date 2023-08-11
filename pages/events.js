import React from 'react'
import HeaderSmall from '../components_chat/HeaderSmall'
import Calendar from '../components_chat/Calendar'

function events() {
  return (
    <div className='flex h-screen flex-col overflow-y-scroll overflow-visible'>
        <HeaderSmall/>
        <div className='flex-1 pt-[20px] pb-[20px] bg-gray-100'>
          <div className='flex justify-center'>
              <div className='flex justify-center tablet:justify-start py-[10px] w-11/12 flex mt-[10px] shadow-lg rounded-md bg-white'>
                <Calendar/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default events