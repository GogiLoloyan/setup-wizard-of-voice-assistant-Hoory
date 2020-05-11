import { createStore } from "redux";
// import { applyMiddleware } from "redux";
// import createLogger from "redux-logger";
// import thunk from "redux-thunk";
import reduser from "../reducers";

// const logger = createLogger();

export function configureStore() {
  const store = createStore(reduser);
  store.subscribe(() => console.log(store.getState()));

  return store;
}
