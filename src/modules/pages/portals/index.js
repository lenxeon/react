
require('../../../css/panel.less')

import React from 'react';
var Menu = require('./Menu');
var Main = require('./Main');
const {ButtonGroup, Button, Modal, Grid, Message, Overlay} = global.uiRequire();

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  _click(){
    this.setState({
      open: !this.state.open
    })
    console.log(this.state);
  }

  render(){
    return(
      <div className="has-menu body-wrap">
        <Menu/>
        <Main/>
      </div>
    )
  }
};

export default Loading;