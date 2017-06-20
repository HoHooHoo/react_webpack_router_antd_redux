import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavLink from '../../util/navLink'

import style from '../../style/style.css'

import { Button, Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><NavLink to="/" onlyActiveOnIndex>home</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to="/AntdDesiger">AntdDesiger</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to="/RichText">RichText</NavLink></Menu.Item>
                    </Menu>
                </Header>
                <div>
                    {this.props.children}
                </div>

            </Layout>
        );
    }
}

// App.propTypes = {
//   optionalArray: PropTypes.array,
// }

// App.defaultProps={
//     optionalArray:[],
// }
