module.exports = {
	path: 'feeds',

	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [

				// {
				// 	path: '/feeds/all',
				// 	component: require('./js/index'),
				// }, {
				// 	path: '/feeds/hots',
				// 	component: require('./js/index'),
				// }, {
				// 	path: '/feeds/atme',
				// 	onEnter: function() {
				// 		console.log(this);
				// 	},
				// 	component: require('./js/index'),
				// }, 
				{
					path: ':id',
					component: require('./js/detail'),
				},
			])
		})
	},
	component: require('./js/index'),
}