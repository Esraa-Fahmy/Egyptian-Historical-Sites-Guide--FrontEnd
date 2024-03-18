//import React from 'react'
import Card from '../../Components/Card/Card'
import AdyanData from '../../Components/data/AdyanData'
import '../Pharonic/Pharonic.css'
import FirstSection from '../Pharonic/FirstSection';
import religiousImage from '../../assets/images/Layer-22.png'
import IframeComponent from '../../Components/IframComponent/IframeComponent'
import CardSitesComponent from '../../Components/CardSitesComponent/CardSitesComponent'
import { useEffect, useState } from 'react';


export default function Religious() {
const apiUrl="https://historical-sites.onrender.com/api/"
const subApiUrl="https://historical-sites.onrender.com/api/subCategories"
const ArrayOfReviews=["yikKIDittSc", "wamRCvVwi3A"]
  
const [subCategory, setSubCategory] = useState([]);
const fetchData = () => {
  fetch(`${subApiUrl}`)
    .then((res) => res.json())
    .then((data) => setSubCategory(data.data)) // Set category to data.data
    .catch((e) => console.log(e.message));
};

useEffect(() => {
  fetchData();
}, []);



const [islamicSites ,setIslamicSites] = useState([]);
const fetchDataIslamic =() =>{
  fetch(`${subApiUrl}/65f4563c9f7d074b3bd39c55/sites`)
  .then((res)=>res.json())
  .then((data)=>setIslamicSites(data.data))
  .catch((e)=>console.log(e.message))
}
useEffect(()=>{
  fetchDataIslamic()
},[])



const [cristianSites ,setcristianSites] = useState([]);
const fetchDatacristian =() =>{
  fetch(`${subApiUrl}/65f456749f7d074b3bd39c58/sites`)
  .then((res)=>res.json())
  .then((data)=>setcristianSites(data.data))
  .catch((e)=>console.log(e.message))
}
useEffect(()=>{
  fetchDatacristian()
},[])


const [jwishSites ,setjwishSites] = useState([]);
const fetchDatajwish =() =>{
  fetch(`${subApiUrl}/65f456a19f7d074b3bd39c5b/sites`)
  .then((res)=>res.json())
  .then((data)=>setjwishSites(data.data))
  .catch((e)=>console.log(e.message))
}
useEffect(()=>{
  fetchDatajwish()
},[])

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

<h4 className=" text-center mt-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>SUB CATEGORIES</h4>
      <Card
      data={subCategory} 
      enableHover={false} 
      showDescription={true}
       showText={true} 
      />

      <h4 className=" text-center mt-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>ISLAMIC</h4>
      <CardSitesComponent
      data={islamicSites}
      enableHover={false}
      hoverStyle="subCategoriesStyle"
      showIcons={true}
      enableClick={true}
      gridClass={4}
      itemsPerPage={3}
      showPagination={true}
      />


      <h4 className=" text-center mt-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>CHRISTIAN</h4>
      <CardSitesComponent 
      data={cristianSites}
      enableHover={false}
      hoverStyle="subCategoriesStyle"
      showIcons={true}
      enableClick={true}
      gridClass={4}
      itemsPerPage={3}
      showPagination={true}
      />
      <h4 className=" text-center mt-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>JWISH</h4>
      <CardSitesComponent 
      data={jwishSites}
      enableHover={false}
      hoverStyle="subCategoriesStyle"
      showIcons={true}
      enableClick={true}
      gridClass={4}
      itemsPerPage={3}
      showPagination={true}
      />
      <h4 className=" text-center mt-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>UNION</h4>
      <div className="text-center w-50 m-auto">
      <p style={{color: "#c67b2f ",marginTop: "2rem",fontSize:" 20px",}}>in the heart of the capital Cairo, Egypt has the area of religious istituation in which the monuments of three divin religion</p>
      </div>
      <Card 
      data={AdyanData}
      enableHover={false}
      showExploreButton={false}
      showDescription={true}
      hoverStyle={false}
      showIcons={false}
       />
<h4 className=" text-center mt-5 mb-5" style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>OVERVIEW</h4>
      
    <IframeComponent videoId="GgvS54sYr3E" />


    </>
  )
}
