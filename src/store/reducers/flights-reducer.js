import { flights } from "./../../database/data/flights/index";

const initialState = {
  data: flights,
  select: null,
};

const FlightsReducer = (state = initialState, action) => {
  return state;
};

export default FlightsReducer;
