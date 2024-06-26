import React, { useState, useCallback } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const getPhotosByTopic = (topicId) => {

  };

  const isLiked = useCallback((photoId) => !!likedPhotos[photoId], [likedPhotos]);

  const toggleLike = useCallback((photoId) => {
    setLikedPhotos((prev) => ({
      ...prev,
      [photoId]: !prev[photoId],
    }));
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    const similarPhotosMock = photos.filter(p => p.id !== photo.id).slice(0, 5);
    setSimilarPhotos(similarPhotosMock);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setSimilarPhotos([]);
  };

  const displayedPhotos = photos.slice(0, 10);

  return (
    <div className="App">
      <HomeRoute 
        getPhotosByTopic={getPhotosByTopic}
        isLiked={isLiked}
        toggleLike={toggleLike}
        photos={displayedPhotos}
        topics={topics}
        openModal={openModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={similarPhotos}
          closeModal={closeModal}
          isLiked={isLiked}
          toggleLike={toggleLike}
        />
      )}
    </div>
  );
};

export default App;