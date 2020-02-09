import { createStore, combineReducers } from "redux"
import { authReducer } from "../reducers/authReducer"
import { userInfoReducer } from '../reducers/userInfoReducer'

const store = createStore(
  combineReducers({
    auth: authReducer,
    userInfo: userInfoReducer
  })
);

export default store;