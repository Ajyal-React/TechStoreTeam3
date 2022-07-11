import * as actionTypes from "../actionTypes";

const offersReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.OFFERS_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default offersReducer;
