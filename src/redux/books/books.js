const ADDBOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/REMOVE_BOOK';

export const addBook = {
  type: ADDBOOK,
  id: 0,
  title: 'Book 0',
  author: 'Author 0',
};

export const removeBook = {
  type: REMOVEBOOK,
  id: 0,
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
export default bookReducer;
