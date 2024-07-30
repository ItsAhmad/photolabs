import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

/*
Component to build function for the Like Button that appears on photos
*/

function PhotoFavButton({ isLiked, toggleLike, photoId }) {
  return (
    <div className={`photo-list__fav-icon`} onClick={() => toggleLike(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked(photoId)}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;
