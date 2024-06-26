import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';


const PhotoDetailsModal = ({ photo, similarPhotos, closeModal }) => {
  if (!photo) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <img src={photo.urls.regular} alt={photo.location} className="modal-photo" />
        <div className="modal-details">
          <h2>{photo.user.username}</h2>
          <p>{photo.location}</p>
        </div>
        <div className="similar-photos">
          <h3>Similar Photos</h3>
          <div className="similar-photos-list">
            {similarPhotos.map(similarPhoto => (
              <img 
                key={similarPhoto.id} 
                src={similarPhoto.urls.thumb} 
                alt={similarPhoto.location} 
                className="similar-photo"
                onClick={() => window.open(similarPhoto.urls.regular, '_blank')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
