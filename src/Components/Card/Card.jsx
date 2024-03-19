

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { Button, Carousel } from "react-bootstrap";
import Aos from "aos";

function Card({
  data,
  enableHover,
  showExploreButton,
  hoverStyle,
  showIcons,
  gridClass,
  showText,
  showDescription,
  enableClick, 
}) 

{
  const dataRoute = [
    { route: "/pharonic" },
    { route: "/religious" },
    { route: "/medical" },
    { route: "/recreational" },  ];
console.log(data)

useEffect(() => {
  Aos.init({ duration: 2000 }); 
}, []); 

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className={`col-sm-12 col-md col-lg-${gridClass}`}>
            <div className="card mt-5" data-aos="fade-up">
              {showText && (
                <div>
                  <h5 className="text-center mb-3 CategoryName">{item.name}</h5>
                </div>
              )}
              <div className={`image ${enableHover ? hoverStyle : ""}`}>
                {item.image.length > 1 ? (
                  <Carousel style={{ height: "100%" }}>
                    {item.image.map((imag, imgIndex) => (
                      <Carousel.Item key={imgIndex}>
                        <img
                          style={{ objectFit: "fill", borderRadius: "10px" }}
                          height="300px"
                          className="d-block w-100 "
                          src={imag.imgURL}
                          alt={item.AlternativeText}
                        />
                    
                        
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                   <>
                 
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt={item.name}
                  />
                   </>
                )}

                
                {(enableHover && showExploreButton) && (
                 <>
                  <div className={`overLay ${hoverStyle}`}>
                  </div>
                  <div className="exploreBtn-div">
                 <Link to={dataRoute[index].route} className="btn exploreBtn">Explore</Link>
                  </div>
                 </>
                )}
                {(showIcons && hoverStyle) && (
                  <div className={`subCategoriesStyle ${hoverStyle}`}>
                    <p className="first-icon-p">
                      <i className="fa-solid fa-heart"></i>
                    </p>
                    <p>
                      <i className="fa-solid fa-bookmark"></i>
                    </p>
                    <p>
                      <i className="fa-regular fa-comment-dots"></i>
                    </p>
                  </div>
                )}
                {showDescription && (
                  <div className="card-body">
                    <h5 className="card-title text-center CategoryName">
                      {item.name}
                    </h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                )}
                {enableClick && (
                  <Button className="more-details-btton" onClick={() => handleClick(item)}>More details</Button>
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
