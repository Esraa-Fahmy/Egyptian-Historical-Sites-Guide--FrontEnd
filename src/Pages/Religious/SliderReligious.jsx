import { Carousel, Container } from 'react-bootstrap';
import './Religious.css'; 
import FirstSection from './FirstSection';


import img1 from '../../assets/images/Al-Azhar Mosque الجامع الأزهر, al-Jāmiʿ al-ʾAzhar Mosque Location_ al qahirah ,misr(cairo ,Egypt).jpg';
import img2 from '../../assets/images/WhatsApp Image 2024-02-10 at 19.14.55.jpeg';
import img3 from '../../assets/images/WhatsApp Image 2024-01-27 at 15.03.48.jpeg';
import img4 from '../../assets/images/WhatsApp Image 2024-01-27 at 15.03.24.jpeg';
const images = [
    { src: img1, alt: 'Al-Azhar Mosque', name: 'Al-Azhar Mosque' },
    { src: img2, alt: 'Al-Hossan', name: 'Al-Hossan' },
    { src: img3, alt: 'Al-Hossan', name: 'Al-Hossan' },
    { src: img4, alt: 'Al-Hossan', name: 'Al-Hossan' },
  ];
  

export default function Religious() {
    return (
      <>
      <FirstSection/>
        <Carousel>
          
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Container>
                <h2>{image.title}</h2>
              <div className="row ">
             
                <div className="col-md-5 col-sm-12">
                  <div className="divImg">
                    
                    {/* <img src={`${image.img}${index}`} alt={image.alt} /> */}
                    <img className="pb-2" src={image.src} alt={image.alt} />
                    <div className="nameImg">
                      <p className="text-center">{image.name}</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                  <div className="d-flex mt-2">
                    <div className="col-md-12 pe-1 md-sm-12 ">
                      <div className="divImg">
                        {/* <img className="pb-2" src={image.src.img2} alt={image.src.alt} /> */}
                        <img className="pb-2" src={image.src} alt={image.alt} />
                        <div>
                          <p className="nameImg text-center">{image.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 ps-1 md-sm-12">
                      <div className="divImg">
                        {/* <img className="pb-2" src={image.src.img3} alt={image.src.alt} /> */}
                        <img className="pb-2" src={image.src} alt={image.alt} />
                        <div>
                          <p className="nameImg text-center">{image.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
                </div>
                <div className="divImg col-md-4 col-sm-12 mb-2">
                  {/* <img className="secondImg" src={image.src.img4} alt={image.alt}/> */}
                  <img className="pb-2" src={image.src} alt={image.alt} />
                  <div >
                    <p className="nameImg text-center">{image.name}</p>
                  </div>
                  
                </div>
                  <div className=" col-md-3 col-sm-12 mb-2">
               <div className="divImg">
                {/* <img className="" src={image.src.img5} alt={image.alt}/> */}
                <img className="pb-2" src={image.src} alt={image.alt} />
                <div >
                  <p className="nameImg text-center">{image.name}</p>
                </div>
               </div>
                <div className="divImg col-md-12">
                  {/* <img className="pt-2" src={image.src.img6} alt={image.alt}/> */}
                  <img className="pb-2" src={image.src} alt={image.alt} />
                  <div >
                    <p className="nameImg text-center">{image.name}</p>
                  </div>
                </div>
              </div>
            
              </div>
              </Container>
            </Carousel.Item>
          ))}
         
        </Carousel>
      </>
    );
  }