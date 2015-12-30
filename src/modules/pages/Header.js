require('../../css/header.less')

import React from 'react';
import SearchBox from './SearchBox';
import {Link} from 'react-router';

var {createActiveRouteComponent} = require('./NavLink');
var NavLink = createActiveRouteComponent('li');

class Header extends React.Component {
    constructor(props, context){
        super(props);
        context.router // will work
    }
    // contextTypes: {
    //     router: React.PropTypes.object,
    // }
    state: {
        focus: false,
        value: '智能搜索...',
    }
    render(){
        // console.log(this.context);
    return(
      <div id="header" className="fadeInDown">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed clear">
            <a className="pure-menu-heading" href="#"><i className="fa fa-xing"></i>workin.me</a>
            <ul className="pure-menu-list left-menus">
                <NavLink to="/feeds"  activeClassName="pure-menu-selected" className="pure-menu-item">
                    <i className="fa fa-commenting-o mr-5"></i>动态
                </NavLink>
                <NavLink to="/tasks"  activeClassName="pure-menu-selected" className="pure-menu-item">
                    <i className="fa fa-list mr-5"></i>任务
                </NavLink>
                <NavLink to="/calendar" activeClassName="pure-menu-selected" className="pure-menu-item">
                    <i className="fa fa-calendar mr-5"></i>日程
                </NavLink>
                <NavLink to="/portals" activeClassName="pure-menu-selected" className="pure-menu-item">
                    <i className="fa fa-coffee mr-5"></i>知识
                </NavLink>
                <NavLink to="/org"  activeClassName="pure-menu-selected" className="pure-menu-item">
                    <i className="fa fa-sitemap mr-5"></i>组织
                </NavLink>
                
                <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                    <span className="pure-menu-link more">更多</span>
                    <ul className="pure-menu-children">
                        <NavLink to="/hr"  activeClassName="pure-menu-selected" className="pure-menu-item">
                            <i className="fa fa-calendar-check-o mr-5"></i>考勤
                        </NavLink>
                        <NavLink to="/skydrive"  activeClassName="pure-menu-selected" className="pure-menu-item">
                            <i className="fa fa-cloud-upload mr-5"></i>网盘
                        </NavLink>
                        <NavLink to="/crm"  activeClassName="pure-menu-selected" className="pure-menu-item">
                            <i className="fa fa fa-user-secret mr-5"></i>客户
                        </NavLink>
                    </ul>
                </li>
            </ul>

            <ul className="pure-menu-list right-menus rgt">
                <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover user">
                    <span className="avatar">
                      <img
                        src="https://dn-mdpic.qbox.me/UserAvatar/default.gif?imageView2/1/w/48/h/48/q/90"
                        alt="头像" />
                    </span>
                    <span className="name">冷馨</span>
                    <ul className="pure-menu-children">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">考勤</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">网盘</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">客户</a></li>
                    </ul>
                </li>
                <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover message">
                    <i className="fa fa-bell"></i>
                    <ul className="pure-menu-children">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">考勤</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">网盘</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">客户</a></li>
                    </ul>
                </li>
                <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                    <span className="pure-menu-link more">新建</span>
                    <ul className="pure-menu-children">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">考勤</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">网盘</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">客户</a></li>
                    </ul>
                </li>
                <li className="pure-menu-item search-box">
                    <SearchBox/>
                </li>
            </ul>
        </div>
      </div>
    )
  }
};

// Header.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default Header;