import React from 'react';
import { Link } from 'react-router';
import PushLeft from '../PushLeft';

class TaskDetail extends React.Component {
  render () {

    let { id } = this.props.params;

    return (
      <PushLeft open={true} className="task-detail-side">
        <div>
          <div className="top-bar clear">
            <span className="lft">
              <i className="fa fa-calendar-check-o"></i>
            </span>
            <span className="rgt">
              <i className="fa fa-list"></i>
              <i className="fa fa-tags ml-15"></i>
              <i className="fa fa-files-o ml-15"></i>
              <i className="fa fa-link ml-15"></i>
              <i className="fa fa-chevron-down ml-15"></i>
            </span>
          </div>
          <div className="title-box clear">
            <ul>
              <li className="clear">
                <i className="fa fa-archive lft"></i>
                <span className="ml-10 lft">未关联项目</span>
                <i className="fa fa-pencil rgt"></i>
                <i className="fa mr-10 fa-times rgt"></i>
              </li>
              <li className="clear">
                <i className="fa fa-list lft"></i>
                <span className="ml-10 lft">我负责的任务</span>
                <i className="fa fa-pencil rgt"></i>
                <i className="fa mr-10 fa-times rgt"></i>
              </li>
            </ul>
          </div>
          <h2>任务#{id}</h2>
          <p>
            Open the network tab as you navigate. Notice that only the amount of
            your app that is required is actually downloaded as you navigate
            around. Even the route configuration objects are loaded on the fly.
            This way, a new route added deep in your app will not affect the
            initial bundle of your application.
          </p>
          <h2>Courses</h2>{' '}
        </div>
      </PushLeft>
    );
  }
}

export default TaskDetail;
