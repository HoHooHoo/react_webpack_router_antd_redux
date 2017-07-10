import React from 'react'
import ReactDOM, { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
//import { Router, Route, browserHistory,Link,IndexRoute  } from 'react-router'

import { BrowserRouter } from 'react-router-dom'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './src/outerMost/reducers/todoApp'; // Or wherever you keep your reducers

import OuterMost from './src/outerMost/containers/App'
//------------------------------
import routes from './rootRoute'

import About from './src/react_Route_Tutorial/components/about';
import Home from './src/react_Route_Tutorial/components/home';
import InBox from './src/react_Route_Tutorial/components/inBox';
import RouteComponent from './src/react_Route_Tutorial/components/routeComponent'
//----------------------------------

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(reducers)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))



render(
  <BrowserRouter>
    <About />
  </BrowserRouter>,
  document.getElementById('root')
)



