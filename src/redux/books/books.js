const ADDBOOK = 'bookstore/books/ADD_BOOK';
const REMOVEBOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADDBOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVEBOOK,
  payload: id,
});

const initialState = [
  {
    id: 1,
    title: 'Redux',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Redux Toolkit',
    author: 'Author 2',
  },
  {
    id: 3,
    title: 'React-Redux',
    author: 'Author 3',
  },
];

const bookReducer = (state = initialState, action) => {
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
