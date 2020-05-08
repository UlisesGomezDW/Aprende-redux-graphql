import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./userDuck";
let rootReducers = combineReducers({
  user: userReducer
});
export default function generateStore() {
  let store = createStore(rootReducers, applyMiddleware(thunk));
  return store;
}
