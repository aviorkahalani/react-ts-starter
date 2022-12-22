import { combineReducers } from 'redux'
import { countReducer } from './modules/countReducer'
import { authReducer } from './modules/authReducer'

export const reducers = combineReducers({
  count: countReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof reducers>
