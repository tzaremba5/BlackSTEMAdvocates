import React from 'react'

function ProgramCard({Title, Description, University, Location}) {
  return (
    <div className='border-2 border-black px-[20px] py-[10px] rounded-md w-[350px]'>
        <div className='text-lg font-bold'>
            {Title}
        </div>
        <div className='text-md mt-[20px]'>
            <div className='font-bold'>
                Description
            </div>
            {Description}
        </div>
        <div className='text-md mt-[20px]'>
            <div className='font-bold'>
                University
            </div>
            {University}
        </div>
        <div className='text-md mt-[20px]'>
            <div className='font-bold'>
                Location
            </div>
            {Location}
        </div>
        <div className='text-indigo-500 ext-md cursor-pointer mt-[10px]'>
            Link
        </div>
    </div>
  )
}

export default ProgramCard