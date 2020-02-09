import { DEFAULT_AUTHENTICATION_STATE } from "../utils/defaultStates";

export const authReducer = (state = DEFAULT_AUTHENTICATION_STATE, action) => {
  switch (action.type) {
    case "UPDATE_AUTH_DATA":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    case "CLEAR_AUTH_DATA":
      return DEFAULT_AUTHENTICATION_STATE;
    case "UPDATE_NAVIGATION":
      return {
        ...state,
        navigation: action.payload
      }
    default:
      return state;
  }
}

export const setAuthData = (payload) => {
  return {
    type: "UPDATE_AUTH_DATA",
    payload
  }
}

export const clearAuthData = () => {
  return {
    type: "CLEAR_AUTH_DATA",
  }
}

export const setToken = (payload) => {
  return {
    type: "UPDATE_AUTH_DATA",
    payload
  }
}

export const currentNavigation = (payload) => {
  return {
    type: "UPDATE_NAVIGATION",
    payload
  }
}