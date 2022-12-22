import { AuthAction, AuthActionType, User } from '../../types/authAction'

type State = {
  user: User | null
}

const INITIAL_STATE = {
  user: null,
}

export const authReducer = (state: State = INITIAL_STATE, action: AuthAction): State => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return { ...state, user: action.payload }

    case AuthActionType.REGISTER:
      return { ...state, user: action.payload }

    case AuthActionType.LOGOUT:
      return { ...state, user: action.payload }

    default:
      return state
  }
}
