import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { Carousel } from "react-bootstrap";
import 'aos/dist/aos.css';
import Aos from "aos";


function Card({ data, enableHover, showText, showDescription }) {
  useEffect(() => {
    Aos.init({ duration: 2000 }); 
  }, []);  
  return (
    <div className="container">
      <div className="row" >
        {data.map((item, index) => (
          <div key={index} className="col-md col-lg">
            <div className="card mt-5 mb-5" data-aos="fade-up">
              {showText && (
                <div>
                  <h5 className="text-center mb-3 CategoryName">{item.text}</h5>
                </div>
              )}
              <div className={`image ${enableHover ? "" : "disable-hover"}`}>
                {item.imageUrls.length > 1 ? (
                  <Carousel style={{ height: "100%" }}>
                    {item.imageUrls.map((image, imgIndex) => (
                      <Carousel.Item key={imgIndex}>
                        <img
                          style={{ objectFit: "fill", borderRadius: "10px" }}
                          height="300px"
                          className="d-block w-100 "
                          src={image.imgURL}
                          alt={item.AlternativeText}
                          
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <img
                    className="card-img-top"
                    src={item.imageUrls}
                    alt={item.text}
                  />
                )}
                <div
                  className={`overLay ${enableHover ? "" : "disable-hover"}`}
                  
                >


                </div>
                <div>
                
<Link
                    to={item.route}
                    // className="btn exploreBtn"
                    className={`btn exploreBtn ${enableHover ? "" : "disable-hover"}`}
                  >
                    Explore
                  </Link>
                </div>
                {showDescription && (
                  <div className="card-body">
                    <h5 className="card-title text-center CategoryName">
                      {item.title}
                    </h5>
                    <p className="card-text text-center ">{item.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
