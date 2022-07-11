import * as actionTypes from "../actionTypes";

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FEATURED_CATEGORIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
