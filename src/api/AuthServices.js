import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

//Login api
const authLoginPage = async (email , password) => {
  try {
    const response = await axios.post(API_URL + "users/login", {
      email,
      password,
    });
    return { isSuccess: true, data: response.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return { isError: true, errorMessage: message };
  }
};

const authSignUpPage = async (email, password, confirmPassword) => {
  try {
    const response = await axios.post(API_URL + "users/signup", {
      email,
      password,
      confirmPassword,
    });
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
