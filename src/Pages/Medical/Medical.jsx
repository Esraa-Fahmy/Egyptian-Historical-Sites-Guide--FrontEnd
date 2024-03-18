//import React from 'react'
import FirstSection from "../Pharonic/FirstSection"
import MedicalImage from '../../assets/images/medical-tourismjpg.webp'
import IframeComponentVideo from '../../Components/IframComponent/IframeComponent'
import CardSitesComponent from '../../Components/CardSitesComponent/CardSitesComponent'
import '../Pharonic/Pharonic.css'

import { useEffect, useState } from "react"
import axios from "axios"

export default function Medical() {
  const [medicalSites, setMedicalSites] = useState([]);

  const fetchMedicalSites = () => {
    axios.get("https://historical-sites.onrender.com/api/categories/65f406cd6a7f8b5aacbd0144/sites")
      .then((response) => {
        setMedicalSites(response.data.data); // Set category to response.data.data
      })
      .catch((error) => {
        console.error('Error fetching medical sites:', error);
      });
  };

  useEffect(() => {
    fetchMedicalSites();
  }, []);
  return (
    <>
    <FirstSection
      title="MEDICAL"
      subTitle="Medical Tourism"
      description=" is a way to seek healing and retrieve your soul.  lands and waters of Egypt are famous for their powers and for providing unconventional treatment. It is known that Egypt occupies a very important position in “Therapeutic Tourism” throughout the world"
      image={MedicalImage}
      customStyle="custom-style-medical"
    />
      <h4 className=" text-center mt-5 header-section" style={{ color:"#0c5555",fontSize:"2rem",
    fontFamily: 'Minion Pro Bold Condensed'}} >PLACES</h4>

     <CardSitesComponent
        data={medicalSites}
        enableHover={false}
        hoverStyle="subCategoriesStyle"
        showIcons={true}
        enableClick={true}
        gridClass={4}
        itemsPerPage={3}
        showPagination={true}
      />
       <h4 className=" text-center mt-5 mb-5 header-section" style={{ color:"#0c5555",fontSize:"2rem",fontFamily: 'Minion Pro Bold Condensed'}} >OVERVIEW</h4>
      <IframeComponentVideo videoId={"7jueDOqvkE8"} />
    </>
  )
}
