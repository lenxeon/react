
require('../../../css/panel.less')

import React from 'react';

var {createActiveRouteComponent} = require('../NavLink');
var NavLink = createActiveRouteComponent('li');

class Portals extends React.Component {

  render(){
    return(
      <div className="pure-g mt-25">
        <div className="pure-u-18-24 ask ask-out-wrap shadow">
          <ul className="nav nav-tabs clear">
              <li><a href="/blogs"><i className="fa fa-user mr-5"></i>推荐的</a></li>
              <li><a href="/blogs/newest"><i className="fa fa-at mr-5"></i>全部的</a></li>
              <li className="active"><a href="/blogs/hottest"><i className="fa fa-commenting mr-5"></i>热门的</a></li>
          </ul>
          <div className="stream-list blog-stream">
            <section className="stream-list-item">
              <div className="blog-rank">
                <div className="votes">
                  0
                  <small>
                    推荐
                  </small>
                </div>
                <div className="views hidden-xs">
                  11
                  <small>
                    浏览
                  </small>
                </div>
              </div>
              <div className="summary">
                <h2 className="title">
                  <a href="/a/1190000003738198">
                    类中private变量真的private么？
                  </a>
                </h2>
                <p className="excerpt wordbreak hidden-xs">
                  内容简介 利用反射机制修改类中的private修饰的变量（当然，在没有提供setter的情况下）。 本篇主要讲述了如何利用反射机制修改类中的一个private变量。下一篇将会展示利用反射机制来违反或者说攻击单例模式。
                  正...
                </p>
                <ul className="author list-inline">
                  <li>
                    <a href="/u/vipwhr">
                      <img className="avatar-20 mr10 hidden-xs" src="http://sfault-avatar.b0.upaiyun.com/557/489/557489654-55d19a857a50f_small"
                      alt="vipwhr"/>
                      vipwhr
                    </a>
                    发布于
                    <a href="/blog/vipwhr">
                      vipwhr
                    </a>
                    <span className="split">
                    </span>
                    7 小时前
                  </li>
                </ul>
              </div>
            </section>
            <section className="stream-list-item">
              <div className="blog-rank">
                <div className="votes">
                  0
                  <small>
                    推荐
                  </small>
                </div>
                <div className="views hidden-xs">
                  17
                  <small>
                    浏览
                  </small>
                </div>
              </div>
              <div className="summary">
                <h2 className="title">
                  <a href="/a/1190000003738089">
                    在session中存储JSON对象
                  </a>
                </h2>
                <p className="excerpt wordbreak hidden-xs">
                  在web开发的过程中，我们可能需要在session中暂时存储接收到的JSON数据，以减少对内存和带宽的占用，可是sessionStorage只能存储字符串数据，无法直接存储数组类型和JSON对象，这时候我们该怎么办呢？其实很简单...
                </p>
                <ul className="author list-inline">
                  <li>
                    <a href="/u/lixiang314">
                      <img className="avatar-20 mr10 hidden-xs" src="http://sfault-avatar.b0.upaiyun.com/216/802/2168021156-556ffd184a75c_small"
                      alt="条件状语从句"/>
                      条件状语从句
                    </a>
                    发布于
                    <a href="/blog/lixiang314">
                      李响的开发之路
                    </a>
                    <span className="split">
                    </span>
                    8 小时前
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        
      </div>
    )
  }
};

export default Portals;