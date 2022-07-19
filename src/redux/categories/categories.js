const CHECKCATEGORIES = 'bookstore/categories/CHECK_CATEGORIES';

export const checkcategories = {
  type: CHECKCATEGORIES,
  id: 0,
};

const initialState = [];

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKCATEGORIES:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};
export default checkReducer;
