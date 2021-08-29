import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    (window as any)?.__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any)?.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
