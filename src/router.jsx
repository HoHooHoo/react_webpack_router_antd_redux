import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import Home from './components/home'
import ConnectMe from './components/connectMe'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="connectMe" component={ConnectMe}/>
    </Route>
  </Router>
), document.getElementById('root'));