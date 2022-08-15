import React from 'react'
import SignUpForm from './SignUpForm'

function GetInvolved() {
  return (
        <div className="min-h-[400px] bg-yellow-300 pt-[40px]">
            <div className="ml-5 md:ml-20 text-[20px] font-bold">
            Get Involved
            </div>
            <div className="flex justify-end">
                <div className="flex justify-center
                border-2 border-gray-900
                w-[450px] h-[300px]
                mt-[20px] pt-[40px]
                text-gray-900 text-[20px] font-bold
                md:w-[900px] md:rounded-2xl lg:ml-[30px]">
                    Join Mentor Network
                    <form>
                        

                    </form>
                </div>
            </div>
            <div className="flex justify-center
            border-2 border-gray-900
            w-[450px] h-[300px]
            mt-[20px] pt-[40px]
            text-gray-900 text-[20px] font-bold
            md:w-[900px] md:rounded-2xl lg:ml-[30px]">
                Join Student Network
            </div>
        </div>  
    )
}

export default GetInvolved