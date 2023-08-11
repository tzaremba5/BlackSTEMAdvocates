import React from 'react'
import Link from 'next/link'
import {signOut} from "firebase/auth"
import {auth} from "../context/firebase"
import { useRouter } from 'next/router';


function HeaderSmall() {
    const router = useRouter(); 

  return (
    <div className='bg-white h-[70px]'>
        <div className='flex flex-col justify-center h-full pb-[10px]'>
            <div className='flex justify-between'>
            <div className='left-element'>
                <div className='mt-[10px] right-element w-[400px] text-lg'>
                    <div className='flex mr-[20px] ml-[20px]'>
                    <button className='font-medium px-[10px] py-[5px] mr-[20px] rounded-lg hover:bg-gray-100' onClick={()=>{router.push('/events');}}>
                        Events
                    </button>
                    <button className='font-medium px-[10px] py-[5px] mr-[20px] rounded-lg hover:bg-gray-100' onClick={()=>{router.push('/programs');}}>
                        Programs
                    </button>
                    <button className='font-medium px-[10px] py-[5px] mr-[20px] rounded-lg hover:bg-gray-100' onClick={()=>{router.push('/dashboard');}}>
                        Messaging
                    </button>
                    </div>
                </div>
            </div>
            <div className='mt-[10px] mr-[20px] right-element text-lg'>
                <div className='px-[10px] py-[5px] rounded-lg hover:bg-gray-100'>
                    <button onClick={()=>{router.push('/'); signOut(auth);}}>
                        Logout
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderSmall