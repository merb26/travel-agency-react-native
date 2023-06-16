import { profileTypes } from "./../types";

const initialState = {
  imageUri: null
}

const profileReducer = (state = initialState, action) => {
  const actions = {
    [profileTypes.ADD_IMAGE]: () => {
      return {
        ...state,
        imageUri: action.imageUri,
      };
    },
  };
  return actions[action.type] ? actions[action.type](action.payload) : state;
};

export default profileReducer;
