import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isLiked, toggleLike, openModal }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton isLiked={isLiked} toggleLike={toggleLike} photoId={photo.id} />
      <div className="photo-list__details" onClick={() => openModal(photo)}>
        <img src={photo.urls.regular} alt={photo.description} />
        <div className="photo-list__user-info">
          <span>{photo.user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

