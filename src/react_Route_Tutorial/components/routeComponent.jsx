import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 首先我们需要导入一些组件...
import { Router, Route, Link,browserHistory  } from 'react-router'

import About from './about'
import Home from './home'
import InBox from './inBox'

export default class RouteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    <Route path="about" component={About} />
                   
                </Route>
            </Router>
        );
    }
}

