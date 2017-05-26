import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home/home'
import About from './components/about'

module.exports = (
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
      </Route>
)

