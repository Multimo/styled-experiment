import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger'

export default (initialState = {
     theme: {
        btnTheme: true,
  }
}) => {
  return createStore(rootReducer, initialState, applyMiddleware(logger));
};