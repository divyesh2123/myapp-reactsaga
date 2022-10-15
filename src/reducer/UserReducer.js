import { GetUserData,GET_USERS_FAILED,GET_USERS_REQ,GET_USERS_SUC } from "../const"

const initialState = {
    data : [],
    error : null,
    IsLoadding : false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

 case GET_USERS_REQ:

 return {...state, IsLoadding : true }

  case GET_USERS_FAILED :
    return {...state, IsLoadding : false, error: payload}

  case GET_USERS_SUC:
    return { ...state,  data :payload,IsLoadding : false }

  default:
    return state
  }
}
