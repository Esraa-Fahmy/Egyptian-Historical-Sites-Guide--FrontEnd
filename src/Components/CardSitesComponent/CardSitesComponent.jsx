import React, { useState } from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";
import BookmarkIcon from "../BookMarkIcon/BookMarkIcon";

function CardSitesComponent({
  data,
  enableHover,
  hoverStyle,
  showIcons,
  gridClass,
  itemsPerPage,
  showPagination,
  enableClick,
}) {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleClick = (itemId) => {
        window.location.href = `/Details/${itemId}`;
    };

    const addToWishlist = async (itemId) => {
        try {
            const response = await axios.post('http://localhost:3000/api/wishlist', { itemId });
            if (response.status === 200) {
                console.log('Item added to wishlist');
            } else {
                console.error('Failed to add item to wishlist');
            }
        } catch (error) {
            console.error('Error adding item to wishlist:', error);
        }
    };

  return (
    <div className="container">
      <div className="row">
        {currentItems.map((item, index) => (
          <div key={index} className={`col-sm-12 col-md-12 col-lg-${gridClass}`}>
            <div className="card position-relative ">
                <p className="text-center SiteName">{item.name}</p>
              <div className={`image ${enableHover ? hoverStyle : ""}`}>
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt={item.name}
                  />
                {(showIcons && hoverStyle) && (
                  <div className={`subCategoriesStyle ${hoverStyle}`} >
                  
                    <p>
                      <BookmarkIcon itemId={item.siteId} addToWishlist={addToWishlist} />
                    </p>
                
                    {enableClick && (
                        <Button className="more-details-btton" onClick={() => handleClick(item.siteId)}>More details</Button>
                      )}
                  </div>
                   
                )}
              
            </div>
          </div>
          </div>
        ))}
      </div>
      {showPagination && (
        <nav >
          <ul className="pagination  d-flex justify-content-center align-items-center">
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
              <li key={i} className={`page-item ${i + 1 === currentPage ? "active" : ""}`}>
                <button onClick={() => paginate(i + 1)} className="page-link">
                {/* <i class="fa-solid fa-circle"></i> */}
                {i+1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
      
  
    </div>
  );
}

export default CardSitesComponent;
