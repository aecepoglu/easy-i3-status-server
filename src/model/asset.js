var sequelize = require("../util/sequelize").sequelize;
var TYPES = require("sequelize").DataTypes;

var model = sequelize.define("asset", {
	name: {
		type: TYPES.STRING,
		allowNull: false
	},
	votes: {
		type: TYPES.INTEGER,
		defaultValue: 0
	},
	repoUrl: {
		type: TYPES.STRING,
		unique: true
	}
});

module.exports = model;
