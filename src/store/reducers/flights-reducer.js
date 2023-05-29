import { flights } from "./../../database/data/flights/index";

const initialState = {
  data: flights,
  select: null,
};

const flightsReducer = (state = initialState, action) => state;

export default flightsReducer;
