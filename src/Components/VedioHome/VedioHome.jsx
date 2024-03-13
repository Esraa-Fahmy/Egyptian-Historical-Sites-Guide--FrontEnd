//import React from 'react'
import vedioBg from '../../assets/home-Vedio/video.mp4'
import Button from 'react-bootstrap/Button';
import './VedioHome.css';
import { Link } from 'react-router-dom';
export default function VedioHome() {
  return (
   <>
   <div>
   <video autoPlay loop muted src={vedioBg}/>
      <div className="content">
        <h1 className='arch-word'>ARCHAEOLOGICAL</h1>
        <Link as={Link} to={'/Pharonic'}><Button className='Explore-button-video'>EXPLORE</Button></Link>
        {/* <Button className='Explore-button-video'>Explore</Button> */}
      </div>
   </div>
          </>
  )
}
