import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ isLiked, toggleLike, photos, showModal }) => {
  // check if photos is an object
  if (typeof(photos) === 'object') {
    photos = Object.values(photos);
  } 

  const photoList = photos.map(photo => {
    return (
      <PhotoListItem key={photo.id} isLiked={isLiked} toggleLike={toggleLike} photoId={photo.id} photo={photo} showModal={() => showModal(photo)}/>
    );
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;