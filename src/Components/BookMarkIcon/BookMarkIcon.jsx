import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './BookMarkIcon.css';

const BookmarkIcon = ({ itemId, addToWishlist }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleClick = () => {
        addToWishlist(itemId);
        setIsBookmarked(!isBookmarked);
    };

    return (
        <Button onClick={handleClick} className='button-bookmark-icon'>
            <i className={`fa-solid fa-bookmark bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`}></i>
        </Button>
    );
};

export default BookmarkIcon;
