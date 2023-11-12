import { createStore, combineReducers } from "redux";

import { productReducer } from "./reducer/productRedcer";

export const configStore = () => {
  const store = createStore(
    combineReducers({
      productReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
  