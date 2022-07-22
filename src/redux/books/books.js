import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ADDBOOK = 'bookstore/books/ADD_BOOK';
const REMOVEBOOK = 'bookstore/books/REMOVE_BOOK';
const GETBOOKS = 'bookstore/books/GET_BOOK';

const BASEURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ICdrMoc3QWfCoBTeaTuc/books/';

export const getBooks = createAsyncThunk(
  GETBOOKS,
  async () => {
    const initialBooks = [];
    const response = await fetch(BASEURL);
    const bookList = await response.json();
    Object.entries(bookList).forEach((book) => {
      initialBooks.push({ id: book[0], ...book[1][0] });
    });
    return (initialBooks);
  },
);

export const addBook = createAsyncThunk(
  ADDBOOK,
  async (book) => {
    await fetch(BASEURL, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {
      id: book.item_id, category: book.category, title: book.title, author: book.author,
    };
  },
);

export const removeBook = createAsyncThunk(
  REMOVEBOOK,
  async (id) => {
    const DELETEURL = BASEURL + id;
    await fetch(DELETEURL, {
      method: 'DELETE',
    });
    return id;
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => [...action.payload],
    [addBook.fulfilled]: (state, action) => [...state, action.payload],
    [removeBook.fulfilled]: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});
export default bookSlice.reducer;
