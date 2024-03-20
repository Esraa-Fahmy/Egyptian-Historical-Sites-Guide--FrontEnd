// // import React, { useState } from 'react';
// // import { Button } from 'react-bootstrap';
// // import './BookMarkIcon.css';

// // const BookmarkIcon = ({ itemId, addToWishlist }) => {
// //     const [isBookmarked, setIsBookmarked] = useState(false);

// //     const handleClick = () => {
// //         addToWishlist(itemId);
// //         setIsBookmarked(!isBookmarked);
// //     };

// //     return (
// //         <Button onClick={handleClick} className='button-bookmark-icon'>
// //             <i className={`fa-solid fa-bookmark bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`}></i>
// //         </Button>
// //     );
// // };

// // export default BookmarkIcon;
// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import './BookMarkIcon.css';
// import axios from 'axios';

// const BookmarkIcon = ({ siteId }) => {
//     const [isBookmarked, setIsBookmarked] = useState(false);

//     const addToWishlist = async () => {
//         try {
//             await axios.post('https://historical-sites.onrender.com/api/wishlist', { siteId });
//             setIsBookmarked(true);
//         } catch (error) {
//             console.error('Error adding to wishlist:', error);
//         }
//     };

//     const removeFromWishlist = async () => {
//         try {
//             await axios.delete(`https://historical-sites.onrender.com/api/wishlist/${siteId}`);
//             setIsBookmarked(false);
//         } catch (error) {
//             console.error('Error removing from wishlist:', error);
//         }
//     };

//     const handleClick = () => {
//         if (isBookmarked) {
//             removeFromWishlist();
//         } else {
//             addToWishlist();
//         }
//     };

//     return (
//         <Button onClick={handleClick} className='button-bookmark-icon'>
//             <i className={`fa-solid fa-bookmark bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`}></i>
//         </Button>
//     );
// };

// export default BookmarkIcon;

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './BookMarkIcon.css';

const BookmarkIcon = ({ siteId, handleAddToWishlist, handleRemoveFromWishlist }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleClick = () => {
        if (isBookmarked) {
            handleRemoveFromWishlist(siteId);
        } else {
            handleAddToWishlist(siteId);
        }
        setIsBookmarked(!isBookmarked);
    };

    return (
        <Button onClick={handleClick} className='button-bookmark-icon'>
            <i className={`fa-solid fa-bookmark bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`}></i>
        </Button>
    );
};

export default BookmarkIcon;
