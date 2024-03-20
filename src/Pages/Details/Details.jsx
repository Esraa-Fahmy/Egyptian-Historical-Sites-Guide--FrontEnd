import React from 'react'

function Details() {
  return (
    <div>
      Details
Details
    </div>
  )
}

export default Details


// import { useEffect, useState } from 'react'
// import axios from 'axios';
// // import './PlaceDetails.css';
// //import CommentBox from '../../Components/CommentBox/Comment.jsx';
// // import {baseUrl} from '../../utils/baseUrl.js'
// // import { useParams } from 'react-router-dom';
// import Slider from "react-slick";
// export default function PlaceDetail() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 4000,
//     };
//   //  let {id}=useParams()
//     const [place,setPlace] = useState([])
//     const getSite=async()=>{
//         let {data} = await axios.get("https://historical-sites.onrender.com/api/sites/65f4152f1a69b2142da6cc2f")
//         console.log(data.data);
//         setPlace(data.data)
//     }
//     useEffect(()=>{
//       getSite()
//     },[])
   
//   return (
//     <>
//     <div className="container">
//     <div className="row align-items-center mt-5 pt-5">
//       <div className="col-md-6 mb-3 ps-5">
//       <Slider {...settings}>
//        {/* {place && place.length > 0 && place.map((image,index)=> {
//        return<div key={index}>
//           <img src={image.images} alt="" />
//         </div>})} */}
//          {place.images.map((img)=>{
//             return <div>
//             <img src={img} className='border-rounded-1 p-1'/>
//             </div>
      
//          }
       
//        )
//        } 
//     </Slider>
//       </div>
    
//      <div className='col-md-6 col-ms-12  '>
//        <div className="d-flex justify-content-between ">
//        <h3 className='mb-4 details-title'>{place?.name}</h3>
//        <div  className='mb-4'>
//        <i className="fas fa-star text-warning"></i>
//         | {place.ratingQuantity}
//          </div>
//        </div>
//        <p className='details-des'>{place?.description}</p>
//      </div>
//     </div>
//     </div>
   
//     </>
//   )
// }