import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isLiked, toggleLike, openModal }) => {
  
  return (
    <div className="photo-list__item">
      <img src={photo.urls.regular} alt={photo.location} onClick={() => openModal(photo)} />
      <PhotoFavButton photoId={photo.id} isLiked={isLiked} toggleLike={toggleLike} />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt={photo.user.username} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

