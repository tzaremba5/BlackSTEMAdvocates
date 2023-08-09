import React from 'react';
import Image from 'next/image';

function People() {
  return (
    <div className='flex content-center justify-center w-screen'>
      <div className="w-3/4 max-w-[700px] p-4 rounded-lg">
        <div className="mb-4 text-xl font-light text-gray-900">
          Dr. Derick D. Jones Jr.
        </div>
        <div className='flex justify-center'>
          {/* ...Image component or other content... */}
        </div>
        <div className='flex flex-col md:flex-row items-start mt-4'>
          <div className="flex-grow items-center justify-center text-xl font-light rounded-2xl mb-4 md:mb-0">
            <div className="font-bold text-lg">
              Speaking and Appearances
            </div>
            For advocacy, In the workplace, LGBTQIA+, Empowerment sessions, or special keynote addresses. Dr. Derick D. Jones Jr. gives motivational speeches to bring people together. Suitable for conferences, graduations, and special events.
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-start mt-4'>
          <div className="flex-grow items-center justify-center text-xl font-light rounded-2xl mb-4 md:mb-0">
            <div className="font-bold text-lg">
              Consulting
            </div>
            Recruitment and retention practices for under-served populations, Science and culture in the classroom, and microbial pathogenicity expert.
          </div>
        </div>
      </div>
    </div>
  )
}

export default People;
