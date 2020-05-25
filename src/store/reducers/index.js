import { combineReducers } from 'redux';

import user from './user';
import modalMessage from './modalMessage';

const reducers = {
  user,
  modalMessage
};

export default combineReducers(reducers);
