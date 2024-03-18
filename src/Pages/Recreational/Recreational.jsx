import FirstSection from "../Pharonic/FirstSection";
import recreationalImage from '../../assets/images/TourismFun(3).jpg'
import './Recreational.css'
import axios from "axios";
import { useEffect, useState } from "react";
import CardSitesComponent from "../../Components/CardSitesComponent/CardSitesComponent";
import IframeComponent from "../../Components/IframComponent/IframeComponent";
export default function Recreational() {
  const [recreationalSites, setRecreationalSites] = useState([]);

  const fetchDataRecreationalSites = () => {
    axios.get("https://historical-sites.onrender.com/api/categories/65f407bb6a7f8b5aacbd014c/sites")
      .then((response) => {
        setRecreationalSites(response.data.data); 
      })
      .catch((error) => {
        console.error('Error fetching recreational sites:', error);
      });
  };

  useEffect(() => {
    fetchDataRecreationalSites();
  }, []);
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
       <h4 className=" text-center mt-5 mb-5 header-section" style={{ color:"#0c5555",fontSize:"2rem",fontFamily: 'Minion Pro Bold Condensed'}} >PLACES</h4>

<CardSitesComponent
        data={recreationalSites}
        enableHover={false}
        hoverStyle="subCategoriesStyle"
        showIcons={true}
        enableClick={true}
        gridClass={4}
        itemsPerPage={3}
        showPagination={true}
      />
       <h4 className=" text-center mt-5 mb-5 header-section" style={{ color:"#0c5555",fontSize:"2rem",fontFamily: 'Minion Pro Bold Condensed'}} >OVERVIEW</h4>

      <IframeComponent videoId={"BAI9u-yX4-4"} />
   </>
  )
}
