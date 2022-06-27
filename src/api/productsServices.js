import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
// const token = JSON.parse(localStorage.getItem("token"));

const getFeaturedProducts = async () => {
  try {
    const response = await axios.get(API_URL + "products/featured-products");
    return { isSuccess: true, data: response.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return { isError: true, errorMessage: message };
  }
};

const getFeaturedCategories = async () => {
  try {
    const response = await axios.get(API_URL + "products/featured-categories");
    return { isSuccess: true, data: response.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return { isError: true, errorMessage: message };
  }
};

const getTrendingProducts = async () => {
  try {
    const response = await axios.get(API_URL + "products/trending-products");
    return { isSuccess: true, data: response.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return { isError: true, errorMessage: message };
  }
};

const productsService = {
  getFeaturedProducts,
  getFeaturedCategories,
  getTrendingProducts,
};

export default productsService;
