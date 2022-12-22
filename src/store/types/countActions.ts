export enum CountActionType {
  INCREASE = 'increase',
  DECREASE = 'decrease',
  RESET = 'reset',
}

interface IncreaseAction {
  type: CountActionType.INCREASE
  payload: number
}

interface DecreaseAction {
  type: CountActionType.DECREASE
  payload: number
}

interface ResetAction {
  type: CountActionType.RESET
}

export type CountAction = IncreaseAction | DecreaseAction | ResetAction
