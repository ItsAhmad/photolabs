import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import photos from './mocks/photos'

const App = () => {
  const displayedPhotos = Array.from({ length: 3 }, (_, index) => photos[index]);

  return (
    <div className="App">
      {displayedPhotos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photoId={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
        />
      ))}
    </div>
  );
};

export default App;
