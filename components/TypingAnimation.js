import React from 'react'
import Typical from 'react-typical';

function TypingAnimation() {
  return (
    <div className="flex justify-center pt-[20px] pb-[100px]">
        <div className="flex-col font-mono flex text-[35px]">
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
  )
}

export default TypingAnimation