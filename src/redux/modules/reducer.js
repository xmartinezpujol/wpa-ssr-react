import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cve from './Global/cve';

const rootReducer = combineReducers({
  cve,
  form: formReducer,
});

export default rootReducer;
