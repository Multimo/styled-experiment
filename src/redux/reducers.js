import api from './api-reducer.js';
import theme from './theme-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  api,
  theme
});

export default rootReducer;