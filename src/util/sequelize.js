var Sequelize = require("sequelize");

exports.sequelize = null;

exports.init = function(dbUrl) {
	var sequelize = new Sequelize(dbUrl);

	return sequelize.authenticate()
	.then(function() {
		exports.sequelize = sequelize;

		var Asset = require("../model/asset");

		return Promise.all([
			Asset
		].map(function(it) {
			return it.sync({force: true});
		}));
	})
	.then(function() {
		return sequelize;
	});
}
