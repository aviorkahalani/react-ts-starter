import { Dispatch } from 'redux'
import { CountActionType, CountAction } from '../types/countActions'

export const increaseCount = (amount: number) => {
  return async (dispatch: Dispatch<CountAction>) => {
    dispatch({
      type: CountActionType.INCREASE,
      payload: amount,
    })
  }
}

export const decreaseCount = (amount: number) => {
  return async (dispatch: Dispatch<CountAction>) => {
    dispatch({
      type: CountActionType.DECREASE,
      payload: amount,
    })
  }
}

export const resetCount = () => {
  return async (dispatch: Dispatch<CountAction>) => {
    dispatch({
      type: CountActionType.RESET,
    })
  }
}
