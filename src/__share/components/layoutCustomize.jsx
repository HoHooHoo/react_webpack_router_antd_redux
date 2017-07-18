import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import urls from '../urls/urls';
import fetch from 'isomorphic-fetch';

export default class LayoutCustomize extends React.Component {
    constructor() {
        super();
        this.state = {
            //默认选中的导航
            selectedKeysNav: ["首页"],
            //默认选中的侧边栏
            defaultSelectedKeysSider: ["1"],
            //默认展开的侧边栏
            defaultOpenKeysSider: ["home侧边栏类型1"],

            navUrl: [],

        }
        this.navDIC = {};

    }

    componentWillMount() {
        this.getNavUrl();

    }
    getNavUrl() {
        fetch(urls.getNavUrl()).then(response => response.json())
            .then((data) => {
                this.setState({
                    navUrl: data,
                    selectedKeysNav: [data[0].navName],

                });

            }).catch((e) => {
                console.log(e);
            })

    }
    //导航 选中事件 select
    navMenuItemChange(obj) {
        this.setState({
            selectedKeysNav:[obj.key],
        })
    }
    //设置顶部导航栏
    showNavMenuItem(data) {
        let doms = [];
        data.forEach((item, index) => {
            if (this.navDIC[item.navName] == undefined) {
                this.navDIC[item.navName] = item;
            }
            doms.push(
                <Menu.Item key={item.navName}>
                    <Link to={item.navAddress}>{item.navName}</Link>
                </Menu.Item>
            );
        })
        return doms;
    }
    showSiderSubMenu(data) {
        let doms = [];
        data.forEach((parent, parentIndex) => {//导航
            if (this.navDIC[this.state.selectedKeysNav].navName == parent.navName) {
                parent.sider.forEach((child, childIndex) => {//侧边栏
                    doms.push(
                        <SubMenu key={child.category} title={<span><Icon type={child.iconType} />{child.category}</span>}>
                            {this.showSiderMenu(child.linkInfo)}
                        </SubMenu>
                    );
                })
            }

        })
        return doms;
    }
    showSiderMenu(data) {
        let doms = [];
        data.forEach((item, index) => {
            doms.push(
                <Menu.Item key={String(index + 1)}>
                    <Link to={item.address}>{item.name}</Link>
                </Menu.Item>
            );
        })

        return doms;
    }
    render() {
        const self = this;
        const { selectedKeysNav, defaultSelectedKeysSider, defaultOpenKeysSider, navUrl } = this.state;
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={selectedKeysNav}
                        onSelect={this.navMenuItemChange.bind(this)}
                        style={{ lineHeight: '64px' }}
                    >
                        {this.showNavMenuItem(navUrl)}
                    </Menu>
                </Header>

                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={defaultSelectedKeysSider}
                            defaultOpenKeys={defaultOpenKeysSider}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {this.showSiderSubMenu(navUrl)}
                        </Menu>
                    </Sider>

                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            {this.props.children}

                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );
    }
}

//限定控件传入的属性类型
//Layout.propTypes={
//       index:PropTypes:number
//}

//设置默认属性
//Layout.defaultProps={
//  index:1,
//};