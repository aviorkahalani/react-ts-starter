import { combineReducers } from 'redux'
import { countReducer } from './modules/countReducer'

export const reducers = combineReducers({
  count: countReducer,
})

export type RootState = ReturnType<typeof reducers>
