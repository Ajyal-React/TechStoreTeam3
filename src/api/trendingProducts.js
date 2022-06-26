import axios from "axios";
const TRENDING_URL = process.env.REACT_APP_TRENDING_URL;
// const token = JSON.parse(localStorage.getItem("token"));
const getTrendingProducts = async () => {
  try {
    const response = await axios.get(
      TRENDING_URL + "products/trending-products"
    );
    return { isSuccess: true, data: response.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return { isError: true, errorMessage: message };
  }
};
const ProductTrending = {
  getTrendingProducts,
};

export default ProductTrending;
