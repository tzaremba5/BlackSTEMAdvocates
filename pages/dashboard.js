import React from 'react'
import HomePageHeader from '../components/HomePageHeader'
import Chat from '../components_chat/Chat'
import Sidebar from '../components_chat/Sidebar'
import HeaderSmall from '../components_chat/HeaderSmall'


function dashboard() {
  return (
    <div className='flex h-screen flex-col overflow-y-hidden'>
        <HeaderSmall/>
        <div className='flex-1 pt-[20px] pb-[20px] bg-gray-100'>
          <div className='flex justify-center h-full'>
              <div className='py-[10px] w-11/12 flex h-fit mt-[10px] shadow-lg rounded-md bg-white'>
                  <Sidebar/>
                  <Chat/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default dashboard