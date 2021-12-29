import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./combinedReducers";

import { composeWithDevTools } from "redux-devtools-extension";
// creating  Redux store .
export const store = createStore(reducers, composeWithDevTools());

console.log(store.getState());
