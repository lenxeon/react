module.exports = {
	path: '/tasks',

	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [{
				path: ':id',
				component: require('./detail'),
			}, ])
		})
	},

	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index'))
		})
	}
};