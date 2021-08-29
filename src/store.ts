import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { transactionReducer } from "./reducers/transactionReducer";

const store = createStore(
  transactionReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    (window as any)?.__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any)?.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
