
require('../../../../css/panel.less')
require('../css/index.less')

import React from 'react';
import {Router, Route, Redirect, Link, History} from 'react-router';

let {createActiveRouteComponent} = require('../../NavLink');
let FeedListWidget = require('./FeedListWidget');
let FeedStore = require('./feedStore');

var NavLink = createActiveRouteComponent('li');

class Feeds extends React.Component {
  mixins: [ History ]

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar"
    };
  }


  state: {
    foo: "bar"
  }

  componentDidMount() {
    let {
      location, params, route, routeParams
    } = this.props;
    let {
      query
    } = location;
  }

  componentWillReceiveProps() {
    this.setState({
      loaded: false,
    })
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }

  componentDidMount() {
    // console.log('componentDidMount');
     // if (this.isMounted()) {
  
     // }
  }

  render(){

    let taskData = [];
    for (let i=0;i<7;i++){
      taskData.push(i);
    }

    let tasks = taskData.map((i)=>{
      return(
            <li className="clear">
              <span className="time">08:00</span>
              <span className="event ellipsis"><Link to={`/calendar/${i}`}>市场人员收集数据和管理商机的利器</Link></span>
              <span className="handler rgt">
                <i className="fa fa-info-circle"></i>
              </span>
            </li>
        )
    })

    let {location, params, route, routeParams} = this.props;
    let { pathname, query } = location;


    return(
      <div className="body-wrap">
        <div className="feeds">
          <div className="pure-u-18-24">
            <div className="clear sub-box card shadow">    
            <p className="W_swficon ficon_swtxt">
                    <em className="spac1">有什么新</em>
                    <em className="spac2">鲜</em>
                    <em className="spac3">事想告诉大家</em>
                    <em className="spac4">?</em>
                  </p>
              <div className="sub-box-out-wrap">
                <textarea className="TextArea Block Gray_a" contenteditable="true" rows="1" data-mentions-input="true">
              
                </textarea>
              </div>
            </div>

            <ul className="nav nav-tabs clear card shadow mt-10">
              <NavLink to="/feeds" query={{'cat':'all', 'page':1,'size':30}} activeClassName="active">
                <i className="fa fa-paper-plane-o mr-5"></i>所有
              </NavLink>
              <NavLink to="/feeds" query={{'cat':'atme', 'page':1,'size':30}}  activeClassName="active">
                <i className="fa fa-at mr-5"></i>提到我的
              </NavLink>
              <NavLink to="/feeds" query={{'cat':'follow', 'page':1,'size':30}}  activeClassName="active">
                <i className="fa fa-thumb-tack mr-5"></i>我关注的
              </NavLink>
              <NavLink to="/feeds" query={{'cat':'hots', 'page':1,'size':30}} activeClassName="active">
                <i className="fa fa-comments-o mr-5"></i>热门
              </NavLink>
            </ul>

            {this.props.children ? (
                <div className="children">
                  {this.props.children}
                </div>
              ) : (
                <div className="feeds-list-box">
                  <FeedListWidget {...query}/>
                </div>
              )
            }
          </div>


          <div className="pure-u-6-24">
            <div className="ml-15 card shadow widget-calendar">
              <div className="header clear">
                <span className="title lft">我的日程</span>
                <span className="info rgt"><span className="num mr-5">9</span>个待处理事件</span>
              </div>
              <div className="week">
                <ul className="clear">
                 <li className="current" data-tip="周四" >
                  <div className="weekIndex current" >
                   17
                  </div></li>
                 <li data-tip="周五" >
                  <div className="weekIndex" >
                   18
                  </div></li>
                 <li data-tip="周六" >
                  <div className="weekIndex" >
                   19
                  </div></li>
                 <li data-tip="周日" >
                  <div className="weekIndex" >
                   20
                  </div></li>
                 <li data-tip="周一" >
                  <div className="weekIndex" >
                   21
                  </div></li>
                 <li data-tip="周二" >
                  <div className="weekIndex" >
                   22
                  </div></li>
                 <li data-tip="周三" >
                  <div className="weekIndex" >
                   23
                  </div></li>
                 <li data-tip="周四" >
                  <div className="weekIndex" >
                   24
                  </div>
                 </li>
                </ul>
              </div>

              <div className="detail">
                <ul>
                  {tasks}
                </ul>

              </div>

              <div className="action mt-5">
                <div className="lft btn">
                  <span className="ico">C</span>
                  <span className="text ml-5">创建新日程</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Feeds;