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

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_BY_ID,
        payload: {
          isLoading: true,
          data: null,
        },
      });
      const res = await productsService.getProductById(id);
      dispatch({
        type: actionTypes.PRODUCT_BY_ID,
        payload: {
          data: res.data,
          isSuccuss: true,
          isLoading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_BY_ID,
        payload: {
          error: error,
          isSuccuss: false,
          isLoading: false,
        },
      });
    }
  };
};

export const rest = {
  type: actionTypes.REST,
  payload: {},
};

// export const GetOffers = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: actionTypes.START_OFFER,
//       });
//       const response = await productsService.GetRequestHandler(
//         "/products/offers"
//       );
//     } catch (error) {
//       dispatch({
//         type: actionTypes.PRODUCT_BY_ID,
//         payload: {
//           error: error,
//           isSuccuss: false,
//           isLoading: false,
//         },
//       });
//     }
//   };
// };
