
require('./css/index.less')

import React from 'react';
import {Router, Route, Link, History} from 'react-router';
import {TimeAgo} from'../../widget';
var classnames = require('classnames');
var Menu = require('./Menu');
const {ButtonGroup, Button, Modal, FormControl, Grid, Message, Overlay, Form, Select} = global.uiRequire();

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar"
    };
  }



  clickHandler(){
    let country = require('./static/countries');
    let countryJson = country.factory();
    let openOptions = {
      header: '一个弹出表单',
      content: (
        <div>
          <Form layout="aligned" ref="form">
            <FormControl name="name" required={true} label="姓名" type="text" />
            <FormControl name="birthday" required={true} label="生日" type="date" />
            <FormControl name="description" label="简介" type="textarea" width={20} rows={6} />
          </Form>
        </div>
      ),
      width: 700,
      buttons: {
        '取消': true,
        '重置': () => {
          let form = this.refs.form
          form.setData({})
        },
        '确定': () => {
          let form = this.refs.form
          let suc = form.validate()
          if (suc) {
            alert(JSON.stringify(form.getValue()))
            return true
          }
        }
      }
    }
    Modal.open(openOptions)
  }


  render(){
    var items = [];
    for(var i=0;i<50;i++){
      items.push({
        id: i,
        day: '2015-11-09',
        time: '14:00-14:30',
        creatorName: '冷馨',
        name: '我的任务'+i
      });
    }
    var list = items.map((task)=>{
      var checked = task.id % 2==0 ? "fa fa-circle": "fa fa-dot-circle-o";
      var star = task.id %3 ==0 ? "fa fa-star":"fa fa-star-o";
      var now = new Date();
      return (
        <div className="item pure-g">
            <div className="pure-u-2-24 pl-15"><i className={checked}></i></div>
            <div className="pure-u-4-24">{task.day}</div>
            <div className="pure-u-4-24">{task.time}</div>
            <div className="pure-u-4-24">{task.creatorName}</div>
            <div className="pure-u-6-24"><span onClick={this.clickHandler.bind(this)}>{task.name}</span></div>
        </div>
      );
    });
    return(
      <div className="has-menu body-wrap">
        <Menu/>
        <div className="calendar-main">
          <div className="page-header-layout clear">
            <div className="lft">
                <Button status="primary">今天</Button>
                <ButtonGroup className="cal-button-groups clear ml-10 direction">
                  <Button status="primary"><i className="fa fa-angle-left"></i></Button>
                  <Button status="primary"><i className="fa fa-angle-right"></i></Button>
                </ButtonGroup>
                <span className="ml-10 day">2015 年 10月7日 星期三</span>
            </div>
            <div className="rgt">
                <Button status="primary"><i className="fa fa-plus mr-10"></i>新建日程</Button>
            </div>
            <div className="center">
              <ButtonGroup className="cal-button-groups" active>
                <Button status="primary">日</Button>
                <Button status="primary">周</Button>
                <Button status="primary">月</Button>
                <Button status="primary">列表</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="cal-body pure-grid shadow mt-20">

            <div className="item pure-g">
                <div className="pure-u-2-24 pl-15">分类</div>
                <div className="pure-u-4-24">日期</div>
                <div className="pure-u-4-24">时间</div>
                <div className="pure-u-4-24">发起人</div>
                <div className="pure-u-6-24">事件</div>
            </div>
            {list}
          </div>
        </div>
      </div>
    )
  }
};

export default Calendar;