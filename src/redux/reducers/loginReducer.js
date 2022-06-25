import * as actionTypes from "../actionTypes";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;