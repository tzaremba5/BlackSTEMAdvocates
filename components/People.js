import React from 'react'
import Image from 'next/image'


function People() {
  return (
    <div className='flex justify-center '>
      <div className="min-h-[400px] pt-[40px] w-2/3">
        <div className="text-[30px] font-bold">
          Our Leader
        </div>
        <div className="mb-[20px] text-[30px] font-bold text-gray-900">
          Dr. Derick D. Jones Jr.
        </div>
        <div className="flex justify-center">
        </div>
        <div className='flex flex-col md:md:flex-row items-start mt-[20px]'>
          <div className="flex-grow items-center justify-center text-[25px] font-light rounded-2xl mb-[20px]">
            <div className="font-bold">
              Speaking and Appearences
            </div>
            For advocacy, In the work place, LGBTQIA+, Empowerment sessions or special keynote addresses.  Dr. Derick D. Jones Jr. gives motivational speeches to bring people together. Suitable for conferences, graduations and special events.         </div>
        </div>

        <div className='flex flex-col md:md:flex-row items-start mt-[20px]'>
          <div className="flex-grow items-center justify-center text-[25px] font-light rounded-2xl mb-[20px]">
            <div className="font-bold">
              Consulting
            </div>
            Recruitment and retention  practices for under-served populations, Science and culture in the classroom and microbial pathogenicity expert.            </div>
        </div>
      </div>
    </div>

  )
}

export default People