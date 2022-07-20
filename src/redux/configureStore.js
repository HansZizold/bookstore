import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = combineReducers(
  {
    books: bookReducer,
    categories: checkReducer,
  },
);

const store = configureStore({ reducer: rootReducer });

export default store;
