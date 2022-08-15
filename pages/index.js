import Link from 'next/link';
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
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>Pastros | Typ00e Text Animate Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageHeader/>
      <div className="flex justify-center bg-gradient-to-b from-gray-200 to-yellow-300">
          <div className="">
            <main className="justify-center grid gap-3 md:grid-cols-2 mb-3">
              <HomePageCard title={"Our Mission"} link={"/mission"}/>
              <HomePageCard title={"Our People"} link={"/people"}/>
            </main>

            <main className="justify-center grid gap-3 md:grid-cols-2">
              <HomePageCard title={"Get Involved"} link={"/getInvolved"}/>
              <HomePageCard title={"Donete"} link={"/donate"}/>
            </main>
          </div>
      </div>
      <Mission/>
      <People/>
      <GetInvolved/>
      <Donate/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
