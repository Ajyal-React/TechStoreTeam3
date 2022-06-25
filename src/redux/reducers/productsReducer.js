import * as actionTypes from "../actionTypes";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FEATURED_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
