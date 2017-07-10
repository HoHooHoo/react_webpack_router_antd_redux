import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

//import OneExampleRoute from './src/components/OneExample/router'
//import {NotFound} from './src/share/js'

import Layout from './src/layout/components/app'
import OneExample from './src/oneExample/containers/app'

const routes = {
  path: '/',
  component: Layout,
  childRoutes: [
    { path: 'OneExample', component: OneExample },
    //{ path: 'inbox', component: Inbox },
  ]
}
/*
const BasicExample = [
  {
    path: 'website',
    onEnter: function (nextState, repalce) {
      repalce({ nextPathname: nextState.location.pathname }, 'website/home')
    }
  },
  {
    path: 'website/home',
    component:OneExampleRoute,
    indexRoute: {
      component:OneExampleRoute.component,
    },
    childRoutes: [
      OneExampleRoute
    ],
  },
  {
    path:'*',
    component:NotFound,
  }



];*/

export default routes;