import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

/* 
Displays a badge on the favourites button, only if photos are liked by user
*/

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;
