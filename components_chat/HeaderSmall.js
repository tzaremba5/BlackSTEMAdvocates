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
                <div className='mt-[10px] right-element w-[400px] text-[20px]'>
                    <div className='flex mr-[20px] ml-[20px]'>
                    <Link href="/SignUp">
                        <button className='font-medium px-[10px] py-[5px] mr-[20px] rounded-lg hover:bg-gray-100'>
                            Events
                        </button>
                    </Link>
                    <Link href="/SignUp">
                        <button className='font-medium px-[10px] py-[5px] mr-[20px] rounded-lg hover:bg-gray-100'>
                            Programs
                        </button>
                    </Link>
                    <Link href="/Login">
                        <button className='font-medium px-[10px] py-[5px] mr-[20px] rounded-lg hover:bg-gray-100'>
                            Messaging
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            <div className='mt-[10px] mr-[20px] right-element text-[20px]'>
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