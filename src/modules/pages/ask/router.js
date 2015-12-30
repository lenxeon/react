module.exports = {
  path: 'ask',

  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index'))
    })
  }
}

