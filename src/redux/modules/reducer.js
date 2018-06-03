import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import imagesGallery from './Gallery/imagesGallery';
import imageData from './Gallery/imageData';

const rootReducer = combineReducers({
  imagesGallery,
  imageData,
  form: formReducer,
});

export default rootReducer;
