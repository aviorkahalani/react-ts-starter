import { ActionType, CountAction } from '../../types/countActions'

type State = {
  count: number
}

const INITIAL_STATE = {
  count: 0,
}

export const countReducer = (state: State = INITIAL_STATE, action: CountAction): State => {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + action.payload }
    case ActionType.DECREASE:
      return { ...state, count: state.count - action.payload }
    case ActionType.RESET:
      return { ...state, count: 0 }
    default:
      return state
  }
}
