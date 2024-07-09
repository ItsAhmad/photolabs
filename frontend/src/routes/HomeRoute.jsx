import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ getAllPhotos, isFavPhotoExist, isLiked, toggleLike, photos, topics, getPhotosByTopic, showModal }) => {
  return (
    <div className="home-route">
      <TopNavigationBar getAllPhotos={getAllPhotos} isFavPhotoExist={isFavPhotoExist} topics={topics} getPhotosByTopic={getPhotosByTopic}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal}/>
    </div>
  );
};

export default HomeRoute;