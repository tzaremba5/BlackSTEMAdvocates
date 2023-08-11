import React from 'react'
import HeaderSmall from '../components_chat/HeaderSmall'
import ProgramCard from '../components/ProgramCard'

function programs() {
  return (
    <div className='flex h-screen flex-col'>
        <HeaderSmall/>
        <div className='flex-1 pt-[20px] pb-[20px] bg-gray-100'>
          <div className='flex justify-center'>
              <div className='flex justify-center pt-[10px] pb-[50px] w-11/12 flex h-fit mt-[10px] shadow-lg rounded-md bg-white'>
                {/* grid of program cards */}
                <div className='grid tablet:grid-cols-3 gap-[20px]'>
                    <ProgramCard Title="Research Experiences for Undergraduates in Sustainable Chemistry and Catalysis" Description="Students have the opportunity to do research in any of the following areas: Inorganic Chemistry, Physical Chemistry, Biochemistry, Solid-State Science, Chemical Physics, Surface Chemistry, Organic Chemistry, Organometallic Chemistry, Materials Science, X-ray Diffraction, and others."
                    Location="Tempe, Arizona" University="Arizona State University"/>
                    <ProgramCard Title="Fundamental Research in Chemistry Addressing Problems in Biology" Description="Research chemistry, biochemistry, biomaterials, biophysics, bioinorganic chemistry, biological chemistry, computational biology"
                    Location="Boston, Massachusetts" University="Boston University"/>
                    <ProgramCard Title="Research Experiences for Undergraduates in Sustainable Chemistry and Catalysis" Description="Students have the opportunity to do research in any of the following areas: Inorganic Chemistry, Physical Chemistry, Biochemistry, Solid-State Science, Chemical Physics, Surface Chemistry, Organic Chemistry, Organometallic Chemistry, Materials Science, X-ray Diffraction, and others."
                    Location="Tempe, Arizona" University="Arizona State University"/>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default programs