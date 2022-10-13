import { Decrement, Increment } from "../const";

export const IncrementAction = (payload) => ({
  type: Increment,
  payload
});


export const DecrementAction = (payload) => ({
  type: Decrement,
  payload
})

