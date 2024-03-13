//import React from 'react'
import FirstSection from "../Pharonic/FirstSection"
import MedicalImage from '../../assets/images/medical-tourismjpg.webp'
import '../Pharonic/Pharonic.css'

export default function Medical() {
  return (
    <>
    <FirstSection
      title="MEDICAL"
      subTitle="Medical Tourism"
      description=" is a way to seek healing and retrieve your soul.  lands and waters of Egypt are famous for their powers and for providing unconventional treatment. It is known that Egypt occupies a very important position in “Therapeutic Tourism” throughout the world"
      image={MedicalImage}
      customStyle="custom-style-medical"
    />
    </>
  )
}
