import { combineReducers, createStore } from "redux";

import { authReducer, flightsReducer } from "./reducers";

const rootReducers = combineReducers({
  flights: flightsReducer,
  auth: authReducer,
});

export default createStore(rootReducers);
