import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, isLiked, toggleLike }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isLiked={isLiked}
          toggleLike={toggleLike}
        />
      ))}
    </div>
  );
};

export default PhotoList;