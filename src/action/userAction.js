import { GetUserData,GET_USERS_SUC,GET_USERS_FAILED } from "../const";

export const GetUserDataAction = (payload) => ({
  type: GET_USERS_SUC,
  payload
})

export const GetUserFailedAction = (payload) => ({
    type: GET_USERS_FAILED,
    payload
  })
  
