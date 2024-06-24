import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ isLiked, toggleLike, photo }) => {
  return (
    <div className="photo-list__item">
      <div className="photo-container" style={{ position: 'relative' }}>
        <img src={photo.urls.regular} alt={`${photo.user.username}'s photo`} />
        <PhotoFavButton photoId={photo.id} isLiked={isLiked} toggleLike={toggleLike} />
      </div>
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
          <span>{photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
