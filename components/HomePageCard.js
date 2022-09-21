import React from 'react'

function HomePageCard({img, title}) {
  return (

    <div className="flex items-center justify-center 
    shadow-md rounded-lg bg-opacity-70
    border-4 border-gray-900
    w-[200px] h-[100px]
    text-gray-900 text-[15px]
    hover:bg-gray-900 hover:text-white hover:shadow-lg
    cursor-pointer">
        <h1 className="flex flex-grow font-bold font-mono justify-center">{title}</h1>
    </div>

  )
}

export default HomePageCard