'use strict'

import React from 'react'
var assign = require('react/lib/Object.assign')
import {
  getLang, setLang
}
from './lang'
setLang('buttons')

class TimeAgo extends React.Component {

  displayName: 'TimeAgo'
  timeoutId: 0
  mounted:false
  static defaultProps = {
    live: true,
    component: 'span',
    minPeriod: 0,
    maxPeriod: Infinity,
    formatter(value, unit, suffix) {
      if (value !== 1) {
        unit += ''
      }
      return value + '<span>' + unit + '' + suffix + '</span>'
    }
  }
  static propTypes = {
    live: React.PropTypes.bool.isRequired,
    minPeriod: React.PropTypes.number.isRequired,
    maxPeriod: React.PropTypes.number.isRequired,
    component: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]).isRequired,
    formatter: React.PropTypes.func.isRequired,
    date: React.PropTypes.oneOfType(
      [React.PropTypes.string, React.PropTypes.number, React.PropTypes.instanceOf(Date)]
    ).isRequired
  }
  componentDidMount() {
    this.mounted = true;
    if (this.props.live) {
      this.tick(true)
    }
  }
  componentDidUpdate(lastProps) {
    if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {
      if (!this.props.live && this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
      this.tick()
    }
  }
  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }
  tick(refresh) {
    if (!this.mounted || !this.props.live) {
      return
    }

    var period = 1000

    var then = (new Date(this.props.date)).valueOf()
    var now = Date.now()
    var seconds = Math.round(Math.abs(now - then) / 1000)

    if (seconds < 60) {
      period = 1000
    } else if (seconds < 60 * 60) {
      period = 1000 * 60
    } else if (seconds < 60 * 60 * 24) {
      period = 1000 * 60 * 60
    } else {
      period = 0
    }

    period = Math.min(Math.max(period, this.props.minPeriod), this.props.maxPeriod)

    if (!!period) {
      this.timeoutId = setTimeout(this.tick, period)
    }

    if (!refresh) {
      this.forceUpdate()
    }
  }

  render() {
    var then = (new Date(this.props.date)).valueOf()
    var now = Date.now()
    var seconds = Math.round(Math.abs(now - then) / 1000)

    var suffix = then < now ? getLang('date.ago') || 'ago' : getLang('date.from_now') || 'from now'

    var value, unit

    if (seconds < 60) {
      value = Math.round(seconds)
      unit = getLang('date.second') || 'second'
    } else if (seconds < 60 * 60) {
      value = Math.round(seconds / 60)
      unit = getLang('date.minute') || 'minute'
    } else if (seconds < 60 * 60 * 24) {
      value = Math.round(seconds / (60 * 60))
      unit = getLang('date.hour') || 'hour'
    } else if (seconds < 60 * 60 * 24 * 7) {
      value = Math.round(seconds / (60 * 60 * 24))
      unit = getLang('date.day') || 'day'
    } else if (seconds < 60 * 60 * 24 * 30) {
      value = Math.round(seconds / (60 * 60 * 24 * 7))
      unit = getLang('date.week') || 'week'
    } else if (seconds < 60 * 60 * 24 * 365) {
      value = Math.round(seconds / (60 * 60 * 24 * 30))
      unit = getLang('date.month') || 'month'
    } else {
      value = Math.round(seconds / (60 * 60 * 24 * 365))
      unit = getLang('date.year') || 'year'
    }

    var props = assign({}, this.props)

    delete props.date
    delete props.formatter
    delete props.component
    var str = unit + suffix;
    return ( <div className = "time">
      <span className = "val"> {
        value
      } </span> <span className = "unit"> {
        str
      } </span> </div>
    );

    // return React.createElement( this.props.component, props, this.props.formatter(value, unit, suffix, then) )
  }
}

export default TimeAgo;