import React from 'react';
import styles from '../pages/styles.module.css';
import Image from 'next/image'

function Platform() {
  return (
    <div className='mb-[30px]'>
    <div className='flex tablet:justify-center text-xl ml-[30px] tablet:ml-[100px] font-bold'>
        <div className=' tablet:min-w-[1350px] '>
            Our Platform
        </div>
    </div>
    <div className={styles['graph-paper']}> {/* Apply the scoped style */}
        <div className='flex justify-center'>
            <div className='tablet:min-w-[1350px] flex flex-col justify-between h-full py-[20px]'>
                <div className='flex flex-col tablet:flex-row mb-[50px]'>
                    <div className='tablet:h-[250px] max-w-[600px] text-lg mx-[30px] mb-[10px] bg-white rounded-lg p-4 shadow-md'>
                        1. Get matched with Black STEM Advocate Mentors
                        <div className='font-light'>
                            Embrace a journey of empowerment through our mentorship program. Connect with accomplished Black STEM Advocate mentors who are dedicated to helping you thrive. Experience personalized guidance, valuable connections, and insights that can shape your path in Science, Technology, Engineering, and Mathematics. Learn from those who've excelled in these fields and take confident strides towards your own success.
                        </div>
                    </div>
                    <div className='mt-[25px] tablet:mt-[50px] rounded-lg tablet:border-2 mx-[50px] tablet:mx-[0px]'>
                        <Image src="https://ucarecdn.com/ed09f4a6-85d8-4b8e-8beb-641d3077b282/chat.png" draggable="false" width={642} height={300}/>
                    </div>
                </div>
                <div className='flex justify-end content-end '>
                    <div className='flex flex-col-reverse tablet:flex-row mb-[50px]'>
                        <div className='mt-[25px] tablet:mt-[50px] rounded-lg tablet:border-2 mx-[50px] tablet:mx-[0px]'>
                            <Image src="https://ucarecdn.com/d9d4d0da-69d3-424f-ad5e-73bded6024cb/calendar.png" draggable="false" width={642} height={300}/>
                        </div>
                        <div className='tablet:h-[250px] max-w-[600px] text-lg mx-[30px] mb-[10px] bg-white rounded-lg p-4 shadow-md'>
                            2. Attend networking events
                            <div className='font-light max-w-[600px]'>
                                Join the excitement of our dynamic networking events, where you'll mingle with fellow STEM enthusiasts and experts. Connect authentically, share ideas, and build relationships that could ignite future collaborations and pathways to success. These events are your chance to be part of a thriving community that values knowledge exchange and meaningful connections.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col tablet:flex-row'>
                    <div className='tablet:h-[200px] flex-shrink-0 max-w-[600px] text-lg mx-[30px] mb-[10px] bg-white rounded-lg p-4 shadow-md'>
                        <div>
                            3. Apply to scholarships and research programs
                        </div>
                        <div className='font-light max-w-[600px]'>
                            Empower your aspirations by utilizing our platform to effortlessly apply for scholarships and research programs. Uncover pathways to funding and research opportunities tailored to your STEM journey. We're dedicated to providing you with the tools you need to access the resources that can fuel your academic and career pursuits
                        </div>
                    </div>
                    <div className='flex-shrink-0 rounded-lg tablet:border-2 mt-[25px] tablet:mt-[50px] mx-[50px] tablet:mx-[0px]'>
                        <Image src="https://ucarecdn.com/d4c87060-7114-4313-8e86-927d55d327b2/programs.png" draggable="false" width={642} height={300}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Platform;





