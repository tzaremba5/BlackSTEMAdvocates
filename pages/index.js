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
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>BLACK STEM ADVOCATES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-yellow-300">
        <HomePageHeader/>
        <div className="flex justify-center bg-gradient-to-b from-yellow-300 to-white pb-[500px]">
            <div className="">
              <main className="justify-center grid gap-3 md:grid-cols-2 mb-3">
                <button onClick={handleClick1}>
                  <HomePageCard title={"Our Mission"}/>
                </button>
                <button onClick={handleClick2}>
                  <HomePageCard title={"Our Leader"} link={"/people"}/>
                </button>
              </main>

              <main className="justify-center grid gap-3 md:grid-cols-2">
                <button onClick={handleClick3}> 
                  <HomePageCard title={"Get Involved"} link={"/getInvolved"}/>
                </button>
                <button onClick={handleClick4}> 
                  <HomePageCard title={"Donete"} link={"/donate"}/>
                </button>
              </main>
            </div>
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-b 
        from-white
        to-yellow-300 
        via-white
        animate-gradient-x pb-[20px]">
        <div className="">
          <div className="" ref={ref1}>
            <Mission/>
          </div>
          <div ref={ref2} className="mb-[20px]">
            <People/>
          </div>
          <div ref={ref3} className="mb-[20px]">
            <GetInvolved/>
          </div>
          <div ref={ref4} className="mb-[20px]">
            <Donate/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
