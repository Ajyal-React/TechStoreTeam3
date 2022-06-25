import * as actionTypes from "../actionTypes";
import homeServices from "../../api/homeServices";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const res = await homeServices.getFeaturedCategories();
      console.log(res);
      dispatch({
        type: actionTypes.FEATURED_CATEGORIES,
        payload: {
          data: res.data,
          isSuccuss: true,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FEATURED_CATEGORIES,
        payload: {
          error: error,
          isSuccuss: false,
        },
      });
    }
  };
};
