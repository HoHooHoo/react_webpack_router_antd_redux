import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavLink from '../../util/navLink'

import style from '../style/style.css'

import { Button,Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <div>2222menu</div>
        );
    }
}

// Menu.propTypes = {
//   optionalArray: PropTypes.array,
// }

// Menu.defaultProps={
//     optionalArray:[],
// }
