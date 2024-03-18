//import React from 'react'
import Card from '../../Components/Card/Card'
import FindIn from '../../Components/FindIn/FindIn'
import KemetHome from '../../Components/KemetHome/KemetHome'
import VedioHome from '../../Components/VedioHome/VedioHome'
import dataCards from '../../Components/data/dataCards'
import Footer from '../../Components/Footer/Footer'
import { useEffect, useState } from 'react'

export default function Home() {

  const [category, setCategory] = useState([]);

  const fetchData = () => {
    fetch("https://historical-sites.onrender.com/api/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data)) // Set category to data.data
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <VedioHome/>
      <KemetHome/>
      <h4 className=" text-center mt-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>CATEGORIES</h4>
     <Card
       data={category}
       enableHover={true}
       hoverStyle="overlay"
       showExploreButton={true}
       showText={true}
       gridClass={3}
     />
   
 <FindIn/>




    </>
  )
}
