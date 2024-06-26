import React from 'react';
import '../styles/PhotoList.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, isLiked, toggleLike, openModal }) => {
  return (
    <div className="photo-list__item" onClick={() => openModal(photo)}>
      <img src={photo.urls.regular} alt={photo.location} />
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