import React from 'react'

function Donate() {
  return (
        <div className="min-h-[400px] bg-yellow-300 pt-[40px]">
            <div className="ml-5 text-[20px] md:ml-20 font-bold">
            Donate
            </div>
            <div className="flex justify-center items-center border-red border-2
            bg-gray-200
            w-full max-w-[900px] h-[700px] rounded-2xl">
                <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
                <iframe src="https://donorbox.org/embed/the-black-stem-advocates-1" name="donorbox" 
                allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" 
                scrolling="no" height="900px" width="100%"></iframe>
            </div>

        </div>
  )
}

export default Donate