import React from 'react'

function Footer() {
  return (
    <div className="flex space-x-20 justify-center pt-20 pb-20 bg-yellow-300">
        <div className="cursor-pointer hover:text-gray-700"> 
            Instagram
        </div>
        <div className="cursor-pointer hover:text-gray-700"> 
            Facebook
        </div>
        <div className="cursor-pointer hover:text-gray-700"> 
            Twitter
        </div>
    </div>
  )
}

export default Footer