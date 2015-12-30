
require('./css/skydrive.less')

import React from 'react';
import {Router, Route, Link, History} from 'react-router';
import {TimeAgo} from'../../widget';
var classnames = require('classnames');

class Skydrive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar"
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    $('.skydrive-box').dragselect({
      dragItem: '.item'
    })

  }

  render(){
    var items = [];
    for(var i=0;i<50;i++){
      items.push({
        id: i,
        name: '我的任务'+i
      });
    }
    var list = items.map((task)=>{
      var checked = task.id % 2==0 ? "fa fa-square-o": "fa fa-check-square-o";
      var star = task.id %3 ==0 ? "fa fa-star":"fa fa-star-o";
      var now = new Date();
      return (
        <div className="item pure-g">
            <div className="pure-u-2-24"><i className={checked}></i></div>
            <div className="pure-u-16-24"><Link to={`/skydrive/${task.id}`}>x{task.name}</Link></div>
            <div className="pure-u-4-24"><TimeAgo date={now}/></div>
            <div className="pure-u-2-24"><i className={star}></i></div>
        </div>
      );
    });
    return(
      <div className="skydrive-box">
        {this.props.children ? (
            <div>
              {list}
              {this.props.children}
            </div>
          ) : (
            <div>
              {list}
            </div>
          )
        }
      </div>
    )
  }
};

export default Skydrive;