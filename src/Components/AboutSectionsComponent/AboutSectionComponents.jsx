import React from 'react'
import IframeComponent from '../IframComponent/IframeComponent'

function AboutSectionComponents({videoId,description}) {
  return (
    <div className='container-fluid text-center'>
        <div className="row  mt-4 ms-4">
            <div className="col-lg-4 col-md-6 col-sm-12 " style={{color:"#c67b2f"}}>
                {description}
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 p-0 " >
                <IframeComponent videoId={videoId}  />
            </div>
        </div>
      
    </div>

    // <div className='d-flex justify-content-center align-items-center me-0 '>
    //     <div className='w-25'>
    //     {description}
    //     </div>
    //     <div className='w-100 overflow-hidden'>
    //     <IframeComponent videoId={videoId} style={{width:"100%"}}/>
    //     </div>
    // </div>
  )
}

export default AboutSectionComponents
