require('../../css/search-box.less')
import React from 'react';

var classnames = require('classnames');

const alt = '智能搜索...';

class SearchBox extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      value: null
    };
    // console.log(this.state);
  }
  focus() {
    var dom = React.findDOMNode(this.refs.searchInput);
    var val = dom.value;
    if (dom.alt == dom.value) {
      val = null;
    }
    this.setState({
      focus: true,
      value: val
    })
  }
  blur() {
    var dom = React.findDOMNode(this.refs.searchInput);
    var val = dom.value;
    this.setState({
      focus: false,
      value: val
    })
  }
  change(){
    var dom = React.findDOMNode(this.refs.searchInput);
    this.setState({
      value: dom.value
    })
  }
  showClose() {
    if (this.state.value && this.state.value != alt) {
      return true;
    }
    return false;
  }
  clearInput(){
    alert('xxx');
    var dom = React.findDOMNode(this.refs.searchInput);
    this.setState({
      value: null
    })
    console.log(this.state);
  }
  render(){
    var focusCls = classnames(
      'search', {
        'focus': this.state.focus
      }
    );
    var closeCls = classnames(
      'close',
      {'show':this.showClose()}
    );
    // console.log(this.state);
    var val = this.state.focus ? this.state.value : this.state.value || alt;
    return(
      <div className={focusCls}>
        <div className="search-out-warp">
          <div className="search-in-warp">
              <i className="fa fa-search icon"></i>
              <input ref="searchInput" 
                onFocus={this.focus.bind(this)} 
                onBlur={this.blur.bind(this)}
                onChange={this.change.bind(this)}
                alt="智能搜索..." value={val} autoComplete="off"/>
              <span className={closeCls} 
                onClick={this.clearInput}>×</span>
          </div>
        </div>
      </div>
    )
  }
};

export default SearchBox;