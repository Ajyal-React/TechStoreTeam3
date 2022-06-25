import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReducer from "./reducers/loginReducer";
import signupReducer from "./reducers/signupReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

const allReducer = combineReducers({
  loginReducer: loginReducer,
  signupReducer: signupReducer,
});

const store = createStore(allReducer, {}, applyMiddleware(...middleware));

export default store;