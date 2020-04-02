import { createStore, combineReducers } from "redux";
import * as reducers from './reducers';
import middleware from './middleware';

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, middleware);

export default store;
