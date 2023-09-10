/**
 * Main store function
 */
 import { createStore, applyMiddleware, compose, Store } from "redux"
 import {  rootReducer } from "./root-reducer"
 import thunk from 'redux-thunk';
 
 export const configureStore = (initialState = {}) => {
    const middleware = [thunk];
    
    const store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware)
      //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
    return store
  }