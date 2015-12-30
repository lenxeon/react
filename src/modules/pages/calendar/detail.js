import React from 'react';
import { Link } from 'react-router';
import Drawer from '../Drawer';

class TaskDetail extends React.Component {
  render () {

    let { id } = this.props.params;

    return (
      <Drawer open={true}>
        <div>
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
      </Drawer>
    );
  }
}

export default TaskDetail;
