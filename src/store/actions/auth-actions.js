import { authTypes } from "../types";

export const authAction = (data) => ({
  type: authTypes.LOGIN_AUTH,
  payload: {
    user: {
      email: data.email,
      password: data.password,
    },
  },
});

export const logoutAction = () => ({
  type: authTypes.LOGOUT_AUTH,
});
