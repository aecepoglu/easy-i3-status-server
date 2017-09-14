var express = require("express");
var handlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var config = require("./config");

var app = express();

mongoose.Promise = require("q").Promise;

mongoose.connect(config.mongoUrl);

app.engine("handlebars", handlebars({
	defaultLayout: "index",
	layoutsDir: __dirname + "/views/layouts"
}));
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");


app.use("/",
	bodyParser.urlencoded({extended: false}),
	require("./controllers"),
	function(err, req, res, next) {
		console.warn(err);
		res.status(400).send(err);
	}
);

module.exports = app;
