import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';


const PhotoDetailsModal = ({ photo, closeModal }) => {
  if (!photo) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <img src={photo.urls.regular} alt={photo.description} />
        <h2>{photo.user.name}</h2>
        <p>{photo.description}</p>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
