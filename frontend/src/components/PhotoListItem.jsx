import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item" key={id}>
      <img src={imageSource} alt={`${username}'s photo`} />
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
        <div className="user-info">
          <p className="username">{username}</p>
          <p className="location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
