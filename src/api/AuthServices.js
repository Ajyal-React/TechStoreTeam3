import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

//Login api
const authLoginPage = async (user) => {
  try {
    const response = await axios.post(API_URL + "users/login", user);
    return { isSuccess: true, data: response.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return { isError: true, errorMessage: message };
  }
};

const authSignUpPage = async (user) => {
  try {
    const response = await axios.post(API_URL + "/users/signup", user);
    return { isSuccess: true, data: response.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return { isError: true, errorMessage: message };
  }
};

const AuthServices = {
  authLoginPage,
  authSignUpPage,
};

export default AuthServices;
