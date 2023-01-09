import React from 'react'

function Donate() {
  return (
        <div className="min-h-[400px]pt-[40px]">
            <div className="ml-5 text-[30px] md:ml-20 font-bold">
            Donate
            </div>
            <div className='flex justify-center'>
              <div className="bg-white w-[400px]">
                <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe 
                  src="https://donorbox.org/embed/the-black-stem-advocates-1" name="donorbox" 
                  allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" 
                  scrolling="no" height="" width="100%"></iframe>
              </div>
            </div>
        </div>
  )
}

export default Donate