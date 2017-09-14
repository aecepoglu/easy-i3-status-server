var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: String,
	votes: Number,
	repoUrl: String
});

var model = mongoose.model("Asset", schema);

module.exports = model;
