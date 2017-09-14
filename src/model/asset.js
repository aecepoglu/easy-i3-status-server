var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: String,
	votes: {type: Number, default: 0},
	repoUrl: String
});

var model = mongoose.model("Asset", schema);

module.exports = model;
