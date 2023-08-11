import React from 'react'

function Event({event_name, event_description}) {
  return (
    <div className='rounded-xl bg-gray-100 px-[10px] py-[10px]'>
        <div className='text-md font-medium'>
            {event_name}
        </div>
        <div className='text-md font-light'>
            {event_description}
        </div>
        <div className='flex justify-end'>
            <div className='text-md text-indigo-500 cursor-pointer'>
                Link
            </div>
        </div>
    </div>
  )
}

export default Event