import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import OuterMostRouter from './outerMost/router'


const routes = {
  path: '/',
  component: OuterMostRouter,
  childRoutes: [
    { path: 'OuterMostRouter', component: OuterMostRouter },
    /*{ path: 'inbox', component: Inbox },*/
  ]
}
/*
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>主页!</div>,
    main: () => <h2>主页</h2>
  },
  {
    path: '/about',
    sidebar: () => <div>关于我们!</div>,
    main: () => <h2>关于我们</h2>
  },
  {
    path: '/contact',
    sidebar: () => <div>联系我们!</div>,
    main: () => <h2>联系我们</h2>
  }
]*/

const BasicExample = () => (
  <Router routes={routes}/>

)

export default BasicExample