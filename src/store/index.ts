import { applyMiddleware, legacy_createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose

export * as countActionCreators from './actions/countAction'
export * as authActionCreators from './actions/authAction'
export const store = legacy_createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))
export type AppDispatch = typeof store.dispatch
