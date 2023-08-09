import React from 'react';

function Mission() {
  return (
    <div className="flex content-center justify-center mb-[50px]">
      <div className='w-3/4 max-w-[800px] p-4 border-2 rounded-lg'>
        <div className="text-xl font-bold mb-4">
          Our Mission
        </div>
        <div className="text-lg font-light mb-6">
          Fighting for underrepresented STEM students, our mission is to create a more inclusive and equitable landscape within the fields of Science, Technology, Engineering, and Mathematics (STEM). We are dedicated to empowering and uplifting underrepresented individuals in STEM by providing them with the tools, resources, and support they need to succeed.
        </div>
        <div class="flex-col justify-center p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <div class="text-4xl text-left text-gray-600">“</div>
            <p class="px-4 text-xl text-center text-gray-600">
              Your heart is worth every beat
            </p>
            <div class="h-4 text-4xl text-right text-gray-600">”</div>
            <div class="text-xl"> - Dr. Derick D. Jones JR. </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission;
