export enum AuthActionType {
  LOGIN = 'login',
  REGISTER = 'register',
  LOGOUT = 'logout',
}

export type User = {
  _id: string
  username: string
  password: string
}

interface LoginAction {
  type: AuthActionType.LOGIN
  payload: User
}

interface RegisterAction {
  type: AuthActionType.REGISTER
  payload: User
}

interface LogoutAction {
  type: AuthActionType.LOGOUT
  payload: null
}

export type AuthAction = LoginAction | RegisterAction | LogoutAction
