import { useEffect, useState } from 'react'
import axios from 'axios';
import './PlaceDetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {baseUrl} from '../../utils/baseUrl.js'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
export default function PlaceDetail() {
  useEffect(() => {
    AOS.init({duration: 1500,});
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    arrows:false
    };
   let {id}=useParams()
    const [place,setPlace] = useState([])
    const getSite=async()=>{
        let {data} = await axios.get(`${baseUrl}/api/sites/${id}`)
        console.log(data.data);
        setPlace(data.data)
    }
    useEffect(()=>{
      getSite()
    },[])
   
  return (
    <>
    <div className="container">
    <div className="row align-items-center mt-5 pt-5">
      <div className="col-md-12 mb-3 ps-5">
      <Slider {...settings}>
       {/* {place && place.length > 0 && place.map((image,index)=> {
       return<div key={index}>
          <img src={image.images} alt="" />
        </div>})} */}
         {/* {place.images.map((img ,index)=>
         <img key={index} src={img} className='border-rounded-1 img-slick p-1'/>)
       }  */}
    </Slider>
      </div>
    
    
     <div className='col-md-12 col-ms-12   '>
       <div className="d-flex justify-content-between ">
       <h3 className='mb-4 details-title px-5' data-aos="fade-down">{place?.name}</h3>
       <div  className='mb-4'data-aos="fade-down">
       <i className="fas fa-star text-warning"  ></i>
        | {place?.ratingAverage}
         </div>
       </div>
       <p className='details-des px-5' data-aos="fade-down">{place?.description}</p>
     </div>
    </div>
    </div>
   
    </>
  )
}
