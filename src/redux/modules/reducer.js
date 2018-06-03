import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import imagesGallery from './Gallery/imagesGallery';

const rootReducer = combineReducers({
  imagesGallery,
  form: formReducer,
});

export default rootReducer;
