import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import urls from '../urls/urls';
import fetch from 'isomorphic-fetch';

export default class LayoutCustomize extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    componentWillMount() {
        this.getHomeURL();
    }
    getHomeURL() {
        fetch(urls.getHomeURL()).then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log("Oops, error", e))
    }
    getAboutURL() {
        fetch(urls.getAboutURL()).then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log("Oops, error", e))
    }
    getContactURL() {
        fetch(urls.getContactURL()).then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log("Oops, error", e))
    }
    render() {
        const self = this;
        return (
            <div>
                example
                   </div>
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