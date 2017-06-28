import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers/reducers'; // Or wherever you keep your reducers
import calculation from './reducers/calculation';


import Index from './index'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    calculation,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

export default class OuterMostRouter {
  constructor() {

  }
  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <Index />
        </ConnectedRouter>
      </Provider>
    );
  }
}