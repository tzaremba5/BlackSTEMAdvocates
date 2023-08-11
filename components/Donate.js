import React, {useState} from 'react'

function Donate() {

  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center mt-[50px] mx-[50px]">
      <div className='w-full max-w-[700px]'>
        <div className="text-xl font-bold mb-4">
          Donate
        </div>
          <form onSubmit={handleSubmit}>
              <label htmlFor="amount" className="block font-medium">
                  What would you like to donate?
              </label>
              <input type="amount" placeholder="$ Donation Amount" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>

              <button className="bg-black text-white rounded-md px-4 py-2 mt-2 w-full hover:bg-gray-800">
                  Donate
              </button>
          </form>
      </div>
    </div>
  )
}

export default Donate