import React,{Component} from 'react'
import PropTypes from 'prop-types';

import NavLink from '../../util/navLink'

import BasePopover from './popover/basePopover'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class AntdDesiger extends React.Component{
    constructor(){
        super();
        this.state={
            Bread:["Home","list","richText"],
        }
    }
    createBreadcrumb(datas){
        let doms=[];
        datas.map((item,index)=>{
            doms.push( <Breadcrumb.Item key={index+1}>{item}</Breadcrumb.Item>);
        });
        return doms;
    }
    render(){
        const self =this;
        const { Bread } =this.state;
        return(
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">
<NavLink to="/AntdDesiger/BasePopover">BasePopover</NavLink>       
                                </Menu.Item>
                                <Menu.Item key="2">
<NavLink to="/AntdDesiger/InputSearch">InputSearch</NavLink>                                   
                                </Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                           {this.createBreadcrumb(Bread)}
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                         
                           <div>
                              {this.props.children}
                           </div>
                        </Content>
                    </Layout>
                </Layout>
        );
    }
}

// AntdDesiger.propTypes = {
//   optionalArray: PropTypes.array,
// }

// AntdDesiger.defaultProps={
//     optionalArray:[],
// }
