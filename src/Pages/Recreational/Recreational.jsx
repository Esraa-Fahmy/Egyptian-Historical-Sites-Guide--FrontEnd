//import React from 'react'
import FirstSection from "../Pharonic/FirstSection";
import recreationalImage from '../../assets/images/TourismFun(3).jpg'
import './Recreational.css'
export default function Recreational() {
  return (
   <>
   <FirstSection
      title="RECREARTIONAL"
      subTitle="Recreational Tourism"
      description=" It is tourism whose goal is enjoyment and relaxation, where you take a vacation from the daily routine and the pressure and tension that accompanies it and move to another environment to experience different activities. Trips around the world vary in form and content, such as hiking, exploring, camping, and visiting theme parks.
      "
      image={recreationalImage} 
      customStyle="custom-style-Recreational"
    />
   </>
  )
}
