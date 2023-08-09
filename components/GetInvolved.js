import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Image from 'next/image'

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
    <div className="pt-[40px] pb-[60px]">
      <div className="border border-gray-500 border-dotted h-[2px] mb-[30px]"/>
      <div className="flex justify-center">
        <div className="">
          <div className="text-[30px] font-bold ml-1/3">
            Join the Newsletter
          </div>
          <div className="w-[500px]">
            <div className="flex rounded-sm">
                <div className="w-full flex mt-5 flex-col lg:flex-row">
                    <input
                      className="w-3/4 bg-transparent appearance-none mb-2 lg:mb-0 border-4 border-gray-900 rounded py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:border-gray-600"
                      type="text"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className={`flex hover:bg-gray-100 justify-center border-4 border-gray-900 lg:ml-2 bg-brand2 focus:shadow-outline focus:outline-none text-center font-bold py-2 px-4 rounded ${
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
                    <p className=" mt-2 text-red-600">{errorMessage}</p>
                )}
                {state === "SUCCESS" && (
                    <p className="mt-2 text-green-600">Success!</p>
                )}
            </div>
          </div>
        </div> 
        <div>
          <div className="w-[400px] pt-[35px] ml-[100px]">
            <div className="flex justify-between mt-[30px] flex justify-around max-w-[500px]">
              <div className="cursor-pointer hover:text-gray-700"> 
                <a href='https://www.instagram.com/derick_devon/' target='_blank'>
                  <Image src="https://ucarecdn.com/7f2e0f09-a461-44fe-a68e-2c5c00c40b82/instagram.png" width={45} height={45}/>
                </a>
              </div>
              <div className="cursor-pointer hover:text-gray-700"> 
                <a href='https://twitter.com/Derick_Devon'  target='_blank'>
                  <Image src="https://ucarecdn.com/e3a1e0a1-7beb-4f59-a5e2-d0d06a2ef6e4/twitter.png" width={45} height={45}/>
                </a>
              </div>
              <div className="cursor-pointer hover:text-gray-700"> 
                <a href='https://www.youtube.com/derickjones'  target='_blank'>
                  <Image src="https://ucarecdn.com/11b66b00-a6ca-4549-b029-808e46ba8c39/facebook.png" width={45} height={45}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};