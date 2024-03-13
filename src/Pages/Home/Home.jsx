//import React from 'react'
import Card from '../../Components/Card/Card'
import FindIn from '../../Components/FindIn/FindIn'
import KemetHome from '../../Components/KemetHome/KemetHome'
import VedioHome from '../../Components/VedioHome/VedioHome'
import dataCards from '../../Components/data/dataCards'
import Footer from '../../Components/Footer/Footer'
export default function Home() {
  return (
    <>
    {/* this is finish just you will delete the comment  */}
      <VedioHome/>
      <KemetHome/>
      <h4 className=" text-center mt-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>CATEGORIES</h4>
      <Card data={dataCards} enableHover={true} showText={true}/>
      <FindIn/>
    </>
  )
}
