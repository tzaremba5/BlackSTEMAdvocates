import React from 'react'
import Image from 'next/image'


function People() {
  return (
    <div className=" min-h-[400px] pt-[40px] max-w-[900px]">
      <div className="text-[40px] font-bold ml-[20px]">
        Our Leader
      </div>
      <div className="ml-[100px] mb-[20px] text-[30px] md:ml-20 font-bold text-gray-900">
        Dr. Derick D. Jones Jr.
      </div>
      <div className="flex justify-center">
        <Image className="rounded-3xl" src="https://ucarecdn.com/02aeac0d-166f-498e-a248-9099922d1c67/derickTeaching.png" height='300px' width='300px'/>
      </div>
      <div className='flex flex-col md:md:flex-row items-start mt-[20px]'>
        <div className="flex-grow items-center justify-center text-[20px]
         mx-[30px] p-4 text-gray-500 bg-gray-100 rounded-2xl mb-[20px]">
          <div className="font-bold">
            Speaking and Appearences
          </div>
          For advocacy, In the work place, LGBTQIA+, Empowerment sessions or special keynote addresses.  Dr. Derick D. Jones Jr. gives motivational speeches to bring people together. Suitable for conferences, graduations and special events.         </div>
      </div>

      <div className='flex flex-col md:md:flex-row items-start mt-[20px]'>
        <div className="flex-grow items-center justify-center text-[20px]
         mx-[30px] p-4 text-gray-500 bg-gray-100 rounded-2xl mb-[20px]">
          <div className="font-bold">
            Consulting
          </div>
          Recruitment and retention  practices for under-served populations, Science and culture in the classroom and microbial pathogenicity expert.            </div>
      </div>

    </div>
  )
}

export default People