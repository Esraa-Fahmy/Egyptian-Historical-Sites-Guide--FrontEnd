//import React from 'react'
import Card from '../../Components/Card/Card'
import AdyanData from '../../Components/data/AdyanData'
import '../Pharonic/Pharonic.css'
import FirstSection from '../Pharonic/FirstSection';
import religiousImage from '../../assets/images/Layer-22.png'
export default function Religious() {
  return (
  
    <>
    <FirstSection 
      title="RELIGIOUS"
      subTitle="Religion Tourism"
      // description="One of the most important types of tourism including temples, statues, monuments, and more..."
      image={religiousImage}
      customStyle="custom-style-religious"
      description= "is one of the most important types of tourism that characterizes Egypt because it contains a third of the world's antiquities, including, temples, statues,and monuments dating back to multiple historical eras..Religious tourism is characterized by its effectiveness in expanding social meetings between tourists with the entire group and among the people of the country."
      />
      <Card  data={AdyanData} enableHover={false} showDescription={true}   />

    </>
  )
}
