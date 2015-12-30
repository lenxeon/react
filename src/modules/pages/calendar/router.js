// module.exports = {
//   path: 'skydrive',

//   getComponent (location, cb) {
//     require.ensure([], (require) => {
//       cb(null, require('./index'))
//     })
//   }
// }

module.exports = {
	path: '/calendar',

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