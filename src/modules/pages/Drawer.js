require('../../css/drawer.less')

import React from 'react';

const ReactPropTypes = React.PropTypes;

class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  state: {

  }

  componentWillUpdate() {}
  
  componentWillReceiveProps() {
    console.log(this.props);
    console.log(this.state);
    if (this.state.open) {
      this.setState({
        open: false,
      })
      setTimeout(() => {
        this.setState({
          open: this.props.open,
        })
      }, 230)
    } else {
      this.setState({
        open: this.props.open,
      })
    }
  }

  componentWillMount() {}


  componentWillUnmount() {
    this.distoryLayer();
  }
  
  componentDidUpdate() {
    this.renderLayer();
  }

  componentDidMount() {
    this.renderLayer();
  }

  _click() {
    this.setState({
      open: false
    })
  }

  renderChild() {
    return ( <div className = "mod-view-out-wrap">
      <div className = "mod-view-in-wrap">
      <div className = "mod-view-body-wrap"> {
        this.props.children
      } </div> </div> <div className = "foot"
      onClick = {
        this._click.bind(this)
      }>
      <i className = "fa fa-angle-double-up"> </i> </div> </div>
    )
  }

  renderLayer() {
    if (this.state.open) {
      if (this._target == null) {
        this._target = document.createElement('div');
        document.body.appendChild(this._target);
      }
      var height = $(document).height();
      $(this._target).addClass('mod-view').css({
        'transform': 'translate(0px, -' + height + 'px)',
        'transition': 'transform 0ms'
      });
      var o = this;
      var st = 300;
      setTimeout(function() {
        $('body').addClass('open-mod');
        $(o._target).css({
          'transform': 'translate(0px, 0px)',
          'transition': 'transform 300ms cubic-bezier(0,1,0.5,1)'
        })
      }, st + 100);
      setTimeout(function() {
        $(o._target).addClass('shake');
      }, st + 400)
      var tree = o.renderChild();
      React.render(tree, o._target);
    } else {
      this.distoryLayer();
    }
  }

  distoryLayer() {
    if (this._target != null) {
      var t = this._target;
      var height = $(t).height();
      $(t).css({
        'transform': 'translate(0px, -' + height + 'px)',
        'transition': 'transform 300ms cubic-bezier(0,1,0.5,1)'
      })
      var o = this;
      setTimeout(function() {
        React.unmountComponentAtNode(o._target);
        $(o._target).remove();
        o._target = null;
        typeof o.unbindWindowEvents === "function" ? o.unbindWindowEvents() : void 0;
        $('body').removeClass('open-mod');
      }, 200);
    }
  }

  render() {
    return ( <div /> )
  }

};

export default Drawer;