import { combineReducers, createStore } from "redux";

import { authReducer, flightsReducer, profileReducer } from "./reducers";

const rootReducers = combineReducers({
  flights: flightsReducer,
  auth: authReducer,
  profile: profileReducer,
});

export default createStore(rootReducers);
