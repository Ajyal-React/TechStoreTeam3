import * as actionTypes from "../actionTypes";
import productsService from "../../api/productsServices";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.FEATURED_CATEGORIES,
        payload: {
          isLoading: true,
        },
      });
      const res = await productsService.getFeaturedCategories();
      dispatch({
        type: actionTypes.FEATURED_CATEGORIES,
        payload: {
          data: res.data,
          isSuccuss: true,
          isLoading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FEATURED_CATEGORIES,
        payload: {
          error: error,
          isSuccuss: false,
          isLoading: false,
        },
      });
    }
  };
};
