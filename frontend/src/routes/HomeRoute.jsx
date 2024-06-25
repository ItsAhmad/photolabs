import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ getAllPhotos, isLiked, toggleLike, photos, topics, getPhotosByTopic }) => {
  return (
    <div className="home-route">
      <TopNavigationBar getAllPhotos={getAllPhotos} topics={topics} getPhotosByTopic={getPhotosByTopic}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos}/>
    </div>
  );
};

export default HomeRoute;