import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className="flex justify-center bg-yellow-300 space-x-20
    pb-[30px] pt-[30px]">
      <div className="flex justify-around w-1/2 max-w-[500px]">
        <div className="cursor-pointer hover:text-gray-700"> 
            <Image src="https://ucarecdn.com/7f2e0f09-a461-44fe-a68e-2c5c00c40b82/instagram.png" width={30} height={30}/>
        </div>
        <div className="cursor-pointer hover:text-gray-700"> 
          <Image src="https://ucarecdn.com/e3a1e0a1-7beb-4f59-a5e2-d0d06a2ef6e4/twitter.png" width={30} height={30}/>
        </div>
        <div className="cursor-pointer hover:text-gray-700"> 
          <Image src="https://ucarecdn.com/11b66b00-a6ca-4549-b029-808e46ba8c39/facebook.png" width={30} height={30}/>
        </div>
      </div>
    </div>
  )
}

export default Footer