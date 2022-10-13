import { Decrement, Increment } from "../const"


export default (state = 0, { type, payload }) => {
  switch (type) {

  case Increment:
    return state+1;

  case Decrement:
        return state-1;

  default:
    return state
  }
}
