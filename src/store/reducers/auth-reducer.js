import { authTypes } from "../types/auth-types";

const stateInitial = {
  user: null,
  isClick: false,
  isAuth: false,
};

const authReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case authTypes.LOGIN_AUTH: {
      const { email, password } = action.payload.user;

      const dataAdmin = {
        email: "admin@gmail.com",
        password: "admin",
      };

      if (email === dataAdmin.email && password === dataAdmin.password)
        state = { ...state, user: { email }, isAuth: true };

      return { ...state, isClick: true };
    }
    case authTypes.LOGOUT_AUTH:
      return {
        user: null,
        isClick: false,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default authReducer;
