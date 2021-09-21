import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "./reducers/rootReducer";

import { isInDevelopment } from "./utils/utils";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function;
  }
}

let store: Store;

if (isInDevelopment() && window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));
}

export default store;
