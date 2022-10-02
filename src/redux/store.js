import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';

import { filterSlice } from 'redux/filterSlice';
import { itemsSlice } from 'redux/itemsSlice';

const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: contactsReducer,
});

// VANILLA REDUX

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
