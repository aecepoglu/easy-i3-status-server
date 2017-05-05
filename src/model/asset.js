var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: String,
	description: String,
	downloadUrl: String,
	repoUrl: String
});

var model = mongoose.model("Asset", schema);

module.exports = model;
