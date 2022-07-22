import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers(
  {
    books: bookSlice,
    categories: checkReducer,
  },
);

const store = configureStore({ reducer });

export default store;
