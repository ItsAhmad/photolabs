import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = ({ isLiked, toggleLike, hideModal, selectedPhoto }) => {
  const { id, urls, user, location, similar_photos } = selectedPhoto;
  return (
    <div className={`photo-details-modal`}>
      <button className="photo-details-modal__close-button" onClick={hideModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill={'#202124'} className="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton isLiked={isLiked} toggleLike={toggleLike} photoId={id}></PhotoFavButton>
        <img className="photo-details-modal__image" src={urls.regular} alt={`Image taken in ${location.city}, ${location.country}`}></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={user.profile} alt={`Profile for ${user.username}`}></img>
          <div className="photo-list__user-info">
            <span>{user.name}</span>
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={similar_photos}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
