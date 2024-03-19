//import React from 'react'

//                        CommonSection.jsx in all categories 
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../Religious/Religious.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function FirstSection({ title, subTitle, description, image ,customStyle}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
       <div className='container' >
 <h1 className="mt-5 mb-5 titleSection" data-aos="fade-right">{title}</h1>
        <div className="row">
      <div className="container">
      <div className="row mb-5 justify-content-center align-items-center" data-aos="fade-left">
        <div className="col-sm-12 col-md-6 col-lg-6" >
          <h3 className="sideTitle mt-2 ">{subTitle}</h3>
          <h5 className="description mt-2  ">{description}</h5>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-0 text-center  ">
          <img className={customStyle}  src={image} alt="" />
        </div>
      </div>
      </div>
      </div>
    </div>
        
  
   
  )
}
