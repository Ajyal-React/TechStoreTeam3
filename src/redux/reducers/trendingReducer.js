import * as actionTypes from "../actionTypes";

const trendingReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.TRENDING_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default trendingReducer;
