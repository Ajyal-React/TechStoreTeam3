import * as actionTypes from "../actionTypes";
import productsService from "../../api/productsServices";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.FEATURED_PRODUCTS,
        payload: {
          isLoading: true,
        },
      });
      const res = await productsService.getFeaturedProducts();
      dispatch({
        type: actionTypes.FEATURED_PRODUCTS,
        payload: {
          data: res.data,
          isSuccuss: true,
          isLoading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FEATURED_PRODUCTS,
        payload: {
          error: error,
          isSuccuss: false,
          isLoading: false,
        },
      });
    }
  };
};
