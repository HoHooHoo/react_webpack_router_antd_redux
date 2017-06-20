import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavLink from '../../util/navLink'

export default class AntdDesiger extends React.Component {
    constructor() {
        super();
        this.state = {

        }

    }
    render() {
        return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/AntdDesiger/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/AntdDesiger/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>

        );
    }
}

// AntdDesiger.propTypes = {
//   optionalArray: PropTypes.array,
// }

// AntdDesiger.defaultProps={
//     optionalArray:[],
// }
