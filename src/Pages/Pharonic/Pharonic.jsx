//import React from 'react'

import { useEffect, useState } from 'react';
import CardSitesComponent from '../../Components/CardSitesComponent/CardSitesComponent';
import IframeComponent from '../../Components/IframComponent/IframeComponent';
import pharonicImage from '../../assets/images/phrons.png';


import FirstSection from "./FirstSection";
import axios from 'axios';

export default function Pharonic() {

  const [pharonicSites, setPharonicSites] = useState([]);

  const fetchPharonicSites = () => {
    axios.get("https://historical-sites.onrender.com/api/categories/65f405ac6a7f8b5aacbd0138/sites")
      .then((response) => {
        setPharonicSites(response.data.data); // Set category to response.data.data
      })
      .catch((error) => {
        console.error('Error fetching Pharonic sites:', error);
      });
  };

  useEffect(() => {
    fetchPharonicSites();
  }, []);
  return (<>
   <FirstSection
      title="PHARONIC"
      subTitle="Pharonic Tourism"
      // description="Egypt's monuments are characterized by the presence of pharaonic civilization. Egypt has monuments that have formed mines for millions of years."
      image={pharonicImage}
      customStyle="custom-style-Pharonic"
      description="Egypt is considered the main source of the Pharaonic civilization in the world, because of the antiquities it contains that have greatly contributed to shaping human history and beliefs. Egypt has great wealth, great culture, and important antiquities. It contains about a third of the world's antiquities, and its antiquities vary between partial, Greek, Coptic, and Islamic antiquities."
    />
      <h4 className=" text-center mt-5 mb-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>PLACES</h4>

<CardSitesComponent
        data={pharonicSites}
        enableHover={false}
        hoverStyle="subCategoriesStyle"
        showIcons={true}
        enableClick={true}
        gridClass={4}
        itemsPerPage={3}
        showPagination={true}
      />
      <h4 className=" text-center mt-5 mb-5 " style={{color:"#0c5555",fontSize:"2rem", fontFamily: 'Minion Pro Bold Condensed'}}>OVERVIEW</h4>
      <IframeComponent videoId={"7Pgdh-QkLrw"} />
  </>
  
  )
}
