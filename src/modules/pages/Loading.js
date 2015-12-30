
require('../../css/loading.less')

import React from 'react';

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  state: {
    open: false
  }

  _click(){
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return(
      <div className="loading-init">
        <div className="init-logo"></div>
        <div className="init-circle"></div>
      </div>
    )
  }
};

export default Loading;