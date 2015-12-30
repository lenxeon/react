
require('./css/index.less')

import React from 'react';
import {Router, Route, Link, History} from 'react-router';
import {TimeAgo} from'../../widget';
import Menu from './Menu';
let classnames = require('classnames');
const BODY_CLICK='000000000000';

class Skydrive extends React.Component {




  constructor(props) {
    super(props);
    this.state = {
      foo: "bar"
    };
    console.log(BODY_CLICK);
  }

  click(){
    // console.log('page被点击了');
  }


  render(){  

    let {ButtonGroup, Button, SwitchBar, Modal, FormControl, Grid, 
      Message, Overlay, Form, Select} = global.uiRequire();

    var items = [];
    for(var i=0;i<5;i++){
      items.push({
        id: i,
        name: '我的任务'+i
      });
    }
    let colors = ['', 'blue', 'purple', 'red', 'orange', 'yellow'];
    var list = items.map((task)=>{
      var checked = task.id % 2==0 ? "fa fa-square-o": "fa fa-check";
      var star = task.id %3 ==0 ? "fa fa-star":"fa fa-star-o";
      var now = new Date();

      const colorCls = classnames(
        'color',
        colors[task.id%4]
      )

      return (
        <div className="item pure-g">
            <div className="pure-u-2-24">
              <span className={colorCls}></span>
              <i className={checked}></i>
            </div>
            <div className="pure-u-16-24"><Link to={`/tasks/${task.id}`}>x{task.name}</Link></div>
            <div className="pure-u-4-24"><TimeAgo date={now}/></div>
            <div className="pure-u-2-24"><i className={star}></i></div>
        </div>
      );
    });
    return(
      <div className="tasks-box has-menu body-wrap" onClick={this.click.bind(this)}>
        <Menu/>
        <div className="tasks-main">


          <div className="page-header-layout clear">
            <div className="lft">

                <div className="switch-bar-group shadow">
                <SwitchBar status="primary">按进度<i className="fa fa-angle-down ml-5"></i></SwitchBar>
                <SwitchBar status="primary">按项目<i className="fa fa-angle-down ml-5"></i></SwitchBar>
                <SwitchBar status="primary">按优先级<i className="fa fa-angle-down ml-5"></i></SwitchBar>
                </div>

            </div>
            <div className="center">
              <ButtonGroup className="cal-button-groups" active>
                <Button status="primary">日</Button>
                <Button status="primary">周</Button>
                <Button status="primary">月</Button>
                <Button status="primary">列表</Button>
              </ButtonGroup>
            </div>
            <div className="rgt">
                <Button status="primary"><i className="fa fa-plus mr-10"></i>新建日程</Button>
            </div>
          </div>


          {this.props.children ? (
              <div className="tasks-body pure-grid shadow mt-20">
                {list}
                {this.props.children}
              </div>
            ) : (
              <div className="tasks-body pure-grid shadow mt-20">
                {list}
              </div>
            )
          }
        </div>
      </div>
    )
  }
};

export default Skydrive;