import React from 'react'
import Typical from 'react-typical';
import Logo from './Logo';


function HomePageHeader() {
  return (
    <div>
        <Logo/>
        <div className="px-4 py-20 flex flex-col">
          <div className="flex-col font-mono flex text-[20px]">
            <h4> Fighting for </h4>
            <strong className="w-full bg-white">
              <Typical
                steps={[
                  'bipoc',
                  1000,
                  'LGBTQIA+',
                  1000,
                  'underrepresnted',
                  1000
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
            <h4> STEM students </h4>
          </div>
        </div>
    </div>
  )
}

export default HomePageHeader