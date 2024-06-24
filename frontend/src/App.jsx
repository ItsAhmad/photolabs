import React, { useState, useCallback } from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import photos from './mocks/photos';

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState({});

  const isLiked = useCallback((photoId) => !!likedPhotos[photoId], [likedPhotos]);

  const toggleLike = useCallback((photoId) => {
    setLikedPhotos((prev) => ({
      ...prev,
      [photoId]: !prev[photoId],
    }));
  }, []);

  const displayedPhotos = Array.from({ length: 3 }, (_, index) => photos[index]);

  return (
    <div className="App">
      <PhotoList 
        photos={displayedPhotos} 
        isLiked={isLiked} 
        toggleLike={toggleLike} 
      />
    </div>
  );
};

export default App;
