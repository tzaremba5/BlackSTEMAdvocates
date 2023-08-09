import React from 'react'
import Logo from './Logo';
import Link from 'next/link'

function HomePageHeader() {

  return (
    <div className=''>
        <div className='flex justify-between'>
          <div className='left-element'>
            <Logo/>
          </div>
          <div className='mt-[10px] right-element w-[400px] text-[20px]'>
            <div className='flex justify-end mr-[20px]'>
              <Link href="/Login">
                <button className='px-[10px] py-[5px] rounded-lg hover:bg-gray-100 mr-[20px]'>
                  Login
                </button>
              </Link>
              <Link href="/SignUp">
                <button className='px-[10px] py-[5px] rounded-lg hover:bg-gray-100'>
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePageHeader