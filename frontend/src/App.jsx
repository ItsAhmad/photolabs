import React, { useState, useCallback } from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics'
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [ topicData, modal] = useState({});

  const getPhotosByTopic = (topicId) => {
  
  };

  const isLiked = useCallback((photoId) => !!likedPhotos[photoId], [likedPhotos]);

  const toggleLike = useCallback((photoId) => {
    setLikedPhotos((prev) => ({
      ...prev,
      [photoId]: !prev[photoId],
    }));
  }, []);

  const displayedPhotos = Array.from({ length: 10 }, (_, index) => photos[index]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };


  return (
    <div className="App">
      <TopNavigationBar />
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <PhotoList 
        photos={displayedPhotos} 
        isLiked={isLiked} 
        toggleLike={toggleLike} 
        topics={topicData}
        openModal={openModal}
      />
         {selectedPhoto && (
        <PhotoDetailsModal
          showModal={!!selectedPhoto}
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
};

export default App;
