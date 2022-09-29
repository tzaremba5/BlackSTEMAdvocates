import React from 'react'

function Mission() {
  return (
    <div className="flex flex-col min-h-[400px] max-w-[900px]">
      <div className="ml-5 text-[40px] md:ml-20 font-bold">
        Our Mission
      </div>
      <div className="ml-[200px] mb-[20px] text-[30px] md:ml-20 font-bold text-yellow-500">
        Be the Change
      </div>
      <div class="flex-col justify-center max-w-4xl m-4 p-4 text-gray-800 bg-yellow-300 rounded-lg shadow">
          <div class="mb-2">
            <div class="text-3xl text-left text-gray-600">“</div>
            <p class="px-4 text-[25px] text-center text-gray-600">
              Your heart is worth every beat
            </p>
            <div class="h-3 text-3xl text-right text-gray-600 mb-[20px]">”</div>
            <div class="h-3 text-[15px]"> - Dr. Derick D. Jones JR. </div>
          </div>
        </div>
      <div className='flex flex-col md:md:flex-row items-start mt-[20px]'>
        <div className="flex-grow items-center justify-center text-[20px]
         mx-[30px] p-4 text-gray-500 bg-gray-100 rounded-2xl mb-[20px]">
          We host virtual workshops and webinars tailored to the academic, private, and corporate sectors. These workshops have been crafted by Dr. Jones, to be interactive, engaging, and thought-provoking. Workshops are also designed for Dr. Jones to travel to your city, and your institution to build community. Please contact us for more details. We will post more detail as we enter the middle part of July 2021. 
        </div>
      </div>

    </div>
  )
}

export default Mission
