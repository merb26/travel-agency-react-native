import { combineReducers, createStore } from "redux";

import { FlightsReducer } from "./reducers";

const rootReducers = combineReducers({
  flights: FlightsReducer,
});

export default createStore(rootReducers);
