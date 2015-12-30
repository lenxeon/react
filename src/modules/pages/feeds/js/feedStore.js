import React from 'react';


let FeedStore = {
	list(cat, page, size, cb) {
			cat = cat || 'all';
			page = page || 1;
			size = size || 20;
			$.get('/dist/data/feeds/list_' + cat + '.json', function(result) {
				let list = result[0].card_group;
				setTimeout(() => {
					cb({
						list: list
					});
				}, 500)
			}.bind(this));
		},

		listTag(feedId, cb) {
			let list = [];
			for (let i = 0; i < 5; i++) {
				list.push({
					uuid: i,
					name: '标签'+i
				})
			}
			setTimeout(() => {
				cb({
					list: list
				});
			}, 500)
		},

		searchTag(val, cb) {
			let list = [];
			let size = Math.round(Math.random()*10)+1;
			for (let i = 0; i < size; i++) {
				list.push({
					uuid: i,
					name: 'tag:('+val+')'+i
				})
			}
			setTimeout(() => {
				cb({
					list: list
				});
			}, 200)
		},

		saveTag(feedId, tagId, tagName, cb) {
			setTimeout(() => {
				cb({
					uuid: 'global',
					cli_uuid: tagId,
					name: tagName
				});
			}, 500)
		},
}

export default FeedStore;