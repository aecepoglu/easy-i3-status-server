var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var config = require("./config");

var app = express();

mongoose.Promise = require("q").Promise;

mongoose.connect(config.mongoUrl);

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/",
	bodyParser.urlencoded({extended: false}),
	require("./controllers"),
	function(err, req, res, next) {
		console.warn(err);
		res.status(400).send(err);
});

app.get("/", function(req, res) {
	res.render("index.ejs");
});

module.exports = app;
