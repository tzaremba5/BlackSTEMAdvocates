// import React from 'react'
// import SignUpForm from './SignUpForm'

// function GetInvolved() {
//   return (
//         <div className="min-h-[400px]pt-[40px]">
//             <div className="ml-5 md:ml-20 text-[20px] font-bold">
//             Get Involved
//             </div>
//             <div className="flex justify-end">
//                 <div className="flex justify-center
//                 border-4 border-gray-900
//                 w-full h-[300px]
//                 mt-[20px] pt-[40px]
//                 text-gray-900 text-[20px] font-bold
//                 md:w-[900px] md:rounded-2xl lg:ml-[30px]">
//                     Join Mentor Network
//                     <form>


//                     </form>
//                 </div>
//             </div>
//             <div className="flex justify-center
//             border-4 border-gray-900
//             w-full h-[300px]
//             mt-[20px] pt-[40px]
//             text-gray-900 text-[20px] font-bold
//             md:w-[900px] md:rounded-2xl lg:ml-[30px]">
//                 Join Student Network
//             </div>
//         </div>  
//     )
// }

import { useState } from "react";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className=" min-h-[400px]pt-[40px]">
        <div className="ml-5 md:ml-20 text-[20px] font-bold">
        Get Involved
        </div>
        <div className="flex flex-col items-center w-full p-8 border-gray-900 border-4 rounded-sm">
            <div className="flex w-1/2 lg:w-2/3 justify-center mt-5 flex-col lg:flex-row">
                <input
                className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border-4 border-gray-900 rounded py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:border-gray-600"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button
                className={`flex justify-center border-4 border-gray-900 lg:ml-2 w-full lg:w-1/3 bg-brand2 focus:shadow-outline focus:outline-none text-center font-bold py-2 px-4 rounded ${
                    state === "LOADING" ? "button-gradient-loading" : ""
                }`}
                type="button"
                disabled={state === "LOADING"}
                onClick={subscribe}
                >
                Subscribe
                </button>
            </div>
            {state === "ERROR" && (
                <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
            )}
            {state === "SUCCESS" && (
                <p className="w-1/2 mt-2 text-green-600">Success!</p>
            )}
        </div>
    </div>  

  );
};