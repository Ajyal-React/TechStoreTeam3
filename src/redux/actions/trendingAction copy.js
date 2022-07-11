import * as actionTypes from "../actionTypes";
import productsService from "../../api/productsServices";

export const getTrending = () => {
  return async (dispatch) => {
    try {
      const res = await productsService.getOffers();
      dispatch({
        type: actionTypes.TRENDING_PRODUCTS,
        payload: {
          data: res.data,
          isSuccuss: true,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TRENDING_PRODUCTS,
        payload: {
          error: error,
          isSuccuss: false,
        },
      });
    }
  };
};
