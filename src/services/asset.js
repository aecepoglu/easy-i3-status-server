var Q = require("q");

exports.list = function() {
	return Q.fcall(function() {
		var assets = [];

		for (var i = 0; i < 10; i ++) {
			assets.push({name: "asset " + i});
		}

		return assets;
	});
};
