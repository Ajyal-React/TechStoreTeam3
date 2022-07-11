import { createStore, combineReducers, applyMiddleware } from "redux";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
import offersReducer from "./reducers/offersReducer";
import trendingReducer from "./reducers/trendingReducer";
import { ReducerForUser } from "./UserAuthRedux/ReducerForUser";
import { profileUserReducer } from "./reducers/profileUserReducer";

import thunk from "redux-thunk";

const allReducer = combineReducers({
  categoriesReducer: categoriesReducer,
  productsReducer: productsReducer,
  offersReducer: offersReducer,
  trendingRruducer: trendingReducer,

  profileUserReducer: profileUserReducer,

  ReducerForUser: ReducerForUser,
});
const middleware = [thunk];

const userInfo = JSON.parse(localStorage.getItem("data")) || {};
const profileData = JSON.parse(localStorage.getItem("profileData")) || {};

const initialState = {
  userReducer: {
    userInformation: userInfo,
    profileData: profileData,
  },
};

const store = createStore(
  allReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
