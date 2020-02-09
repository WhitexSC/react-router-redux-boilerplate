import { DEFAULT_USER_INFO_STATE } from "../utils/defaultStates"

export const userInfoReducer = (state = DEFAULT_USER_INFO_STATE, action) => {
  switch (action.type) {
    case "UPDATE_USER_INFO_STATE":
      return {
        ...state,
        ...action.payload
      };
    case "CLEAR_USER_INFO_STATE":
      return DEFAULT_USER_INFO_STATE;
    default:
      return state;
  }
}

export const updateUserInfo = (payload) => {
  return {
    type: "UPDATE_USER_INFO_STATE",
    payload
  }
}

export const clearAuthData = () => {
  return {
    type: "CLEAR_USER_INFO_STATE",
  }
}

export default userInfoReducer