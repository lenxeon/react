
var React = require('react');
var cx = require('react/lib/cx');


var App = React.createClass({
  getInitialState: function(){
    return {
      open: false
    }
  },
  _click:function(){
    this.setState({
      open: !this.state.open
    })
  },
  render:function(){
    var openStyle = this.state.open ? "member-bar member-bar-full-mode" : "member-bar  member-bar-min-mode";
    return(
        <aside
          onClick={this._click} 
          className={openStyle}
          >
          <div className="member-bar-header">
            <i className="fa fa-plus-circle"/>
          </div>
          <div className="input-group">
            <div className="input-group-addon">
              <i className="fa fa-search"></i>
            </div>
            <input type="text" className="form-control" placeholder="Amount"/>
            <div className="input-group-addon">
              <i className="fa fa-search"></i>
            </div>
          </div>
          <footer className="member-bar-footer">
            <i className="fa fa-chevron-circle-left"/>
          </footer>
        </aside>
    )
  }
});

module.exports = App;