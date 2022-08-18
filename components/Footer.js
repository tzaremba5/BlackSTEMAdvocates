import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className="flex justify-center bg-yellow-300 space-x-20
    pb-[30px] pt-[30px]">
      <div className="flex justify-around w-1/2 max-w-[500px]">
        <div className="cursor-pointer hover:text-gray-700"> 
            <Image src="/../public/instagram.png" width={30} height={30}/>
        </div>
        <div className="cursor-pointer hover:text-gray-700"> 
          <Image src="/../public/facebook.png" width={30} height={30}/>
        </div>
        <div className="cursor-pointer hover:text-gray-700"> 
          <Image src="/../public/twitter.png" width={30} height={30}/>
        </div>
      </div>
    </div>
  )
}

export default Footer