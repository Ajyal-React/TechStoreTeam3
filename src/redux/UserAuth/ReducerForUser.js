import { SIGNUP_FOR_USER, LOGIN_FOR_USER } from "../UserAuth/TypesForUsers";

export const ReducerForUser = (state = "", action) => {
  switch (action.type) {
    case SIGNUP_FOR_USER:
      return action.payload;
    case LOGIN_FOR_USER:
      return action.payload;
    default:
      return state;
  }
};
