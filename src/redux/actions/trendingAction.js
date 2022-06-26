import * as actionTypes from "../actionTypes";
import ProductTrending from "../../api/trendingProducts";
export const getTrending = () => {
  return async (dispatch) => {
    try {
      const res = await ProductTrending.getTrendingProducts();
      console.log(res);
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
