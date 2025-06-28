import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducer';
const {thunk} = require("redux-thunk");
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
