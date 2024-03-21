//import React from 'react';
import axios from 'axios';
import './ExistReview.css'
import { useState, useEffect } from 'react';
import { baseUrl } from '../../utils/baseUrl';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
export default function ExistReview() {
  const [userReviews, setUserReviews] = useState([]);
  let {id}=useParams()
  const getAllUsersReviews = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/sites/${id}/reviews`);
      setUserReviews(data.data);
    } catch (error) {
      console.error('Error fetching user reviews:', error);
    }
  }

  useEffect(() => {
    getAllUsersReviews();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    }
    return stars;
  };

  return (
    <div className="container mt-5 py-5">
      <h3 className='titleUsers text-center my-3'>Users Review</h3>
        <div className="row">
        {userReviews.map((review, index) => (
          <div className='my-2 col-md-3 'key={index}>
            <div className=' d-flex  justify-content-center'>
              <BsPersonCircle size={40}/></div>
          <img className='w-100' src={review.image?.[0]} alt=""/>
         <div className=''>
         <div className="d-flex justify-content-between  col-md-12 ">
          <div ><h6 className='userName mx-1'>{review.user?.name}</h6></div>
          <div className=''><p className='mx-1 userName'>{renderStars(review.ratings)}</p></div>
          </div>
          {/* <p className='px-1'>{review.name}</p> */}
         </div>
          </div>
      ))}
        </div>
    </div>
  );
}
