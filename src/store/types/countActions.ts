export enum ActionType {
  INCREASE = 'increase',
  DECREASE = 'decrease',
  RESET = 'reset',
}

interface IncreaseAction {
  type: ActionType.INCREASE
  payload: number
}

interface DecreaseAction {
  type: ActionType.DECREASE
  payload: number
}

interface ResetAction {
  type: ActionType.RESET
}

export type CountAction = IncreaseAction | DecreaseAction | ResetAction
