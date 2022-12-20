import { Dispatch } from 'redux'
import { ActionType, CountAction } from '../types/countActions'

export const increaseCount = (amount: number) => {
  return async (dispatch: Dispatch<CountAction>) => {
    dispatch({
      type: ActionType.INCREASE,
      payload: amount,
    })
  }
}

export const decreaseCount = (amount: number) => {
  return async (dispatch: Dispatch<CountAction>) => {
    dispatch({
      type: ActionType.DECREASE,
      payload: amount,
    })
  }
}

export const resetCount = () => {
  return async (dispatch: Dispatch<CountAction>) => {
    dispatch({
      type: ActionType.RESET,
    })
  }
}
