import { Dispatch } from 'redux'
import { AuthAction, AuthActionType, User } from '../types/authAction'

export const login = (user: User) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.LOGIN,
      payload: user,
    })
  }
}

export const register = (user: User) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.REGISTER,
      payload: user,
    })
  }
}

export const logout = (user: null = null) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.LOGOUT,
      payload: user,
    })
  }
}
