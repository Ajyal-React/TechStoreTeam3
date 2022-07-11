import * as actionTypes from "../actionTypes";
import productsService from "../../api/productsServices";

export const getOffers = () => {
  return async (dispatch) => {
    try {
      const res = await productsService.getOffers();
      dispatch({
        type: actionTypes.OFFERS_PRODUCTS,
        payload: {
          data: res.data,
          isSuccuss: true,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.OFFERS_PRODUCTS,
        payload: {
          error: error,
          isSuccuss: false,
        },
      });
    }
  };
};
