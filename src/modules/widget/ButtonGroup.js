"use strict"

import React from 'react'
import classnames from 'classnames'
import getGrid from './higherorder/grid'
import { requireCss } from './themes'
requireCss('buttons')
requireCss('button-groups')


@getGrid
class Button extends React.Component {
  static displayName = 'Button'

  static cls = 'button-group';

  static propTypes = {
    clickHandler: React.PropTypes.func
  }

  static defaultProps = {
      clickHandler() {
      }
  }

  handleClick(e) {
    let changed = true;
    let target = e.target.tagName === 'BUTTON' ? $(e.target) : $(e.target).parents('button');;
    console.log(e.target.tagName);
    console.log(target);

    let parent = $(target).parents('.' + this.cls);
    if (!parent) {
      return;
    }
    if(this.props.active){
      if (target.changed && target.hasClass('active')) {
        changed = false;
      } else {
        target.siblings().removeClass('active');
        $(target).addClass('active');
      }
    }
    this.props.clickHandler.call(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      this.setState({ disabled: nextProps.disabled })
    }
  }

  state = {
    disabled: this.props.disabled,
    show: null
  }

  disable(elem) {
    this.setState({ disabled: true, show: elem })
  }

  enable(elem) {
    this.setState({ disabled: false, show: elem })
  }

  // handleClick() {
  //   if (this.props.onClick) {
  //     this.props.onClick()
  //   }
  //   if (this.props.once) {
  //     this.disable()
  //   }
  // }

  render() {
    let status = this.props.status
    if (status) {
      status = `rct-button-${status}`
    }

    const className = classnames(
      this.props.className,
      this.getGrid(),
      status,
      'button-groups'
    )

    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}

export default Button

