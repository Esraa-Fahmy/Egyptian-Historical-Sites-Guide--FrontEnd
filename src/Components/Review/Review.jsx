import axios from 'axios';
import { useState } from 'react'; // Import useState hook
import { baseUrl } from '../../utils/baseUrl';
import { useParams } from 'react-router-dom';
import './Review.css';
import { FaStar } from 'react-icons/fa';

const Review = () => {
    let {id}=useParams()
  const [selectedImage, setselectedImage] = useState(null); // State for selected file
  const [ratings, setRatings] = useState(0); // State for ratings
  const [name, setName] = useState(''); // State for name
  const [showInputs, setShowInputs] = useState(false); // State for visibility of inputs
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [hover, setHover] = useState(null); // State for hover

  const fileUpLoadHandler = () => {
    if (!ratings || (!selectedImage && !name)) {
      setErrorMessage('Please Enter the Rating then comment');
      return;
    }

    let dataToSend;
    if (selectedImage) {
      const fd = new FormData();
      fd.append('image', selectedImage, selectedImage.name);
      fd.append('ratings', ratings);
      fd.append('name', name);
      dataToSend = fd;
    } else {
      // Create a plain JavaScript object if no image is selected
      dataToSend = {
        ratings,
        name
      };
    }

    
    
    axios.post(`${baseUrl}/api/sites/${id}/reviews`, dataToSend)
      .then(res => {
        console.log(res);
        // Reset form state
        setselectedImage(null);
        setRatings(0);
        setName('');
        setShowInputs(false);
        setErrorMessage('');
        window.location.reload();
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };

  const fileSelectHandler = (event) => {
    setselectedImage(event.target.files[0]);
  };

  const handleRatingChange = (value) => {
    setRatings(value);
  };

  const handleCommentChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
  };

  const handleButtonClick = () => {
    setShowInputs(true);
  };

  return (
    <div className="container review-container my-3">
      <div>
        <div className="d-flex justify-content-center">
          <button className='btn rounded-5 submit' onClick={handleButtonClick}>Add Review</button>
          </div>
      </div>
      {showInputs && (
        <div className="review-form mt-5">
          <input type="file" name="" className="file-input form-control" onChange={fileSelectHandler} />
         <div className='text-center my-3'> 
         {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRatingChange(ratingValue)}
                />
                <FaStar
                  className="star"
                  size={30}
                  color={ratingValue <= (hover || ratings) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
         </div>
          {errorMessage && <div className="error-message btn">{errorMessage}</div>}
          <div className="form-floating">
  <textarea className="form-control my-2" 
  value={name.name}
  onChange={handleCommentChange}
   placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea" 
   onChange={handleCommentChange}>Comments</label>
</div>
          <button className="btn rounded-5 submit" onClick={fileUpLoadHandler}>
            Submit Review
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
