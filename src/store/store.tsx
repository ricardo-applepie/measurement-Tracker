import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./combinedReducers";

import { composeWithDevTools } from "redux-devtools-extension";
// creating  the Redux store , and using composeWithDevTools for debugging  .
export const store = createStore(reducers, composeWithDevTools());
