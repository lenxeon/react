
require('../../../css/panel.less')
require('./css/index.less')


import React from 'react';
const {ButtonGroup, Button, Modal, Grid, Message, Overlay} = global.uiRequire();


class Main extends React.Component {

  constructor(props) {
    super(props);
    console.log(Modal);
  }

  clickHandler(){
    Modal.confirm(
      <div>
        <p>如果你知道要做什么，请点确定。</p>
        <p>如果你不知道，点取消吧。</p>
      </div>,
      () => { alert('点击了确定') }
    )
  }

  o: 0

  clickHandler2() {
    if(this.o==null) this.o = 0;
    Message.show("success" + (++this.o))
  }

    clickHandler3() {
    Message.show("error")
  }

  render(){
    return(
      <div className="x-container">

        <div className="x-panel" style={{width:300, margin:"15px"}}>
          <div className="x-header">
            <div className="x-tab-line"></div>
            <div className="x-header-inner">
              <i className="fa fa-tasks"></i>
              <span className="x-header-title">网盘</span>
              <span className="x-header-icons">
                <i className="fa fa-tencent-weibo"></i>
                <i className="fa fa-chevron-circle-right"></i>
                <i className="fa fa-outdent"></i>
              </span>
            </div>
          </div>
          <div className="x-body">
            <div className="x-body-inner">
            多个参数可以使用分号或者逗号分隔，推荐使用分号分隔，因为逗号有两重含义：它既可以表示混合的参数，也可以表示一个参数中一组值的分隔符。
            使用分号作为参数分隔符意味着可以将逗号分隔的一组值作为一个变量处理。换句话说，如果编译器在混合的定义或者是调用中找到至少一个分号，就会假设参数是使用分号分隔的，所有的逗号都属于参数中的一组值的分隔符。
            </div>
          </div>
        </div>

        <div className="x-panel" style={{width:300, margin:"15px"}}>
          <div className="x-header">
            <div className="x-tab-line"></div>
            <div className="x-header-inner">
              <i className="fa fa-tasks"></i>
              <span className="x-header-title">任务</span>
              <span className="x-header-icons">
                <i className="fa fa-tencent-weibo"></i>
                <i className="fa fa-chevron-circle-right"></i>
                <i className="fa fa-outdent"></i>
              </span>
            </div>
          </div>
          <div className="x-body">
            <div className="x-body-inner">
            <input type="password" placeholder="Password"/>
            多个参数可以使用分号或者逗号分隔，推荐使用分号分隔，因为逗号有两重含义：它既可以表示混合的参数，也可以表示一个参数中一组值的分隔符。
            


            <ButtonGroup className="cal-button-groups">
              <Button status="primary">日</Button>
              <Button status="primary">周</Button>
              <Button status="primary">月</Button>
              <Button status="primary">列表</Button>
            </ButtonGroup>

            </div>
          </div>
        </div>

        <div className="x-panel x-tab-panel" style={{width:300, margin:"15px"}}>
          <div className="x-header">
            <div className="x-tab-line"></div>
            <div className="x-header-inner">
              <span className="x-tab-default x-tab-active">
                <i className="fa fa-tasks pre-ico"></i>
                <span className="x-header-title">新闻</span>
                <i className="fa fa-times"></i>
              </span>
              <span className="x-tab-default">
                <i className="fa fa-tasks pre-ico"></i>
                <span className="x-header-title">娱乐</span>
                <i className="fa fa-times"></i>
              </span>
              <span className="x-tab-default">
                <i className="fa fa-tasks pre-ico"></i>
                <span className="x-header-title">都市激情</span>
                <i className="fa fa-times"></i>
              </span>
            </div>
          </div>
          <div className="x-body">
            <div className="x-body-inner">

            <div className="mt-5">
              <Button onClick={this.clickHandler.bind(this)} 
                status="primary">Primary Button</Button>
            </div>

            <div className="mt-5">
              <Button onClick={this.clickHandler2.bind(this)} 
                status="success">Success Button</Button>
            </div>

            <div className="mt-5">
              <Button onClick={this.clickHandler3.bind(this)} 
                status="warning">Warning Button</Button>
            </div>

            <div className="mt-5">
              <Button status="error">Error Button</Button>
            </div>

            <div className="mt-5">
              <Button status="info">Info Button</Button>
            </div>

            <div className="mt-5">            
              <Button onClick={() => Modal.confirm(
                <div>
                  <p>如果你知道要做什么，请点确定。</p>
                  <p>如果你不知道，点取消吧。</p>
                </div>,
                () => { alert('点击了确定') })}>confirm example</Button>
            </div>

            多个参数可以使用分号或者逗号分隔，推荐使用分号分隔，因为逗号有两重含义：它既可以表示混合的参数，也可以表示一个参数中一组值的分隔符。
            使用分号作为参数分隔符意味着可以将逗号分隔的一组值作为一个变量处理。换句话说，如果编译器在混合的定义或者是调用中找到至少一个分号，就会假设参数是使用分号分隔的，所有的逗号都属于参数中的一组值的分隔符。
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default Main;