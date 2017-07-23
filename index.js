import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import createBrowserHistory from 'history/es/createBrowserHistory'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const history = createBrowserHistory();

import { LayoutCustomize } from './src/__share'
import RootRoute from './rootRoute'




render(
  <Router history={history}>

    <LayoutCustomize>
      <Switch>
        {RootRoute.map((route, index) => (
          // 在一个给定的路径下渲染多个 <Route> ，而且每个
          // <Route> 的 component 属性都不相同。

          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </LayoutCustomize>


  </Router>,
  document.getElementById('root')
)



/*

*/