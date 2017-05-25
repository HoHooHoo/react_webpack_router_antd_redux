import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import NavLink from './navLink'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import style from '../style/style.css'

export default class Index extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><NavLink to="/" onlyActiveOnIndex>home</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to="/about">about</NavLink></Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <div>
                    {this.props.children}
                </div>

            </Layout>
        );
    }
}

// Index.propTypes = {
//   optionalArray: PropTypes.array,
// }

// Index.defaultProps={
//     optionalArray:[],
// }
