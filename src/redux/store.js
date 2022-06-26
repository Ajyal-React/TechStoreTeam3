import { createStore, combineReducers, applyMiddleware } from "redux";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
import trendingRruducer from "./reducers/terndingReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

const allReducer = combineReducers({
  categoriesReducer: categoriesReducer,
  productsReducer: productsReducer,
  trendingRruducer: trendingRruducer,
});

const store = createStore(allReducer, {}, applyMiddleware(...middleware));

export default store;
