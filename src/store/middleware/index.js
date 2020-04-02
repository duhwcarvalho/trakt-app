import { applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

import logger from './logger';

export default applyMiddleware(
  promise,
  logger
);
