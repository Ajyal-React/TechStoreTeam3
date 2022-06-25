import * as actionTypes from "../actionTypes";
import homeServices from "../../api/homeServices";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await homeServices.getFeaturedProducts();
      dispatch({
        type: actionTypes.FEATURED_PRODUCTS,
        payload: {
          data: res.data,
          isSuccuss: true,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FEATURED_PRODUCTS,
        payload: {
          error: error,
          isSuccuss: false,
        },
      });
    }
  };
};
