import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, IndexRoute } from 'react-router'

import {
    App,
    Home,
    AntdDesiger,
    InputSearch,

    RichText,
    Commont,
} from './components';

module.exports = (
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/AntdDesiger" component={AntdDesiger} >
          <Route path="/AntdDesiger/:userName/:repoName" component={InputSearch}/>
        </Route>
        <Route path="/RichText" component={RichText} />
      </Route>
)


