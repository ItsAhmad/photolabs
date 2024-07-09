import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ isLiked, toggleLike, photoId, photo, showModal }) => {
  const { urls, user, location } = photo;

  return (
    <div className={`photo-list__item`}>
      <PhotoFavButton isLiked={isLiked} toggleLike={toggleLike} photoId={photoId}></PhotoFavButton>
      <img className="photo-list__image" src={urls.regular} alt={`Image taken in ${location.city}, ${location.country}`} onClick={showModal}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile for ${user.username}`}></img>
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

