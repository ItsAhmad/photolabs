import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

/*
Component to retrieve details about multiple photo stored in our database
*/ 

const PhotoList = ({ isLiked, toggleLike, photos, showModal }) => {
  let photoArray = [];

  if (Array.isArray(photos)) {
    photoArray = photos;
  } else if (typeof photos === 'object') {
    photoArray = Object.values(photos);
  }

  return (
    <ul className="photo-list">
      {photoArray.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            key={photo.id} 
            isLiked={isLiked} 
            toggleLike={toggleLike} 
            photoId={photo.id} 
            photo={photo} 
            showModal={() => showModal(photo)} 
          />
        </li>
      ))}
    </ul>
  );
};


export default PhotoList;

