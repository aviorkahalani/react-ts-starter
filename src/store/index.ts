import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducers'

export * as countActionCreators from './actions/countAction'
export const store = createStore(reducers, {}, applyMiddleware(thunk))
export type AppDispatch = typeof store.dispatch
