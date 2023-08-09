import React, { useState } from 'react'

function User({first_name, last_name, color}) {


    if (color == 'red') {
        return ( 
            <div className='flex px-[10px] py-[20px] border-b-2 border-gray-100 hover:bg-gray-100 cursor-pointer'>
                <div className={`w-[40px] h-[40px] text-[15px] bg-red-300 rounded-full flex justify-center items-center text-white`}>
                    {first_name[0].toUpperCase()} {last_name[0].toUpperCase()}
                </div>
                <div className='ml-[20px] flex flex-col justify-center text-[20px] text-gray-500'>
                    {first_name} {last_name}
                </div>
            </div>
        )
    } else if (color == 'blue') {
        return (
            <div className='flex px-[10px] py-[20px] border-b-2 border-gray-100 hover:bg-gray-100 cursor-pointer'>
                <div className={`w-[40px] h-[40px] text-[15px] bg-blue-300 rounded-full flex justify-center items-center text-white`}>
                    {first_name[0].toUpperCase()} {last_name[0].toUpperCase()}
                </div>
                <div className='ml-[20px] flex flex-col justify-center text-[20px] text-gray-500'>
                    {first_name} {last_name}
                </div>
            </div>
        )
    } else if (color == 'green') {
        return (
            <div className='flex px-[10px] py-[20px] border-b-2 border-gray-100 hover:bg-gray-100 cursor-pointer'>
                <div className={`w-[40px] h-[40px] text-[15px] bg-green-300 rounded-full flex justify-center items-center text-white`}>
                    {first_name[0].toUpperCase()} {last_name[0].toUpperCase()}
                </div>
                <div className='ml-[20px] flex flex-col justify-center text-[20px] text-gray-500'>
                    {first_name} {last_name}
                </div>
            </div>
        )
    } else {
        return (
            <div className='flex px-[10px] py-[20px] border-b-2 border-gray-100 hover:bg-gray-100 cursor-pointer'>
                <div className={`w-[40px] h-[40px] text-[15px] bg-yellow-300 rounded-full flex justify-center items-center text-white`}>
                    {first_name[0].toUpperCase()} {last_name[0].toUpperCase()}
                </div>
                <div className='ml-[20px] flex flex-col justify-center text-[20px] text-gray-500'>
                    {first_name} {last_name}
                </div>
            </div>
        )
    }
}

export default User






