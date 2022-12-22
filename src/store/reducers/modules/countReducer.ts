import { CountActionType, CountAction } from '../../types/countActions'

type State = {
  count: number
}

const INITIAL_STATE = {
  count: 0,
}

export const countReducer = (state: State = INITIAL_STATE, action: CountAction): State => {
  switch (action.type) {
    case CountActionType.INCREASE:
      return { ...state, count: state.count + action.payload }

    case CountActionType.DECREASE:
      return { ...state, count: state.count - action.payload }

    case CountActionType.RESET:
      return { ...state, count: 0 }

    default:
      return state
  }
}
