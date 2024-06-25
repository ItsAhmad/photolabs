import { useReducer, useEffect } from 'react';

const INITIAL_STATE = {
  likes: [],
  selectedPhoto: null,
  selectedTopic: null,
  modal: false,
  photoData: [],
  topicData: [],
  dark: ''
};

const ACTIONS = {
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE'
};

const getAllPhotos = () => {
  fetch(`/api/photos`)
    .then(res => res.json())
    .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }));
};

return {
  state,
  updateToFavPhotoIds,
  setPhotoSelected,
  getPhotosByTopic,
  getAllPhotos,
  onClosePhotoDetailsModal,
  setDark
};