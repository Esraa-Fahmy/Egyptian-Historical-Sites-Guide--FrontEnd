import React from 'react'
import FirstSection from '../Pharonic/FirstSection'
import Flag from '../../assets/images/flag.png'
import './About.css'
import AboutSectionComponents from '../../Components/AboutSectionsComponent/AboutSectionComponents'
function About() {
  return (
    <div>
      <FirstSection
      title="KEMET"
      subTitle="EGYPT"
      description=" is a transcontinental country, as it is located in northeastern Africa, and at the same time it has an Asian extension, represented by the Sinai Peninsula. The Nile River flows from it, the lifeline for the people of Egypt. Egypt is the meeting place for cultural interaction between East and West, and between North and South."
      image={Flag}
      customStyle="Egypt-flag"      
      />
      <h4 className=" text-center mt-5 mb-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>GOVERNORATES OF EGYPT</h4>
      <h4 className=" text-center mt-5 mb-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>ASWAN</h4>

      <AboutSectionComponents videoId="Ypr8JqHomw4" description="Aswan is considered the southern gateway to Egypt and is one of the dry cities, so it is one of the best and most beautiful places to camp there in the winter. Where there is tranquility, a picturesque view of the Nile River, a moderate climate and warm sun, the city also includes a number of tourist areas, including: the Nubia Museum, Philae Island, Abu Simbel, the obelisks, and the Kalabsha Temple."/>

    </div>
  )
}

export default About
