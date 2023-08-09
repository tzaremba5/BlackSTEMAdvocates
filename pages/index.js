import Link from 'next/link';
import {useRef} from 'react';
import Head from 'next/head';
import { CakeIcon } from '@heroicons/react/solid';
import HomePageHeader from '../components/HomePageHeader';
import HomePageCard from '../components/HomePageCard';
import Footer from '../components/Footer'
import Mission from '../components/Mission';
import People from '../components/People';
import GetInvolved from '../components/GetInvolved';
import Donate from '../components/Donate';
import Newsletter from '../components/Newsletter';
import Carousel from '../components/Carousel';
import TypingAnimation from '../components/TypingAnimation';

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const handleClick1 = () => {
    ref1.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClick2 = () => {
    ref2.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClick3 = () => {
    ref3.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClick4 = () => {
    ref4.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="bg-white flex flex-col min-h-screen bg-white">
      <Head>
        <title>BLACK STEM ADVOCATES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <HomePageHeader/>
        <TypingAnimation/>
      </div>
      <Mission />
      <People />
      <div className="flex bg-gradient-to-b 
        animate-gradient-x">
        <div className="">
          <div className="" ref={ref1}>
          </div>
          <div ref={ref2} className="">
            
          </div>
          <div className='flex justify-center w-screen mt-[50px]'>
            <div className='w-2/3 max-w-[800px]'>
              <div className='text-xl font-bold mb-[20px]'>
                Testimonials
              </div>
              <div className='flex justify-center'>
                <div className='tablet:grid grid-cols-2 gap-2'>
                  <div className='w-[400px] shadow-md rounded-md mb-[20px] p-[20px] font-light'>
                    <div className='text-lg'>
                    "I have been to several conferences and seen many speakers in my life. Derick is truly amazing and incredibly talented. They are very passionate and believes in everything they says! And they are funny"
                    </div>
                    <div className='text-lg text-gray-400 mt-[10px] text-right'>
                      - Sid L
                    </div>
                  </div>
                  <div className='w-[400px] shadow-md rounded-md mb-[20px] p-[20px] font-light'>
                    <div className='text-lg'>
                    "I publicly Congratulate you! Derick Devon Jones Jr. , this is definitely a trend setter in our community! Y'all my first cousin earned a PhD in Medicinal Biochemistry! "
                    </div>
                    <div className='text-lg text-gray-400 mt-[35px] text-right'>
                      - Joshua J
                    </div>
                  </div>
                  <div className='w-[400px] shadow-md rounded-md mb-[20px] p-[20px] font-light'>
                    <div className='text-lg'>
                      "Let me take a moment to lift up my sib Derick Devon Jones Jr. and their amazing energy, radical love, and work. You are a blessing and an inspiration, and every moment spent with you and/or talking to you is a true gift. I am amazed and inspired by everything you do, and the genuine work you give to the world. You are so selfless, kind, and overall brilliant. I’m grateful every day to be in your corner and have you in mine."                    </div>
                    <div className='text-lg text-gray-400 mt-[30px] text-right'>
                      - Carter
                    </div>
                  </div>
                  <div className='w-[400px] shadow-md rounded-md mb-[20px] p-[20px] font-light'>
                    <div className='text-lg'>
                    "Dr.  Derick D. Jones, Jr. is one of the most passionate builders, I have ever had the opportunity to work with.  Every since meeting Derick, there has always been a feeling of someone having my back. Many times, I did not have to speak and Derick would say | I feel you and everything will work out. I have seen Derick's passion uplift people in the darkest times. Derick is what love is on earth."
                    </div>
                    <div className='text-lg text-gray-400 mt-[30px] text-right'>
                      - Anonymous
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div ref={ref3} className="">
            <GetInvolved/>
          </div>
        </div>
      </div>
    </div>
  );
}
