import * as actionTypes from "../actionTypes";
import axios from "axios";

export const login = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/users/login",
        user
      );
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: {
          data: res.data,
          isSuccuss: true,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: {
          error: error,
          isSuccuss: false,
        },
      });
    }
  };
};
