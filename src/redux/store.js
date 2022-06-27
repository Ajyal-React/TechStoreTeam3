import { createStore, combineReducers, applyMiddleware } from "redux";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";

import trendingReducer from "./reducers/trendingReducer";
import { ReducerForUser } from "./UserAuth/ReducerForUser";

import thunk from "redux-thunk";

const allReducer = combineReducers({
  categoriesReducer: categoriesReducer,
  productsReducer: productsReducer,

  trendingRruducer: trendingRruducer,   

  ReducerForUser: ReducerForUser,
});
const middleware = [thunk];

const userInfo = JSON.parse(localStorage.getItem("data")) || {};

const initialState = {
  userReducer: {
    userInformation: userInfo,
  },
};

const store = createStore(allReducer, {}, applyMiddleware(...middleware));

export default store;
