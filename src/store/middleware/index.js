import { applyMiddleware } from 'redux';

import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';

import logger from './logger';

export default applyMiddleware(
  thunk,
  promise,
  logger
);
