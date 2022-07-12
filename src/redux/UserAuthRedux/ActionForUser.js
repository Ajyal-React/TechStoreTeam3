import { LOGIN_FOR_USER, SIGNUP_FOR_USER } from "../UserAuthRedux/TypesForUsers";
import axios from "axios";

export const UserSignUpAction = (values) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/users/signup",
        values
      );
      localStorage.setItem("data", JSON.stringify(res.data));
      dispatch({
        type: LOGIN_FOR_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const UserLoginAction = (values) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/users/login",
        values
      );
      localStorage.setItem("data", JSON.stringify(res.data));
      dispatch({
        type: SIGNUP_FOR_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};


const ActionForUser = {
    UserLoginAction,
    UserSignUpAction,
  };
  
  export default ActionForUser;
