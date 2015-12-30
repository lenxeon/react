import React from 'react/addons';
import createHashHistory from 'history/lib/createHashHistory'
import {Router, Route, Redirect, Link, History} from 'react-router';
import App from './modules/pages/App';

require ('./css/app.less');

let {CSSTransitionGroup} = React.addons;


global.uiRequire = function (src) {
  if (src) {
    return require('./modules/widget/' + src)
  } else {
    return require('./modules/widget')
  }
};

global.utilRequire = function (src) {
  const {Utils} = require('./modules/widget');
  return Utils[src];
};

let string = global.utilRequire('Strings');

console.log(string.uuid());

const {TimeAgo} = global.uiRequire();
console.log(TimeAgo);

global.uiRequire('lang/zh-cn');

let NotFound = React.createClass({
  render() {
    return (
      <div className="x-container">
        <h2>敬请期待...</h2>
      </div>
    );
  }
});

let rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('./modules/pages/App'),
    childRoutes: [
        require('./modules/pages/skydrive/router'),
        require('./modules/pages/calendar/router'),
        require('./modules/pages/tasks/router'),
        require('./modules/pages/portals/router'),
        require('./modules/pages/feeds/router'),
        require('./modules/pages/ask/router'),{
          path: '*',
          component:NotFound,
        },
    ]
  }]
};


let history = createHashHistory({
  queryKey: false
})

React.render(
  <Router routes={rootRoute} history={history}>
  </Router>,
  document.body
);