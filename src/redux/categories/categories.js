const CHECKCATEGORIES = 'bookstore/categories/CHECK_CATEGORIES';

export const checkcategories = (category) => ({
  type: CHECKCATEGORIES,
  payload: category,
});

const initialState = [];

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKCATEGORIES:
      return [action.payload];
    default:
      return state;
  }
};
export default checkReducer;
