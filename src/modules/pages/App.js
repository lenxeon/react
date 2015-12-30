import React from 'react';
import {Router, Route, Redirect, Link, History} from 'react-router';
import PubSub from 'pubsub-js'
import Loading from './Loading';
import Header from './Header';
import Skydrive from './skydrive';
import Task from './tasks';
import Ask from './ask';
import Feeds from './feeds/js';

const BODY_CLICK = "000000000000"

class App extends React.Component {

  mixins: [Router.Navigation]

  constructor(props) {
    super(props);
    let {history} = props;
    // history.transitionTo('ask', {id: "123"});

    let {location, params, route, routeParams} = this.props;
    // if(location.pathname==='/'){
    //   history.replaceState(null, '/feeds');
    // }
    // let { query } = location;
    // console.log(location);
    // console.log(params);
    // console.log(route);
    // console.log(routeParams);
    // console.log(query);
    this.state = {
      foo: "bar"
    };
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loaded: true
      });
    }, 1000);
    dragula([$('.x-container').get(0)]);
  }

  clickHandler(e) {
    // PubSub.publish(BODY_CLICK)
  }

  render(){
    var imgStyle = {
      backgroundColor: 'transparent',
      // backgroundImage:'url("https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/65.jpg?2")'
    };
    var loginButton = (<div/>);    
    if (!this.state.loaded) {
      loginButton = (<Loading />);
    }

    return(
      <div onClick={this.clickHandler.bind(this)}>
        <div className="s-skin-container s-isindex-wrap" style={imgStyle}></div>
        <Header/>
        <div>
          {this.props.children || <Ask/>}
        </div>
        {loginButton}

      </div>
    )
  }
};

export default App;