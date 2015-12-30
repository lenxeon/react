require('../../../css/menu.less')


import React from 'react';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render(){
    return(
      <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">任务</a>
            <ul className="pure-menu-list">
              
                <li className="pure-menu-item pure-menu-selected">
                    <i className="fa fa-check-square-o"></i>
                    <a href="#" className="pure-menu-link">我负责的任务</a>
                    <span>0</span>
                </li>
              
                <li className="pure-menu-item">
                    <i className="fa fa-dot-circle-o"></i>
                    <a href="#" className="pure-menu-link">我参与的任务</a>
                    <span>0</span>
                </li>
              
                <li className="pure-menu-item">
                    <i className="fa fa-check-square"></i>
                    <a href="#" className="pure-menu-link">已完成的任务</a>
                    <span>0</span>
                </li>
              
                <li className="pure-menu-item menu-item-divided">
                    <a href="#" className="pure-menu-link">Grids</a>
                </li>
              
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Forms</a>
                </li>
              
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Buttons</a>
                </li>
              
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Tables</a>
                </li>
              
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Menus</a>
                </li>
              
                <li className="pure-menu-item menu-item-divided">
                    <a href="#" className="pure-menu-link">Tools</a>
                </li>
              
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Customize</a>
                </li>
              
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Extend</a>
                </li>
              
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Blog</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Releases</a>
                </li>
            </ul>
        </div>
      </div>
    )
  }
};

export default Menu;