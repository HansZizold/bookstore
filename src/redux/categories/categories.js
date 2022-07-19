const CHECKCATEGORIES = 'bookstore/src/redux/categories/CHECK_CATEGORIES';

export const checkcategories = {
  type: CHECKCATEGORIES,
  id: 0,
};

const checkReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKCATEGORIES:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};
export default checkReducer;
