import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  PicturesWall,
} from './src/components/antd_desiger'

const RootRoute = [
  { path: '/',
    exact: true,
    main: () =><PicturesWall />
  },
  { path: '/about',
    sidebar: () => <div>关于我们!</div>,
    main: () => <h2>关于我们</h2>
  },
  { path: '/contact',
    sidebar: () => <div>联系我们!</div>,
    main: () => <h2>联系我们</h2>
  }
]


export default RootRoute;