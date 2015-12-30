"use strict"

import React from 'react'
import classnames from 'classnames'
import getGrid from './higherorder/grid'
import Overlay from './Overlay'
import { requireCss } from './themes'
import PubSub from 'pubsub-js'
requireCss('switch-bar')



let data = [];
data.push({
  'icoCls': 'fa fa-file',
  'text': '已完成a',
  children:[{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  }]
},{
  'icoCls': 'fa fa-file',
  'text': '已完成b',
  children:[{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  }]
},{
  'icoCls': 'fa fa-file',
  'text': '已完成c',
  children:[{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  },{
    'icoCls': 'fa fa-file',
    'text': '已完成1.1',
  }]
});

@getGrid
class SwitchBar extends React.Component {
  static displayName = 'SwitchBar'

  static propTypes = {
    children: React.PropTypes.any,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    once: React.PropTypes.bool,
    status: React.PropTypes.string,
    style: React.PropTypes.object,
    type: React.PropTypes.oneOf(['submit', 'button'])
  }

  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this._optionsCache = {};
    this._optionsFilterString = '';
    this._closeMenuIfClickedOutside = (event) => {
      console.log('外层点击事件被响应了');
      // if (!this.state.isOpen) {
      //   return;
      // }
      var menuElem = React.findDOMNode(this.refs.selectMenuContainer);
      var controlElem = React.findDOMNode(this.refs.container);

      var eventOccuredOutsideMenu = this.clickedOutsideElement(menuElem, event);
      var eventOccuredOutsideControl = this.clickedOutsideElement(controlElem, event);

      // Hide dropdown menu if click occurred outside of menu
      if (eventOccuredOutsideMenu && eventOccuredOutsideControl) {
        this.setState({
          isOpen: false
        }, this._unbindCloseMenuIfClickedOutside);
      }
    };
    this._bindCloseMenuIfClickedOutside = () => {
      console.log('添加上外层点击响应事件');
      if (!document.addEventListener && document.attachEvent) {
        document.attachEvent('onclick', this._closeMenuIfClickedOutside);
      } else {
        document.addEventListener('click', this._closeMenuIfClickedOutside);
      }
    };
    this._unbindCloseMenuIfClickedOutside = () => {
      if (!document.removeEventListener && document.detachEvent) {
        document.detachEvent('onclick', this._closeMenuIfClickedOutside);
      } else {
        document.removeEventListener('click', this._closeMenuIfClickedOutside);
      }
    };
    // this.setState(this.getStateFromValue(this.props.value));
  }

  componentDidMount() {
    if (this.props.asyncOptions && this.props.autoload) {
      this.autoloadAsyncOptions();
    }
  }

  componentWillUnmount() {
    clearTimeout(this._blurTimeout);
    clearTimeout(this._focusTimeout);
    if (this.state.isOpen) {
      this._unbindCloseMenuIfClickedOutside();
    }
  }

  clickedOutsideElement (element, event) {
    var eventTarget = (event.target) ? event.target : event.srcElement;
    while (eventTarget != null) {
      if (eventTarget === element) return false;
      eventTarget = eventTarget.offsetParent;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      this.setState({ disabled: nextProps.disabled })
    }
  }

  state = {
    isOpen: false
  }

  containerClick(event) {
    console.log(this.state);
    if(this.state.isOpen){
      return;
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
    this.setState({
      isOpen: true
    })
    this._bindCloseMenuIfClickedOutside();
    // event.stopPropagation();
    // event.preventDefault();
  }

  itemClick(event, reactid) {
    if (this.props.onClick) {
      this.props.onClick();
    }
    this.setState({
      isOpen: false
    })
    console.log(this.state);
    // this._bindCloseMenuIfClickedOutside();
  }

  handleMouseDownOnMenu (event) {
    // if the event was triggered by a mousedown and not the primary
    // button, or if the component is disabled, ignore it.
    console.log('阻止事件');
    if (this.props.disabled || (event.type === 'mousedown' && event.button !== 0)) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
  }


  render() {

    const className = classnames(
      this.props.className,
      this.getGrid(),
      'rct-switchbar',
      'shadow',
      this.state.isOpen?'open':''
    )

    const listClassName = classnames(
      'list-box',
      this.getGrid(),
      'shadow',
    )

    return (
      <div ref="container"
          onMouseDown={this.handleMouseDownOnMenu.bind(this)}
          onClick={this.containerClick.bind(this)}
        className={className}>

        <span ref="control"
          style={this.props.style}>
          { this.props.children }
        </span>

        <ul ref="selectMenuContainer" className={listClassName}>
          <li className="item" data-status="0" onClick={this.itemClick.bind(this)} >
            <i className=""></i>进行中
          </li>
          <li className="item" data-status="1" onClick={this.itemClick.bind(this)} >
            <i className=""></i>
            <span className="">已完成</span>
            <i className=""></i>
            <div className="children">
              <ul className={listClassName}>
                <li onClick={this.itemClick.bind(this)} className="item" data-time="all">所有已完成任务</li>
                <li onClick={this.itemClick.bind(this)} className="item" data-time="recently">查看近期完成的任务</li>
                <li onClick={this.itemClick.bind(this)} className="item" data-time="today">今天</li>
                <li onClick={this.itemClick.bind(this)} className="item" data-time="yesterday">昨天</li>
                <li onClick={this.itemClick.bind(this)} className="item" data-time="week">一周</li>
                <li onClick={this.itemClick.bind(this)} className="item" data-time="month">一个月</li>
              </ul>
            </div>
          </li>
          <li className="item" data-status="-1" onClick={this.itemClick.bind(this)} 
            title="查看所有进行中和已完成的任务，按最近更新排序">
            <span className="">
              <i className=""></i>全部
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default SwitchBar

